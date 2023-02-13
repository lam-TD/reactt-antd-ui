import {call, put, takeLatest, takeEvery} from 'redux-saga/effects';
import {login, loginFail, loginStart, loginSuccess, logout, logoutFail, logoutSuccess} from "./authSlice";
import * as authActions from './authActions';
import * as authAPI from './authAPI';
import * as authentication from '../../../services/authentication';

function* handleLogin(action) {
	try {
		yield put(loginStart());
		const response = yield call(authAPI.login, action.payload);
		const {access_token, user} = response.data;
		yield put(loginSuccess(user));
		yield call(authentication.setAccessToken, access_token);
	} catch (error) {
		const {message} = error.response.data
		yield put(loginFail(message));
	}
}

function* handleLogout() {
	try {
		yield put(logout());
		const response = yield call(authAPI.logout);
		const data = response.data;
		yield put(logoutSuccess());
		yield call(authentication.clearAccessToken);

	} catch (error) {
		console.log('sage error', error)
		const {message} = error.response.data
		yield put(logoutFail(message));
	}
}

function* getAuthInfo() {
	try {
		const response = yield call(authAPI.getUserFromToken);
		const user = response.data;
		yield put(loginSuccess(user));
	} catch (error) {
		yield put(loginFail('User is not login'));
	}

}

export function* watchLogin() {
	yield takeLatest(authActions.actions().type, handleLogin);
}

export function* watchLogout() {
	yield takeEvery(authActions.logout().type, handleLogout);
}

export function* watchAuthInfo() {
	yield takeLatest(authActions.getAuthInfo().type, getAuthInfo);
}

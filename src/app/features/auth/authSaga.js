import { call, put, takeLatest } from 'redux-saga/effects';
import {loginStart, loginSuccess, loginFail, setToken} from './authSlice';
import { apiLogin } from './authAPI';

function* handleLogin(action) {
	try {
		yield put(loginStart());
		const user = yield call(apiLogin, action.payload);
		const { token } = response.data;
		yield put(loginSuccess(user));
		yield put(setToken(token));
	} catch (error) {
		yield put(loginFail(error.message));
	}
}

export function* watchLogin() {
	yield takeLatest(loginStart().type, handleLogin);
}

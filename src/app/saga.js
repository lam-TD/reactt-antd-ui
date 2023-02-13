import {all} from 'redux-saga/effects';
import {authSagas} from '../features/auth/redux';

export default function* rootSaga() {
	yield all([
		authSagas.watchLogin(),
		authSagas.watchAuthInfo(),
		authSagas.watchLogout(),
	]);
}

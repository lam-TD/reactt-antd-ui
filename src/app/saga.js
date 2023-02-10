import {all} from 'redux-saga/effects';
import loginSaga from "./pages/auth/login/loginSaga";

function *sayHiSaga() {
	console.log('Hi Saga')
}
export default function* rootSaga() {
	yield all([sayHiSaga(), loginSaga()]);
}

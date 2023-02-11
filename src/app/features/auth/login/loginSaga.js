import {takeEvery} from 'redux-saga/effects';
import {PayloadAction} from "@reduxjs/toolkit";
import LoginSlice, {loadInfo, loadLoginInfo} from "./LoginSlice";
function log(action: PayloadAction) {
	console.log('log', action)
}
export default function* loginSaga() {
	console.log('LoginSage is running...');
	yield takeEvery(loadInfo().type, log)
}

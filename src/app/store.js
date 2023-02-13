import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'

import thunk from 'redux-thunk';
import loginReducer from './features/auth/login/LoginSlice';
import {authReducer} from "../features/auth/redux";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
	const {logger} = require(`redux-logger`);
	middlewares.push(logger);
}

export const store = configureStore({
	reducer: {
		login: loginReducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
});

sagaMiddleware.run(rootSaga)

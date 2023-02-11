import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'

import thunk from 'redux-thunk';
import loginReducer from './features/auth/login/LoginSlice';
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
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
});

sagaMiddleware.run(rootSaga)

import axios from 'axios';
import {getAccessToken} from "./authentication";
import {store} from "../app/store";
import {loginFail} from "../app/features/auth/authSlice";
// import * as querystring from "querystring";

const instance = axios.create({
	baseURL: 'http://192.168.20.53:8080/laravel',
	headers: {
		Accept: 'application/json',
	},
	// paramsSerializer: params => querystring.stringify(params),
});


instance.interceptors.request.use(config => {
	if (getAccessToken()) {
		config.headers.Authorization = `Bearer ${getAccessToken()}`;
	}

	return config;
}, function (error) {
	return Promise.reject(error);
});


instance.interceptors.response.use((response) => response, async (error) => {
	if (error?.response?.status === 401) {
		store.dispatch(loginFail());
		window.location.href = '/login';
	}

	return Promise.reject(error);
})

export default instance;

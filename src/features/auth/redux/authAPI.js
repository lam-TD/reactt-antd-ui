import smoothFileApi from "../../../services/clientApi";
import SFClient from "../../../services/SFClient";
// import axios from "axios";
import {getAccessToken} from "../../../services/authentication";

export const login = (credentials) => {
	const credentialsFinal = {
		login_code: credentials.login_code,
		password: credentials.password,
	};
	return SFClient
		.post('admin/api/auth/login', credentialsFinal)
		.then(response => response.data)
}

export const logout = () => {
	// smoothFileApi.defaults.headers['Authorization'] = `Bearer ${getAccessToken()}`'
	return SFClient
		.post('admin/api/auth/logout')
		.then(response => response.data)
}


export const getUserFromToken = (userId = '00000303') => {
	return SFClient
		.get(`admin/api/users/${userId}`)
		.then(response => response.data)
}

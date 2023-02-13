import axios from "axios";
import {getAccessToken} from "./authentication";

const getHeader = () => {
	return {
		Accept: 'application/json',
		Authorization: `Bearer ${getAccessToken()}`
	}
}

const smoothFileApi = axios.create({
	baseURL: 'http://192.168.20.53:8080/laravel',
	headers: {
		Accept: 'application/json',
	}
})

export default smoothFileApi;

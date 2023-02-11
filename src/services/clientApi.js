import axios from "axios";
import {getAccessToken} from "./authentication";

const getHeader = () => {
	return {
		Accept: 'application/json',
		Authorization: `Bearer ${getAccessToken()}`
	}
}

const clientApi = axios.create({
	baseURL: '',
	timeout: 10000,
	headers: getHeader()
})

export default clientApi;

// A mock function to mimic making an async request for data
import clientApi from "../../../../services/clientApi";

export function fetchLoginInfo(companyCode) {
	return new Promise((resolve) =>
		setTimeout(() => resolve({
			data: {
				ldap: [
					{
						ldap_id: '001',
						ldap_name: 'Plott Local'
					},
				]
			},

		}), 500)
	);
}

export const getInfoLogin = (companyCode) => {
	return clientApi
		.get(`login/info/${companyCode}`)
}

export const login = (credentials) => {
	return clientApi.post('login', credentials)
		.then(res => res.data)
}

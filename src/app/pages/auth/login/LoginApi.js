// A mock function to mimic making an async request for data
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

export const actions = (data) => ({
	type: 'AUTH_LOGIN',
	payload: data
})

export const logout = () => ({
	type: 'AUTH_LOGOUT',
	payload: null
})


export const getAuthInfo = (data) => ({
	type: 'AUTH_GET_INFO',
	payload: data
});

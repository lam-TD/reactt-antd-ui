import {store} from '../app/store';
import {authActions} from '../features/auth/';
export const getAccessToken = () => localStorage.getItem('access_token');
export const setAccessToken = (access_token) => localStorage.setItem('access_token', access_token);
export const clearAccessToken = () => localStorage.removeItem('access_token');


export const isAuthenticated = () => {
	const token = getAccessToken();
	return !!token;
	if (!!token)
		return false;
	else {
		// store.dispatch(authActions.getAuthInfo(localStorage.getItem('user_id')));
		return false;
	}
};

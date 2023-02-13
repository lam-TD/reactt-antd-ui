import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false,
		isLoadingLogout: false,
		user: null,
		isLoading: false,
		error: null,
		isShowLogoutModal: false,
		logoutError: null
	},
	reducers: {
		login: (state) => {
			console.log(state)
		},
		loginStart: (state) => {
			console.log('loginStart')
			state.isLoading = true;
			state.error = null;
		},
		loginSuccess: (state, action) => {
			state.isLoading = false;
			state.isLoggedIn = true;
			state.user = action.payload;
		},
		loginFail: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		logout: (state) => {
			state.isLoadingLogout = true;
		},
		logoutSuccess: (state) => {
			state.isLoggedIn = false;
			state.isLoadingLogout = false;
			state.user = null;
		},
		logoutFail: (state, action) => {
			state.isLoadingLogout = false;
			state.logoutError = action.payload;
		},
		showLogoutModal: (state, action) => {
			state.isShowLogoutModal = action.payload
		},
		getAuthInfo: (state, action) => {
			console.log('get auth info starting...')
		},
		setUser: (state, action) => {
			state.user = action.payload
		}
	},
});

export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsLoadingLogout = (state) => state.auth.isLoadingLogout;
export const selectIsLoggingIn = (state) => state.auth.isLoggedIn;
export const selectLoginError = (state) => state.auth.error;
export const selectLogoutError = (state) => state.auth.logoutError;
export const selectUser = (state) => state.auth.user;

export const {
	login,
	loginStart,
	loginSuccess,
	loginFail,
	logout,
	logoutSuccess,
	logoutFail,
	showLogoutModal,
	getAuthInfo,
	setUser,
} = authSlice.actions;

export default authSlice.reducer;

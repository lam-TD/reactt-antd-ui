import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false,
		accessToken: null,
		user: null,
		isLoading: false,
		error: null,
	},
	reducers: {
		loginStart: (state) => {
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
			state.isLoggedIn = false;
			state.error = action.payload;
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.user = null;
		},
		setToken(state, action) {
			state.token = action.payload;
		},
	},
});

export const { loginStart, loginSuccess, loginFail, logout, setToken } = authSlice.actions;

export default authSlice.reducer;

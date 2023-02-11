import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchLoginInfo, getInfoLogin} from "./LoginApi";

const initialState = {
	value: 0,
	companyCode: 'admin',
	info: {},
	status: 'idle',
};

export const loadLoginInfo = createAsyncThunk(
	'login/fetchLoginInfo',
	async (companyCode) => {
		const response = await fetchLoginInfo(companyCode);
		return response.data;
	}
);

export const getLoginInfo = createAsyncThunk(
	'login/info',
	async (companyCode) => {
		const response = await getInfoLogin(companyCode);
		return response.data
	}
)

export const handleLogin = createAsyncThunk(
	'login/submit',
	async (credentials) => {
		const response = await login(credentials);
		return response.data
	}
)

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		loadInfo: (state, action) => {
			state.company = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadLoginInfo.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(loadLoginInfo.fulfilled, (state, action) => {
				state.status = 'idle';
				state.info = action.payload;
			})
			.addCase(getLoginInfo.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getLoginInfo.fulfilled, (state, action) => {
				state.status = 'idle';
				state.info = action.payload;
			})

			.addCase(handleLogin.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(handleLogin.fulfilled, (state, action) => {
				state.status = 'idle';
				state.info = action.payload;
			})
		;

	},

})

export const {loadInfo, login} = loginSlice.actions;

export const selectLogin = (state) => state.login;

export default loginSlice.reducer;

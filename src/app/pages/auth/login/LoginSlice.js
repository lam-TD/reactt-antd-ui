import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchLoginInfo} from "./LoginApi";

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


export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		loadInfo: (state, action) => {
			state.company = action.payload
		},
		login: (state, action) => {
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
				console.log(action.payload)
				state.info = action.payload;
			});

	},

})

export const {loadInfo, login} = loginSlice.actions;

export const selectLogin = (state) => state.login;

export default loginSlice.reducer;

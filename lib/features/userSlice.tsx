import { IUser } from '../interfaces/user.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IUser = {
	access_token: null,
	expires_in: 0,
	refresh_expires_in: 0
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setToken: (state, { payload }) => {
			Object.assign(state, payload);
		},
		clearToken: (state) => {
			Object.assign(state, initialState);
		}
	}
});

export const { setToken, clearToken } = userSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

interface UserState {
	access_token: string | null;
	expires_in: number;
	refresh_expires_in: number;
}

const initialState: UserState = {
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

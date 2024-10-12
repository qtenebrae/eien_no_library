import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3131',
		credentials: 'include',
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).user.access_token;
			if (token) {
				headers.set('Authorization', `Bearer ${token}`);
			}
			return headers;
		}
	}),
	endpoints: (builder) => ({
		signIn: builder.mutation({
			query: (data) => ({ url: '/keycloak/signIn', body: data, method: 'POST' })
		}),
		signUp: builder.mutation({
			query: (data) => ({ url: '/keycloak/signUp', body: data, method: 'POST' })
		}),
		refreshTokens: builder.mutation({
			query: () => ({
				url: '/keycloak/refresh',
				method: 'POST'
			})
		}),
		logout: builder.mutation({
			query: () => ({
				url: '/keycloak/logout',
				method: 'POST'
			})
		})
	})
});

export const { useSignInMutation, useSignUpMutation, useRefreshTokensMutation, useLogoutMutation } =
	api;

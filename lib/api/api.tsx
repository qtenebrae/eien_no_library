import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3131'
	}),
	endpoints: (builder) => ({
		signIn: builder.mutation({
			query: (data) => ({ url: '/keycloak/signIn', body: data, method: 'POST' })
		}),
		signUp: builder.mutation({
			query: (data) => ({ url: '/keycloak/signUp', body: data, method: 'POST' })
		})
	})
});

export const { useSignInMutation, useSignUpMutation } = api;

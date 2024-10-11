import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';

const reducers = combineReducers({
	[api.reducerPath]: api.reducer
});

export const makeStore = () => {
	return configureStore({
		reducer: reducers,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

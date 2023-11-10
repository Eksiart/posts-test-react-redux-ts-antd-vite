import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postReducer } from '@/store/slices/PostsListSlice.ts';
import { filtersReducer } from '@/store/slices/FiltersSlice.ts';
import { postDetailsReducer } from '@/store/slices/PostDetailsSlice.ts';

const rootReducer = combineReducers({
	postReducer,
	filtersReducer,
	postDetailsReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

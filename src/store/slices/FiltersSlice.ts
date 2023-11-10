import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFiltersState {
	limit: number;
	page: number;
	title: string;
}

const initialState: IFiltersState = {
	limit: 7,
	page: 1,
	title: '',
}

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
	}
})

export const { actions: filtersActions } = filtersSlice;
export const { reducer: filtersReducer } = filtersSlice;

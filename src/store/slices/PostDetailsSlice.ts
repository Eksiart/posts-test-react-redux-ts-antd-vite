import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '@/models/IPost.ts';
import { fetchPostById } from '@/store/services/fetchPostById.ts';

export interface IPostDetailsState {
	isLoading: boolean;
	error: string | undefined;
	post: IPost | undefined;
}

const initialState: IPostDetailsState = {
	isLoading: false,
	error: undefined,
	post: undefined,
};
export const postDetailsSlice = createSlice({
	name: 'postDetails',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPostById.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
				state.post = undefined;
			})
			.addCase(fetchPostById.fulfilled, (
				state,
				action: PayloadAction<IPost>,
			) => {
				state.error = undefined;
				state.isLoading = false;
				state.post = action.payload;
			})
			.addCase(fetchPostById.rejected, (state) => {
				state.isLoading = false;
				state.error = 'Ошибка при загрузке данных';
				state.post = undefined;
			});
	},
});

export const { actions: postDetailsActions } = postDetailsSlice;
export const { reducer: postDetailsReducer } = postDetailsSlice;

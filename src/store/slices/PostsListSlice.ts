import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '@/models/IPost.ts';
import { fetchPosts } from '@/store/services/fetchPosts.ts';

type fetchPostsReturnType = {
	data: IPost[];
	totalPosts: number;
}

export interface PostState {
	posts: IPost[];
	totalPosts: number;
	isLoading: boolean;
	error: string;
}

const initialState: PostState = {
	posts: [],
	totalPosts: 0,
	isLoading: false,
    error: '',
}

export const postsListSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
				state.error = '';
				state.posts = [];
            })
            .addCase(fetchPosts.fulfilled, (
				state,
				action: PayloadAction<fetchPostsReturnType>
			) => {
				state.isLoading = false;
				state.error = '';
				state.posts = action.payload.data;
				state.totalPosts = action.payload.totalPosts;
            })
            .addCase(fetchPosts.rejected, (state) => {
				state.isLoading = false;
				state.error = 'Ошибка при загрузке данных';
				state.posts = [];
            })
	}
})

export const { reducer: postReducer } = postsListSlice;

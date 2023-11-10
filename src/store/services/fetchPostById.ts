import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPost } from '@/models/IPost.ts';

export const fetchPostById = createAsyncThunk(
	'post/fetchPostsById',
	async (postId: number, thunkAPI) => {
		const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
		try {
			const res = await axios.get<IPost>(url)

			if (!res.data) {
				throw new Error();
			}

			return res.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('Не удалось загрузить посты');
		}
	}
)

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPost } from '@/models/IPost.ts';
import { IFiltersState } from '@/store/slices/FiltersSlice.ts';

export const fetchPosts = createAsyncThunk(
	'post/fetchPostsByPageAndTitle',
	async (params: IFiltersState, thunkAPI) => {
		const { limit, page, title } = params
		const titleParam = title? `&title_like=${title}` : ''
		const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}${titleParam}`
		try {
			const res = await axios.get<IPost[]>(url)

			if (!res.data) {
				throw new Error();
			}

			return { data: res.data, totalPosts: Number(res.headers['x-total-count']) };
		} catch (e) {
			return thunkAPI.rejectWithValue('Не удалось загрузить посты');
		}
	}
)

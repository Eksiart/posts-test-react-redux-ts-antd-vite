import { useAppDispatch, useAppSelector } from '@/hooks/redux.js';
import { filtersActions } from '@/store/slices/FiltersSlice.js';
import { Pagination as AntdPagination } from 'antd';

const Pagination = () => {
	const dispatch = useAppDispatch();
	const { totalPosts } = useAppSelector(state => state.postReducer)
	const { page } = useAppSelector(state => state.filtersReducer)

	const onPageChange = (value: number) => {
		dispatch(filtersActions.setPage(value))
	}

	return (
		<div style={{ margin: '0 auto' }}>
			{totalPosts > 0
				? <AntdPagination
					showSizeChanger={false}
					current={page}
					total={totalPosts}
					onChange={onPageChange}
				/>
				: null
			}
		</div>
	);
};

export default Pagination;

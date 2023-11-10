import { useCallback } from 'react';
import debounce from "lodash/debounce";
import { useAppDispatch } from '@/hooks/redux.ts';
import { filtersActions } from '@/store/slices/FiltersSlice.ts';
import { Input } from 'antd';

const Filters = () => {
	const dispatch = useAppDispatch();

	const onChangeSearchInput = useCallback(
		debounce((value?: string) => {
			dispatch(filtersActions.setTitle(value || ''));
		}, 500)
		,[dispatch]
	)

	return (
		<Input
			size='large'
			placeholder='Введите заголовок поста...'
			onChange={(e) => onChangeSearchInput(e.target.value)}
		/>
	);
};

export default Filters;

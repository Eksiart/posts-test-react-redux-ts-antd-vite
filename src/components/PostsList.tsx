import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux.ts';
import { fetchPosts } from '@/store/services/fetchPosts.ts';
import PostsListItem from '@/components/PostsListItem.tsx';
import { Button, Card, Flex, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const PostsList = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch()
	const { posts, isLoading, error } = useAppSelector(state => state.postReducer)
	const { page, limit, title } = useAppSelector(state => state.filtersReducer)

	useEffect(() => {
        dispatch(fetchPosts({ page, limit, title }))
    }, [dispatch, page, limit, title])

	let content;

	if (isLoading) {
		content = []
		for (let i = 0; i < 4; i++) {
			content.push(
				<Card key={i} style={{ width: 300, marginTop: 16 }} loading/>
			)
		}
	}

	if (error) {
        content = (
			<Result
				status="warning"
				title={error}
				extra={
					<Button
						type="primary"
						key="console"
						onClick={() => navigate(0)}
					>
						Обновить страницу
					</Button>
				}
			/>
		)
    }

	if(!isLoading && !error) {
		if (posts.length === 0) {
			content = <Result title="Похоже, что постов с таким заголовком нет"/>
		} else {
			content = posts.map(post => (
				<PostsListItem
					key={post.id}
					post={post}
				/>
			))
		}
	}

	return (
		<Flex wrap={'wrap'} justify={'center'} style={{ gap: 50, padding: 50 }}>
			{content}
		</Flex>
	);
};

export default PostsList;

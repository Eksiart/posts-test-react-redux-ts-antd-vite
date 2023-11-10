import { useAppDispatch, useAppSelector } from '@/hooks/redux.ts';
import { useEffect } from 'react';
import { fetchPostById } from '@/store/services/fetchPostById.ts';
import { Button, Divider, Result, Spin, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

const PostDetails = ({ id }: { id: number }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch()
	const { post, isLoading, error } = useAppSelector(state => state.postDetailsReducer)

	useEffect(() => {
		dispatch(fetchPostById(id))
	}, [dispatch, id])

	return (
		<>
			{isLoading &&
				<div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>
					<Spin size="large"/>
				</div>
			}
			{error && <Result title="Похоже, что поста с таким идентификатором нет"/>}
			{post &&
				<div style={{ padding: '5% 25px', backgroundColor: 'white', borderRadius: '30px', width: '75%' }}>
					<Title level={2}>{post?.title}</Title>
					<Divider />
					<Title level={5}>{post?.body}</Title>
					<Button
						onClick={() => navigate(-1)}
						size="large"
						type="primary"
					>
						Back
					</Button>
				</div>
			}
		</>
	);
};

export default PostDetails;

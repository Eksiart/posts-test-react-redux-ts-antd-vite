import { useParams } from 'react-router-dom';
import toInteger from 'lodash.toInteger';
import PostDetails from '@/components/PostDetails.tsx';
import { Flex } from 'antd';

const PostDetailsPage = () => {
	const { id } = useParams<{ id: string }>()

	return (
		<Flex vertical align='center' style={{ padding: '5% 0' }}>
			<PostDetails id={toInteger(id)}/>
		</Flex>
	);
};

export default PostDetailsPage;

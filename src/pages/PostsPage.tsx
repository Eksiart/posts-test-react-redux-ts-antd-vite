import { Flex } from 'antd';
import Filters from '@/components/Filters.tsx';
import PostsList from '@/components/PostsList.tsx';
import Pagination from '@/pages/Pagination.tsx';

const PostsPage = () => {
	return (
		<Flex vertical justify='center' style={{ padding: 50 }}>
			<Filters />
			<PostsList />
			<Pagination />
		</Flex>
	);
};

export default PostsPage;

import { IPost } from '@/models/IPost.ts';
import { Card, Typography } from 'antd';

const { Text, Link  } = Typography;

const PostsListItem = ({ post }: { post: IPost }) => {
	return (
		<Card
			title={post.title}
			style={{ width: 300 }}
			bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}
			actions={[
				<Link key={post.id + 'Link'} href={`/posts/${post.id}`}>
					Read more
				</Link>
			]}
		>
			<Text ellipsis>{post.body}</Text>
		</Card>
	);
};

export default PostsListItem;

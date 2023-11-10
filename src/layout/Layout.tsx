import { CSSProperties } from 'react';
import { Layout as AntdLayout, Flex } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Footer, Content } = AntdLayout;

const headerStyle: CSSProperties = {
	color: '#fff',
	height: 64,
	paddingInline: 50,
	lineHeight: '64px',
	backgroundColor: '#108ee9',
};

const contentStyle: CSSProperties = {
	minHeight: 120,
	lineHeight: '120px',
	backgroundColor: '#e5e5e5',
};

const footerStyle: CSSProperties = {
	color: '#fff',
	backgroundColor: '#108ee9',
};

const Layout = () => {
	return (
		<AntdLayout style={{ minHeight: '100vh' }}>
			<Header style={headerStyle}>
				<h1>Posts JSON placeholder</h1>
			</Header>
			<Content style={contentStyle}>
				<Outlet/>
			</Content>
			<Footer style={footerStyle}>
				<Flex justify={'space-between'} align={'center'}>
					<h3>Posts JSON placeholder</h3>
					<h3>No rights reserved.</h3>
				</Flex>
			</Footer>
		</AntdLayout>
	);
};

export default Layout;

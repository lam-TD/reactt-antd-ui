// @flow
import * as React from 'react';
import {Breadcrumb, Layout, Menu, theme} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
	const key = String(index + 1);
	return {
		key: `sub${key}`,
		icon: React.createElement(icon),
		label: `subnav ${key}`,
		children: new Array(4).fill(null).map((_, j) => {
			const subKey = index * 4 + j + 1;
			return {
				key: subKey,
				label: `option${subKey}`,
			};
		}),
	};
});
export const SettingPage = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout>
			<Sider
				width={350}
				// style={{background: colorBgContainer,}}
				breakpoint="lg"
				collapsedWidth="0"
			>
				<Menu
					mode="inline"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					style={{
						height: '100%',
						borderRight: 0,
					}}
					items={items2}
				/>
			</Sider>
			<Layout style={{padding: '0 24px 24px',}}>
				<Breadcrumb style={{margin: '16px 0',}}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<Content
					style={{
						padding: 24,
						margin: 0,
						minHeight: 280,
						background: colorBgContainer,
					}}
				>
					Content
				</Content>
			</Layout>
		</Layout>
	);
};

import React from 'react';
// import './index.css';
import {
	BellOutlined,
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
	ProfileOutlined,
	SettingOutlined
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu, Pagination, theme} from 'antd';
import Header from '../header/Header'
import LanguageSelect from '../language/LanguageSelect';
import SwitchMode from '../theme-mode/SwitchMode';
import {Outlet} from "react-router-dom";

const {Content, Footer, Sider} = Layout;

const items: MenuProps['items'] = [
	{
		label: <SwitchMode/>,
		key: 'switch-mode',
	},
	{
		label: <LanguageSelect/>,
		key: 'language',
	},
	{
		label: 'Notification',
		key: 'notification',
		icon: <BellOutlined/>,
	},
	{
		label: 'List',
		key: 'app',
		icon: <ProfileOutlined/>,
		disabled: true,
	},
	{
		label: 'Setting',
		key: 'setting',
		icon: <SettingOutlined/>,
	},
	{
		label: 'Administrator',
		key: 'user',
		icon: <UserOutlined/>,
		children: [
			{
				type: 'group',
				label: 'Item 1',
				children: [
					{
						label: 'Option 1',
						key: 'setting:1',
					},
					{
						label: 'Option 2',
						key: 'setting:2',
					},
				],
			},
			{
				type: 'group',
				label: 'Item 2',
				children: [
					{
						label: 'Option 3',
						key: 'setting:3',
					},
					{
						label: 'Option 4',
						key: 'setting:4',
					},
				],
			},
		],
	},
];

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
	(icon, index) => {
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
	},
);

const BaseLayout = () => {
	const {
		token: {colorBgContainer},
	} = theme.useToken();

	return (
		<Layout style={{
			height: '100%',
		}}>
			<Header items={items}/>
			<Content style={{padding: '0 50px'}}>
				<Outlet/>
			</Content>
			<Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
		</Layout>
	);
};

export default BaseLayout;

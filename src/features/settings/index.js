import React from 'react';
import {Breadcrumb, Input, Layout, List, Menu, theme, Typography} from "antd";
import {
	AuditOutlined,
	ContactsOutlined, DollarOutlined,
	FontColorsOutlined,
	SearchOutlined,
	TeamOutlined,
	UserOutlined
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import {MailList} from "../file-transfer/components";
import {Link} from "react-router-dom";
import SettingList from "./components/SettingList";

export const SettingPage = () => {
	const {
		token: {colorBgContainer},
	} = theme.useToken();

	const data = [
		<Input prefix={<SearchOutlined/>}/>,
		<span><UserOutlined/>  Japanese princess to wed commoner.</span>,
		'Australian walks 100km.',
		'Man charged over missing wedding girl.',
		'Los Angeles battles huge wildfires.',
	];

	const items = [
		{
			label: 'My account',
			icon: <UserOutlined/>,
			path: '/company'
		},
		{
			label: 'Address book',
			icon: <ContactsOutlined />,
			path: '/company'
		},
		{
			label: 'Payment management',
			icon: <DollarOutlined />,
			path: '/company'
		},
		{
			label: 'Company',
			icon: <UserOutlined/>,
			path: '/company'
		},
		{
			label: 'Users',
			icon: <TeamOutlined />,
			path: ''
		},
		{
			label: 'File transfer',
			icon: <UserOutlined/>,
			path: ''
		},

		{
			label: 'Log',
			icon: <AuditOutlined />,
			path: ''
		},
		{
			label: 'Theme',
			icon: <FontColorsOutlined />,
			path: ''
		},
	]

	return (
		<Layout>
			<Sider
				width={300}
				style={{marginTop: 0}}
				breakpoint="lg"
				collapsedWidth="0"
			>
				<SettingList items={items}/>
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

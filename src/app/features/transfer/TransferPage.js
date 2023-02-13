import React from 'react';
import {Breadcrumb, Layout, Menu, theme} from "antd";
import {selectUser} from "../../../features/auth/redux/authSlice";
import {useSelector} from "react-redux";

const {Content, Sider} = Layout;
const TransferPage = ({menuItems}) => {
	const user = useSelector(selectUser)
	const {
		token: {colorBgContainer},
	} = theme.useToken();
	return (
		<>
			<Breadcrumb style={{margin: '16px 0'}}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
				<Breadcrumb.Item>App</Breadcrumb.Item>
			</Breadcrumb>
			<Layout style={{padding: '24px 0', background: colorBgContainer}}>
				<Sider style={{background: colorBgContainer}} width={200}>
					<Menu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{height: '100%'}}
						items={menuItems}
					/>
				</Sider>
				<Content style={{padding: '0 24px', height: '100%'}}>
					{123}
				</Content>
			</Layout>
		</>
	)
}
export default TransferPage;

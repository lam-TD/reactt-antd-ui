import React from 'react';
import {Breadcrumb, Layout, List, Menu, theme, Typography} from "antd";
import {FileTransferRegisterForm} from "../../components/";
import styles from './FileTransferPage.module.css';
import {MailList} from "../../components";

const {Content, Sider} = Layout;
const TransferPage = ({menuItems}) => {
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
			<Layout style={{padding: '0'}}>
				<Sider style={{background: 'transparent'}} width={400}>
					<MailList/>
				</Sider>
				<Content style={{padding: '0 5px', height: '100%'}}>
					<FileTransferRegisterForm/>
				</Content>
			</Layout>
		</>
	)
}
export default TransferPage;

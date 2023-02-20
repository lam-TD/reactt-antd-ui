import React from 'react';
import Sider from "antd/es/layout/Sider";
import SettingList from "../settings/components/SettingList";
import {Breadcrumb, Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import {MailList} from "../file-transfer/components";

import './files.css';
import ComposeBox from "./ComposeBox";

type Props = {

};
export const FilePage = (props: Props) => {
	return (
		<Layout className="content">
			<Sider
				className="content-left"
				width={400}
				breakpoint="lg"
				collapsedWidth="0"
			>
				<MailList/>
			</Sider>
			<Layout className="content-right" style={{padding: '0',}}>
				<Breadcrumb style={{margin: '16px 0',}}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<Content className="wrapper">
					<ComposeBox/>
				</Content>
			</Layout>
		</Layout>
	);
};

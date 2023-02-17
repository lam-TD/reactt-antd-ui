import React from 'react';

import { Layout, theme } from 'antd';
import {Outlet} from "react-router-dom";
import {Header} from "./Header/Header";

export const BaseLayout = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Layout style={{height: '100%'}}>

			<Header/>

			<Outlet/>

		</Layout>
	);
};

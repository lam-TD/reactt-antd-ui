import React from 'react';
import {Layout, Menu} from 'antd';
import {TextLogo} from "../logo";

const {Header: AntHeader} = Layout;
const Header = ({items}) => {
	return <>
		<AntHeader className="header">
			<TextLogo title="Smooth File"/>
			<Menu style={{justifyContent: 'right'}} theme="dark" mode="horizontal" items={items}/>
		</AntHeader>
	</>
}

export default Header;

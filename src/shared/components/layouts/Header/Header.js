import React from 'react';
import {Layout} from 'antd';
import TextLogo from "./TextLogo";
import MenuHeader from "./MenuHeader";
import styles from './Header.module.css';

type Props = {};
export const Header = (props: Props) => {
	return (
		<Layout.Header
			className="header"
			style={{
				border: 0,
				borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
				boxShadow: 'none'
			}}>
			<TextLogo title="Smooth File"/>
			<MenuHeader className={styles.menu} theme="dark" mode="horizontal"/>
		</Layout.Header>
	)
};

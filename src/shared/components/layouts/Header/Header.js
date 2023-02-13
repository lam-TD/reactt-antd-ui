import React from 'react';
import {Layout} from 'antd';
import TextLogo from "./TextLogo";
import MenuHeader from "./MenuHeader";
import styles from './Header.module.css';

type Props = {};
export const Header = (props: Props) => {
	return (
		<Layout.Header className="header">
			<TextLogo title="Smooth File"/>
			<MenuHeader className={styles.menu} theme="dark" mode="horizontal"/>
		</Layout.Header>
	)
};

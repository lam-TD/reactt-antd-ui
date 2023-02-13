import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Modal, message} from 'antd';
import {BellOutlined, LogoutOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoadingLogout, selectLogoutError, selectUser} from "../../../../features/auth/redux/authSlice";
import {logout} from "../../../../features/auth/redux/authActions";


const MenuHeader = (props) => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const user = useSelector(selectUser)
	const logoutError = useSelector(selectLogoutError);
	const [messageApi, contextHolder] = message.useMessage();
	const menuItems = [
		{
			key: 'home',
			label: 'Notification',
			icon: <BellOutlined/>,
			path: '/'
		},
		{
			key: 'setting',
			label: t('setting'),
			icon: <SettingOutlined/>,
			path: '/settings'
		},
		{
			key: 'account',
			label: user?.user_name,
			icon: <UserOutlined/>,
			children: [
				{
					key: 'account_info',
					label: t('account_info'),
					icon: <UserOutlined/>,
				},
				{
					key: 'logout',
					label: t('logout'),
					icon: <LogoutOutlined/>,
					onClick: confirmLogout
				},
			]
		},
	];

	const showErrorMessage = (logoutError) => {
		messageApi.open({
			type: 'error',
			content: logoutError,
		});
	};

	useEffect(() => {
		if (logoutError) {
			showErrorMessage(logoutError);
		}
	}, [logoutError]);


	function confirmLogout({name, id}) {
		Modal.confirm({
			title: 'Confirm',
			content: 'Are you sure you want to logout?',
			okText: 'Logout',
			cancelText: 'Cancel',
			onOk: function () {
				dispatch(logout());
			},
		})
	}


	return (
		<>
			{contextHolder}
			<Menu {...props} theme="light">
				{menuItems.map(item => {
					if (item.children) {
						return <Menu.SubMenu key={item.key} title={item.label} icon={item?.icon}>
							{item.children.map(subItem => (
								<Menu.Item key={subItem.key} icon={subItem?.icon} onClick={subItem?.onClick}>
									{subItem.path ? <Link to={subItem.path}>{subItem.label}</Link> : subItem.label}
								</Menu.Item>
							))}
						</Menu.SubMenu>
					}
					return (
						<Menu.Item key={item.key} icon={item?.icon}>
							{item.path ? <Link to={item.path}>{item.label}</Link> : item.label}
						</Menu.Item>
					)
				})}

			</Menu>
		</>
	);
};

export default MenuHeader;

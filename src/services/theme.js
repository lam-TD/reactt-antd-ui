import SwitchMode from "../antd-ui/components/theme-mode/SwitchMode";
import LanguageSelect from "../antd-ui/components/language/LanguageSelect";
import {BellOutlined, LogoutOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import i18n from "i18next";
import {getI18n} from "react-i18next";
export const menuList = () => {
	const trans = getI18n();

	return [
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
			label: trans.t('setting'),
			key: 'setting',
			icon: <SettingOutlined/>,
		},
		{
			label: 'Administrator',
			key: 'account',
			icon: <UserOutlined/>,
			children: [
				{
					label: trans.t('account_info'),
					icon: <UserOutlined/>,
				},
				{
					label: trans.t('logout'),
					icon: <LogoutOutlined/>,
					onClick: () => {
						console.log('logout')
						// dispatch(showLogoutModal(true))
					}
				},
			],
		},
	];
}


export const trans = () => {
	return
}

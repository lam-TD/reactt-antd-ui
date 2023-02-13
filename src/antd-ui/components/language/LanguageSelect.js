import React from 'react';
import {Select} from "antd";
import {useTranslation} from "react-i18next";

const LanguageSelect = ({onChange, initLanguage = 'en'}) => {
	const {i18n} = useTranslation();
	const handleChange = (value) => {
		i18n.changeLanguage(value)
		if (onChange) {
			onChange(value)
		}
	};
	return <>
		<Select
			defaultValue={initLanguage}
			theme="dark"
			style={{
				width: '100%',
			}}
			onChange={handleChange}
			options={[
				{
					value: 'en',
					label: 'English',
				},
				{
					value: 'vi',
					label: 'Vietnamese',
				},
			]}
		/>
	</>
}

export default LanguageSelect;

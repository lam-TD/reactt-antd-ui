
import React from 'react';
import {Select} from "antd";

const LanguageSelect = ({items}) => {
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};
	return <>
		<Select
			defaultValue="lucy"
			theme="dark"
			style={{
				width: 120,
			}}
			onChange={handleChange}
			options={[
				{
					value: 'en',
					label: 'English',
				},
				{
					value: 'ja',
					label: 'Japanese',
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

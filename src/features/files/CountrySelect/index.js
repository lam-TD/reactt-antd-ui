import React from 'react';
import {Select} from "antd";

export const CountrySelect = ({value, onChange}) => {
	const options = [];
	for (let i = 10; i < 36; i++) {
		options.push({
			value: i.toString(36) + i,
			label: i.toString(36) + i,
		});
	}
	const handleChange = (value) => {
		console.log(`selected ${value}`);
		onChange(value);
	};

	return (
		<Select
			mode="multiple"
			style={{width: '100%',}}
			placeholder="Tags Mode"
			onChange={handleChange}
			options={options}
		/>
	);
};

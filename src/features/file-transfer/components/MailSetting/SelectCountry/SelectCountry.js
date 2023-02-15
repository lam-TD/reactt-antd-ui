import React from 'react';
import {Select} from "antd";

const SelectCountry = () => {
	const options = [];
	for (let i = 10; i < 36; i++) {
		options.push({
			value: i.toString(36) + i,
			label: i.toString(36) + i,
		});
	}
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};

	return (
		<div style={{minWidth: 100}}>
			<Select
				mode="tags"
				style={{width: '100%',}}
				placeholder="Tags Mode"
				onChange={handleChange}
				options={options}
				maxTagCount={3}
			/>
		</div>
	);
};

export default SelectCountry;

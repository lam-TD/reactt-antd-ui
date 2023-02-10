import React from 'react';
import {Switch} from 'antd';

const SwitchMode = () => {
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};
	return <>
		<Switch checkedChildren="Dark" unCheckedChildren="Light" defaultChecked/>
	</>
}

export default SwitchMode;

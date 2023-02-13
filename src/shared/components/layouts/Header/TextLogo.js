import React from 'react';
import {Typography} from 'antd';

const {Text} = Typography;
const TextLogo = ({title}) => {
	return (
		<div
			style={{
				float: 'left',
				width: '120',
				height: '100%',
				color: '#ffffff'
			}}
		>
			<Text style={{fontSize: 20, color: '#ffffff'}}>{title}</Text>
		</div>
	)
}

export default TextLogo;

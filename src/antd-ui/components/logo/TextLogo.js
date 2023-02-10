import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;
const TextLogo = ({title}) => {
	return <div style={{
		float: 'left',
		width: '120',
		height: 31,
	}}>
		<Text style={{fontSize: 20}} type="success">{title}</Text>
	</div>
}

export default TextLogo;

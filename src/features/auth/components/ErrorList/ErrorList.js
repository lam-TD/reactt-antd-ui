import React from 'react';
import {Alert, Space} from "antd";

export const ErrorList = ({errors}) => {
	return (
		<Space direction="vertical" style={{width: '100%', marginBottom: 15}}>
			{
				Array.isArray(errors) ?
					errors.map((error, key) => <Alert key={key} showIcon message={error} type="error"/>)
					: <Alert showIcon message={errors} type="error"/>
			}
		</Space>
	);
};

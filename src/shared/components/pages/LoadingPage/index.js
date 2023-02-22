import React from 'react';
import {Spin} from "antd";

const LoadingPage = () => {
	return (
		<div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<Spin tip="Loading..." size="large" description="Please wait..." />
		</div>
	);
};

export default LoadingPage;

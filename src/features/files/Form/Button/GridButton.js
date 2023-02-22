import React from 'react';
import {Button, Col, Row} from "antd";
import {SendOutlined} from "@ant-design/icons";

type Props = {

};
export const GridButton = ({settingButtonItems}) => {
	return (
		<Row gutter={[8, 8]}>
			<Col xs={24} sm={8} md={8} lg={8} xl={6} xxl={4}>
				<Button
					icon={<SendOutlined/>}
					type="primary"
					htmlType="submit"
					style={{width: '100%'}}
				>
					Send
				</Button>
			</Col>
			{settingButtonItems.map((button, key) => {
				return (
					<Col key={key} xs={24} sm={8} md={8} lg={8} xl={6} xxl={4}>
						<Button
							onClick={button.onClick}
							type={button.type ?? 'default'}
							style={button?.style}
							icon={button?.icon}
						>
							{button.label}
						</Button>
					</Col>
				)
			})}
		</Row>
	);
};

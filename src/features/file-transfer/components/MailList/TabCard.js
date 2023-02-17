import React, {useMemo, useState} from 'react';
import {Button, Card, Checkbox, Tabs, Typography} from "antd";
import styles from "./MailList.module.css";
import {
	DeleteOutlined, EditOutlined,
	UnorderedListOutlined
} from "@ant-design/icons";
import {MailTable} from "./MailTable";

const ToolBar = ({onChange, check}) => {
	const [isChecked, setIsCheck] = useState(false);
	const handleClick = () => {
		setIsCheck(!isChecked)
		onChange(!isChecked)
	}
	return (
		<div style={{paddingLeft: 8, marginRight: 10}}>
			<Checkbox onChange={handleClick} checked={isChecked}/>
		</div>
	)
}

type Props = {};
export const TabCard = (props: Props) => {
	const [isCheckAll, setIsCheckAll] = useState(false);
	const [position, setPosition] = useState(['left', 'right']);

	const items = [
		{
			key: 'list',
			label: <span><UnorderedListOutlined />History</span>,
			children: <MailTable isCheckAll={isCheckAll}/>
		},
		{
			key: 'draft',
			label: <span><EditOutlined />Draft</span>,
			children: `Content of Tab Pane 2`,
		},
		{
			key: 'trash',
			label: <span><DeleteOutlined />Trash box</span>,
			children: `Content of Tab Pane 3`,
		},
	];

	const handleLeftToolbarChange = (e) => {
		setIsCheckAll(e)
	}
	const OperationsSlot = {
		left: <ToolBar onChange={handleLeftToolbarChange} check={isCheckAll}/>,
		// right: <Button>Filter</Button>,
	};

	const slot = useMemo(() => {
		if (position.length === 0) return null;
		return position.reduce(
			(acc, direction) => ({
				...acc,
				[direction]: OperationsSlot[direction],
			}),
			{},
		);
	}, [position]);

	return (
		<Card style={{height: '100%'}} bodyStyle={{padding: 10, height: '100%'}}>
			<Tabs tabBarExtraContent={slot} items={items}/>
		</Card>
	);
};

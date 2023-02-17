import React, {useState} from 'react';
import {Table, Card, Checkbox, Typography, Button} from "antd";
import {
	CloseCircleOutlined,
	DeleteOutlined,
	EditOutlined,
	InfoCircleOutlined,
	UnorderedListOutlined
} from "@ant-design/icons";
import styles from './MailList.module.css';
import {TabCard} from "./TabCard";

type Props = {};
const MailList = (props: Props) => {
	const [activeTabKey2, setActiveTabKey2] = useState('history');
	const [rowSelection, setRowSelection] = useState(false);
	const tabListNoTitle = [
		{
			key: 'history',
			tab: <><UnorderedListOutlined/>History</>,
		},
		{
			key: 'draft',
			tab: <><EditOutlined/>Draft</>,
		},
		{
			key: 'trash',
			tab: <><InfoCircleOutlined/>Trash</>,
		},
	];
	const dataSource = [
		{
			key: '1',
			name: 'Mike',
			age: 32,
			address: '10 Downing Street',
			subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
			sent_at: '09/03/2023',
		},
		{
			key: '2',
			name: 'John',
			subject: 42,
			address: '10 Downing Street',
			sent_at: '09/03/2023',
		},
		{
			key: '3',
			name: 'John',
			subject: 42,
			address: '10 Downing Street',
			sent_at: '09/03/2023',
		},
		{
			key: '4',
			name: 'John',
			subject: 'The consectetur adipiscing elit',
			address: '10 Downing Street',
			sent_at: '09/03/2023',
		},
	];
	const [rows, setRows] = useState(1);
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (_, record) => (
				<div className={styles.mailItem}>
					<div className={styles.mailItemContent}>
						<div className="">{record.name}</div>
						<Typography.Text style={{width: 280,}} ellipsis={{tooltip: record.subject,}} className="">{record.subject}</Typography.Text>
						<Typography.Text style={{width: 280,}} className="">{record.sent_at}</Typography.Text>
					</div>
					<div className={styles.mailItemToolBar}>
						<div className=""> <Button type="text" danger icon={<DeleteOutlined />} /></div>
					</div>
				</div>
			),

		},
	];

	const onTab2Change = (key: string) => {
		setActiveTabKey2(key);
	};

	const contentListNoTitle = {
		history: <Table rowSelection={rowSelection} showHeader={false} dataSource={dataSource} columns={columns}/>,
		draft: <p>app content</p>,
		trash: <p>project content</p>,
	};

	const handleCheckboxChange = (e) => {
		setRowSelection(e.target.checked);
	}

	const ToolBar = () => {
		return (
			<>
				<Checkbox checked={!!rowSelection} onChange={handleCheckboxChange}></Checkbox>
			</>
		)
	}


	return (
		<TabCard />
	);
};

export default MailList;

import React, {useEffect, useState} from 'react';
import styles from "./MailList.module.css";
import {Button, Checkbox, Table, Typography} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import './MailTable.css';

export const MailTable = ({isCheckAll = false}) => {
	const [rowSelection, setRowSelection] = useState(false);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [dataSource, setDataSource] = useState([]);
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (_, record) => (
				<div className={styles.mailItem}>
					<div className={styles.mailItemContent}>
						<div className="">{record.name}</div>
						<Typography.Text style={{width: 280,}} ellipsis={{tooltip: record.subject,}}
														 className="">{record.subject}</Typography.Text>
						<Typography.Text style={{width: 280,}} className="">{record.sent_at}</Typography.Text>
					</div>
					<div className={styles.mailItemToolBar}>
						<div className=""><Button type="text" danger icon={<DeleteOutlined/>}/></div>
					</div>
				</div>
			),

		},
	];

	const makeData = new Promise(resolve => {
		const data = [];
		for (let i = 1; i < 100; i++) {
			data.push({
				key: i,
				name: 'Mike-' + i,
				age: 32,
				address: '10 Downing Street',
				subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
				sent_at: '09/03/2023',
			});
		}

		setTimeout(() => {
			resolve(data);

		}, 500);

	})

	useEffect(() => {
		makeData.then(data => setDataSource(data));
	}, [])


	const handleCheckAll = (isCheckAll) => {
		if (isCheckAll) {
			setSelectedRowKeys(dataSource.map(item => item.key))
		} else {
			setSelectedRowKeys([])
		}
	}
	useEffect(() => {
		handleCheckAll(isCheckAll)
	}, [isCheckAll])

	const onSelectChange = (newSelectedRowKeys) => {
		console.log('selectedRowKeys changed: ', newSelectedRowKeys);
		setSelectedRowKeys(newSelectedRowKeys);
	};

	return (
		<div>
			<Table
				className="table-custom"
				size={'small'}
				pagination={false}
				scroll={{
					y: 500,
				}}
				rowSelection={{
					getCheckboxProps: (record) => {
						let checkboxProps = {};
						checkboxProps.checked = true;
						return checkboxProps;
					},
					selectedRowKeys,
					onChange: onSelectChange,
				}}
				showHeader={false}
				dataSource={dataSource}
				columns={columns}
			/>
		</div>
	);
};

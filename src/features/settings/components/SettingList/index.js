import React from 'react';
import {List} from "antd";
import {Link} from "react-router-dom";

import styles from './index.module.css';

const SettingList = ({items}) => {
	const SettingItem = ({item}) => {
		return <List.Item>
			{item?.path
				? (
					<Link to={item.path} className={styles.settingItem}>
						{item?.icon && <span className={styles.settingIcon}>{item.icon}</span>} {item.label}
					</Link>
				) :
				<div className={styles.settingItem}>
					{item?.icon && <span className={styles.settingIcon}>{item.icon}</span>}
					<span className={styles.settingLabel}>{item.label}</span>
				</div>
			}
		</List.Item>
	}
	return (
		<List
			dataSource={items}
			renderItem={(item) => <SettingItem item={item}/>}
		/>
	);
};

export default SettingList;

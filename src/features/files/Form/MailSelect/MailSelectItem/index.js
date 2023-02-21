import React from 'react';
import {Avatar} from "antd";

import styles from './MailSelectItem.module.css';

const MailSelectItem = ({option, ...restProps}) => {
	const getFirstCharacter = (string) => string.charAt(0);
	function randomColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	return (
		<div className={styles.emailItem} {...restProps}>
			<div className={styles.emailItemIcon}>
				<Avatar className="" children={getFirstCharacter(option.label)} style={{ backgroundColor: randomColor() }}/>
			</div>
			<div className={styles.emailItemText}>
				<span className={styles.emailItemTextTitle}>{option.label}</span>
				<small className={styles.emailItemTextSub}>{option.value}</small>
			</div>
		</div>
	);
};

export default MailSelectItem;

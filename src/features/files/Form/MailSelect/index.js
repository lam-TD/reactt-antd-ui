import React, {useState} from 'react';
import {message, Select} from "antd";

import './MailSelect.css'
import {FileOutlined} from "@ant-design/icons";
import MailSelectItem from "./MailSelectItem";

export const MailSelect = ({value, onChange, ...restProps}) => {
	const [selectedItems, setSelectedItems] = useState([]);
	const [options, setOptions] = useState([]);
	const handleChange = (value, option) => {
		// if (value.length > maxItems) {
		// 	message.error('Khong cho chon nua')
		// 	return false;
		// }

		setSelectedItems(value)
		console.log(value);
		if (onChange) {
			onChange(value);
		}
	};

	return (
		<Select
			mode={'tags'}
			optionLabelProp="label"
			bordered={false}
			onChange={handleChange}
			defaultValue={value ?? []}
			{...restProps}
		>
			{options ? (
				options.map(item => (
					item?.options ?
						(
							<Select.OptGroup key={item.value} label={item.label}>
								{item.options.map(option => (
									<Select.Option key={option.value} value={option.value} label={option.label}>
										<MailSelectItem option={option}/>
									</Select.Option>
								))}
							</Select.OptGroup>
						) :
						(
							<Select.Option key={item.value} value={item.value} label={item.label}>
								<MailSelectItem option={item}/>
							</Select.Option>
						)
				))
			) : null}
		</Select>
	);
};

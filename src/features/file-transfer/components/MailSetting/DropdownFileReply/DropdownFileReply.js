import React, {useEffect, useState} from 'react';
import {Button, Dropdown, Menu} from "antd";
import {CaretDownOutlined} from "@ant-design/icons";

export const DropdownFileReply = ({items, label, defaultSelectedKeys = undefined, icon = undefined, ...props}) => {
	const [itemSelected, setItemSelected] = useState();
	const [options, setOptions] = useState([]);

	const handleChangeCountry = (item) => {
		setItemSelected(item);
		if (props.onChange) {
			props.onChange(item)
		}
	}

	const DropdownItem = ({item}) => {
		return <div onClick={() => handleChangeCountry(item)}>{item.label}</div>
	}

	useEffect(() => {
		const a = items.map(item => {
			return {
				key: item.key,
				label: <DropdownItem item={item}/>
			}
		})
		setOptions(a)
	}, [items])


	return (
		<Dropdown
			menu={{
				items: options,
				selectable: true,
				defaultSelectedKeys: defaultSelectedKeys
			}}
			placement="bottomLeft"
			arrow
			trigger={['click']}
		>
			<Button icon={icon}>
				{label}{itemSelected && ':'} <b> {itemSelected?.label}</b>
			</Button>
		</Dropdown>
	);
};

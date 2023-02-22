import React, {useEffect, useRef, useState} from 'react';
import {Avatar, Input, Form, List, Button} from "antd";
import Icon, {CloudUploadOutlined, DeleteOutlined, FileOutlined} from "@ant-design/icons";

import './MailBody.css';
import {humanFileSize} from "../../../../shared/HumanReable";

const {Item} = Form;
const MailBody = ({value, onChange, ...props}) => {
	const [isDrag, setIsDrag] = useState(false);
	const [text, setText] = useState(value.text);
	const [files, setFiles] = useState(value.files);
	const inputRef = useRef();

	const isError = props?.['aria-invalid'];

	useEffect(() => {
		setFiles(props.attachments)
	},[props.attachments])

	const divDrop = () => {
		const div = inputRef.current;
		const divDrop = div.querySelector('.drop');
		return divDrop;
	}

	const triggerChange = (changedValue) => {
		onChange?.({
			text,
			files,
			...value,
			...changedValue
		});
	};

	function handleDrop(e) {
		e.preventDefault();
		setIsDrag(false);

		divDrop().classList.remove('drop-able');
		const fileList = e.dataTransfer.files;
		const updatedFiles = [...files, ...fileList];
		console.log(updatedFiles);
		setFiles(updatedFiles);
		triggerChange({
			files: updatedFiles
		})
	}

	function handleOnDragOver(e) {
		e.preventDefault();
		divDrop().classList.add('drop-able')
		setIsDrag(true);
	}

	function handleOnDragLeave(e) {
		setIsDrag(false);
		divDrop().classList.remove('drop-able')
	}

	function handleOnDragEnd() {
		setIsDrag(false)
	}

	const handleInputChange = (value) => {
		const valueChange = value.target.value
		setText(valueChange);
		triggerChange({
			text: valueChange
		})
	}

	const handleDeleteFile = (file) => {
		const updatedItems = files.filter((item) => file.name !== item.name);
		setFiles(updatedItems);
		triggerChange({
			files: updatedItems
		})
	}

	return (
		<>
			{(files.length > 0) ? (
				<>
					<Item noStyle>
						<div className="compose-item ps-10 pe-10 mail-body">
							<List
								itemLayout="horizontal"
								style={{paddingTop: 5, width: '100%'}}
								grid={{gutter: [8, 8], xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 6}}
								dataSource={files}
								renderItem={(item) => (
									<List.Item
										key={item.name}
										className="file-attachment-list-item file-item"
										title={item.name}
										actions={[
											<Button onClick={() => handleDeleteFile(item)} type="text" danger icon={<DeleteOutlined/>}/>
										]}
									>
										<List.Item.Meta
											avatar={
												<Avatar
													className="file-attachment-list-item--meta-avatar"
													icon={<FileOutlined/>}
													// style={{height: '100%'}}
												/>
											}
											title={item.name}
											description={<small>{humanFileSize(item.size)}</small>}
											className="file-attachment-list-item--meta"
										/>
									</List.Item>
								)}
							/>
						</div>
					</Item>
					<Item noStyle>
						<div className="compose-item">
							<div className="hr"></div>
						</div>
					</Item>
				</>
			) : null}
			<div
				ref={inputRef}
				className="compose-item flex-grow-1" style={{flexDirection: 'column'}}
				onDrop={handleDrop}
				onDragOver={handleOnDragOver}
				onDragLeave={handleOnDragLeave}
				onDragEnd={handleOnDragEnd}
			>
				<div className={'hr drop' + (isError ? ' error' : '')}>
					{isDrag ? (
						<div>
							<span>Drop files here</span>
							<span className="drop-icon">
								<Icon component={CloudUploadOutlined} size="large" style={{fontSize: '3em'}}/>
							</span>
						</div>
					) : (
						<Input.TextArea
							bordered={false}
							maxLength={520}
							showCount
							placeholder="Enter body"
							style={{width: '100%', padding: '0 0 0 0'}}
							value={text}
							onChange={handleInputChange}
						/>
					)}
				</div>
				{isError && <div className="error-message ps-10">{props?.error()[0]}</div>}
			</div>
		</>
	);
};

export default MailBody;

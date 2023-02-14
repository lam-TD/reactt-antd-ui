import React, {useRef, useState} from 'react';
import {Input} from "antd";
import {message, Upload} from 'antd';
import {InboxOutlined} from "@ant-design/icons";
import './DrapDrop.css';
const {Dragger} = Upload;

const DragDropAble = () => {
	const [isDrag, setIsDrag] = useState(false);
	const inputRef = useRef();
	const [fileList, setFileList] = useState([
		{
			uid: '-1',
			name: 'image.png',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		},
	]);
	const props = {
		name: 'file',
		multiple: true,
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		onChange(info) {
			const {status} = info.file;
			if (status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if (status === 'done') {
				message.success(`${info.file.name} file uploaded successfully.`);
			} else if (status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		onDrop(e) {
			console.log('Dropped files', e.dataTransfer.files);
		},
	};

	function handleDrop(e) {
		e.preventDefault();
		console.log(e.dataTransfer.files);
		const files = e.dataTransfer.files;
		const a = [];
		for (const file of files) {
			console.log(file.path)
			// a.push() += `\n${file.name}`;
		}
	}

	function handleOnDragOver(e) {
		e.preventDefault();
		console.log('handleOnDragOver', inputRef.current);
		inputRef.current.classList.add('myDrop')
		setIsDrag(true);

	}

	function handleOnDragLeave(e) {
		console.log('handleOnDragLeave')
		setIsDrag(false);
		inputRef.current.classList.remove('myDrop')
	}	function handleOnDragEnd(e) {
		console.log('handleOnDragEnd')
		// setIsDrop(false)
	}

	return (
		<div
			ref={inputRef}
			className="dragContent"
			onDrop={handleDrop}
			onDragOver={handleOnDragOver}
			onDragLeave={handleOnDragLeave}
			onDragEnd={handleOnDragEnd}
		>
			{!isDrag ? (
				<textarea
					draggable
					name="body"
					className=""
				/>
			) : (
				<div className="dragSekeleton">
					<div style={{width: '100%'}}><InboxOutlined size="large"/></div>
					<div style={{width: '100%'}}>Drop files here</div>
				</div>
			)}

			<Upload {...props} fileList={fileList}>
				{/*<Button icon={<UploadOutlined />}>Upload</Button>*/}
			</Upload>

		</div>
	)
};
export default DragDropAble;

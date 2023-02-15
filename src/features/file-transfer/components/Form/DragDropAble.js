import React, {useRef, useState} from 'react';
import {Input, message, Upload} from 'antd';
import {InboxOutlined} from "@ant-design/icons";
import './DrapDrop.css';

const DragDropAble = ({onChange}) => {
	const [isDrag, setIsDrag] = useState(false);
	const inputRef = useRef();

	function handleDrop(e) {
		e.preventDefault();
		setIsDrag(false);
		inputRef.current.classList.remove('myDrop')
		const files = e.dataTransfer.files;
		if (onChange) {
			onChange(files);
		}
	}

	function handleOnDragOver(e) {
		e.preventDefault();
		inputRef.current.classList.add('myDrop')
		setIsDrag(true);

	}

	function handleOnDragLeave(e) {
		setIsDrag(false);
		inputRef.current.classList.remove('myDrop')
	}

	function handleOnDragEnd() {
		setIsDrag(false)
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
				<Input.TextArea
					bordered={false}
					draggable
					name="body"
					className="drag"
					maxLength={100}
					showCount
					placeholder="Mail body"
					defaultValue={123123123123}
				/>
			) : (
				<div className="dragSkeleton">
					<div style={{width: '100%'}}><InboxOutlined size="large"/></div>
					<div style={{width: '100%'}}>Drop files here</div>
				</div>
			)}

		</div>
	)
};
export default DragDropAble;

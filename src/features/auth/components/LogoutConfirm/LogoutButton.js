import React, {useState} from 'react';
import {Modal, Button} from 'antd';

const LogoutButton = () => {
	const [open, setOpen] = useState(false);

	const showModal = () => {
		setOpen(true);
	};

	const handleOk = () => {
		setOpen(false);
		// Perform logout action here
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<>
			<Button type="text" onClick={showModal} block={true}>
				Logout
			</Button>
			<Modal
				title="Confirm Logout"
				open={open}
				onOk={handleOk}
				onCancel={handleCancel}
				okText="Yes"
				cancelText="No"
			>
				<p>Are you sure you want to logout?</p>
			</Modal>
		</>
	);
};

export default LogoutButton;

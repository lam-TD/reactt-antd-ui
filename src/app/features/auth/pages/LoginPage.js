import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login, selectIsLoggingIn } from './authSlice';
import { useInjectSaga } from '../../store/injectSaga';
import loginSaga from './saga';

export function LoginPage() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
	const isLoggingIn = useSelector(selectIsLoggingIn);

	useInjectSaga({ key: 'auth', saga: loginSaga });

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(login(formData)).then(() => {
			history.push('/');
		});
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						name="username"
						value={formData.username}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
					/>
				</div>
				<button type="submit" disabled={isLoggingIn}>
					{isLoggingIn ? 'Logging in...' : 'Log in'}
				</button>
			</form>
		</div>
	);
}

/**
 * Trong ví dụ này, LoginPage lấy trạng thái isLoggingIn từ store bằng cách sử dụng hàm useSelector. Nó cũng sử dụng useDispatch để gửi một action đăng nhập mới đến store. handleSubmit được gọi khi người dùng ấn vào nút "Log in" và nó gửi một action đến store thông qua hàm dispatch.
 *
 * Để quản lý tác vụ đăng nhập bất đồng bộ, chúng ta sử dụng useInjectSaga để inject loginSaga vào store. loginSaga sử dụng takeLatest để đảm bảo rằng chỉ có một tác vụ đăng nhập được chạy tại một thời điểm. Nếu người dùng thực hiện nhiều yêu cầu đăng nhập, tác vụ mới sẽ ghi đè lên tác vụ trước đó và chỉ chạy tác vụ mới nhất.
 *
 * Ví dụ này giúp bạn có một cái nhìn tổng quan về cách triển khai tính năng đăng nhập sử dụng Redux Toolkit và Redux Saga. Tuy nhiên, nó chỉ là một ví dụ đơn giản và thực tế có thể phức tạp hơn nhi
 *
 *
 *
 *
 * */

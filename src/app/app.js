import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import enUS from 'antd/locale/en_US';
import BaseRoutes from './routes';
import 'antd/dist/reset.css';
import './i18next';

import { createServer } from "miragejs"

// let server = createServer()
// server.get("/api/users", { users: [{ id: 1, name: "Bob" }] })

function App() {
	let [users, setUsers] = useState([])
	useEffect(() => {
		fetch("/api/users")
			.then((res) => res.json())
			.then((json) => {
				console.log(json.users);
				setUsers(json.users)
			})
	}, [])
	return (
		<div className="App">
			<BrowserRouter>
				<ConfigProvider locale={enUS} theme="light">
					<BaseRoutes/>
				</ConfigProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;

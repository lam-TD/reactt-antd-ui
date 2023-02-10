import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import enUS from 'antd/locale/en_US';
import BaseRoutes from './routes';
import 'antd/dist/reset.css';
import './i18next';

function App() {
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

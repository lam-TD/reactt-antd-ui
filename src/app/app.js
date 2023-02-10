import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import enUS from 'antd/locale/en_US';

import BaseRoutes from './routes';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ConfigProvider locale={enUS}>
					<BaseRoutes/>
				</ConfigProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;

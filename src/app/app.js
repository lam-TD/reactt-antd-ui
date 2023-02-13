import React, {useEffect, useState} from 'react';
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
				<ConfigProvider locale={enUS} theme={{
					token: {
						// colorBgBase: '#1c2935'
					},
					components: {
						Layout: {
							colorBgHeader: '#7dc95e'
						},
						Menu: {
							colorItemBg: '#7dc95e', // colorBgBase -3% lightness
							colorSubItemBg: '#7dc95e' // colorBgBase -6% lightness
						}
					}
				}}>
					<BaseRoutes/>
				</ConfigProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;

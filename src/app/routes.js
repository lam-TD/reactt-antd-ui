import {Route, Routes} from "react-router-dom";
import {HomePage, LoginPage, TransferPage} from "./features";
import {AntLayout, NotFoundPage} from "../antd-ui";

const BaseRoutes = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<HomePage/>}/>
				<Route path="login" element={<LoginPage/>}/>
				<Route path="logout" element={<LoginPage/>}/>
				<Route element={<AntLayout/>}>
					<Route path="dashboard" element={<div>Dashboard Page</div>}/>
					<Route path="transfer" element={<TransferPage/>}/>
					<Route path="companies" element={<TransferPage/>}/>
					<Route path="settings" element={<TransferPage/>}/>
				</Route>
				<Route path="*" element={<NotFoundPage/>}></Route>
			</Route>
		</Routes>
	);
};

export default BaseRoutes;

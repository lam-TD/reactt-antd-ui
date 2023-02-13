import {Route, Routes} from "react-router-dom";
import {HomePage, TransferPage} from "./features";
import {AntLayout, NotFoundPage} from "../antd-ui";
import {AuthLayout} from "../shared/components";
import {LoginPage} from "../features/auth/pages";

const BaseRoutes = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<HomePage/>}/>
				<Route path="login" element={<LoginPage/>}/>
				<Route path="logout" element={<LoginPage/>}/>
				<Route element={<AuthLayout/>}>
					<Route path="dashboard" element={<div>Dashboard Page</div>}/>
					<Route path="settings" element={<TransferPage/>}/>
				</Route>

				<Route element={<AntLayout/>}>

					<Route path="transfer" element={<TransferPage/>}/>
					<Route path="companies" element={<TransferPage/>}/>
				</Route>
				<Route path="*" element={<NotFoundPage/>}></Route>
			</Route>
		</Routes>
	);
};

export default BaseRoutes;

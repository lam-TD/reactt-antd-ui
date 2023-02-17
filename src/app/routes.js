import {Route, Routes} from "react-router-dom";
import {HomePage} from "./features";
import {AntLayout, NotFoundPage} from "../antd-ui";
import {AuthLayout} from "../shared/components";
import {LoginPage} from "../features/auth/pages";
import {TransferPage} from "../features/file-transfer/pages";
import {SettingPage} from "../features/settings";
import {BaseLayout} from "../shared/components/layouts/BaseLayout";

const BaseRoutes = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<HomePage/>}/>
				<Route path="login" element={<LoginPage/>}/>
				<Route path="logout" element={<LoginPage/>}/>
				<Route element={<AuthLayout/>}>
					<Route path="dashboard" element={<div>Dashboard Page</div>}/>
					<Route path="transfer" element={<TransferPage/>}/>
				</Route>

				<Route path="settings" element={<BaseLayout/>}>
					<Route index element={<SettingPage/>}/>
				</Route>

				<Route path="*" element={<NotFoundPage/>}></Route>
			</Route>
		</Routes>
	);
};

export default BaseRoutes;

import {Route, Routes} from "react-router-dom";
import {HomePage} from "./features";
import {AntLayout, NotFoundPage} from "../antd-ui";
import {AuthLayout} from "../shared/components";
import {LoginPage} from "../features/auth/pages";
import {TransferPage} from "../features/file-transfer/pages";
import {SettingPage} from "../features/settings";
import {BaseLayout} from "../shared/components/layouts/BaseLayout";
// import {FilePage} from "../features/files";
import {lazy, Suspense} from "react";
import LoadingPage from "../shared/components/pages/LoadingPage";

const FilePage = lazy(() => import("../features/files"))

const BaseRoutes = () => {
	return (
		<Suspense fallback={<LoadingPage></LoadingPage>}>
			<Routes>
				<Route path="/">
					<Route index element={<HomePage/>}/>
					<Route path="login" element={<LoginPage/>}/>
					<Route path="logout" element={<LoginPage/>}/>
					<Route element={<AuthLayout/>}>
						<Route path="dashboard" element={<div>Dashboard Page</div>}/>
					</Route>

					<Route path="transfer" element={<BaseLayout/>}>
						<Route index element={<FilePage/>}/>
					</Route>

					<Route path="settings" element={<BaseLayout/>}>
						<Route index element={<SettingPage/>}/>
					</Route>

					<Route path="*" element={<NotFoundPage/>}></Route>
				</Route>
			</Routes>
		</Suspense>
	);
};

export default BaseRoutes;

import { Route, Routes } from "react-router-dom";

const BaseRoutes = () => {
	return (
		<Routes>
			<Route path="/hehe">
				<Route index element={<div>ddd</div>} />
			</Route>
		</Routes>
	);
};

export default BaseRoutes;

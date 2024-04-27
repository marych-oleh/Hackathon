import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Context } from '../index';
import { HOME_ROUTE } from '../utils/paths';
import { authRoutes, publicRoutes } from '../utils/routes';

const AppRouter = observer(() => {
	const { userStore } = useContext(Context);

	return (
		<Routes>
			{userStore.isAuth &&
				userStore.userData.role === 'civil' &&
				authRoutes.civilRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			{userStore.isAuth &&
				userStore.userData.role === 'volunteer' &&
				authRoutes.volunteerRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
				
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
			<Route path="*" element={<Navigate to={HOME_ROUTE} />} />
		</Routes>
	);
});

export default AppRouter;

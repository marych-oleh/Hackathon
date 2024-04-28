import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Context } from '../index';
import { CIVIL, VOLUNTEER } from '../types';
import {
	ACCOUNT_ROUTE,
	CIVIL_ACCOUNT_ROUTE,
	HOME_ROUTE,
	VOLUNTEER_ACCOUNT_ROUTE,
} from '../utils/paths';
import { authRoutes, publicRoutes } from '../utils/routes';

const AppRouter = observer(() => {
	const { userStore } = useContext(Context);

	return (
		<Routes>
			{userStore.isAuth && (
				<Route
					path={ACCOUNT_ROUTE}
					element={
						<Navigate
							to={
								userStore.userData.role === CIVIL ?
									CIVIL_ACCOUNT_ROUTE
								:	VOLUNTEER_ACCOUNT_ROUTE
							}
						/>
					}
				/>
			)}
			{userStore.isAuth &&
				userStore.userData.role === CIVIL &&
				authRoutes.civilRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			{userStore.isAuth &&
				userStore.userData.role === VOLUNTEER &&
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

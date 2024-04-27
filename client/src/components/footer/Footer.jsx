import React, {useMemo, useContext } from 'react';
import Container from '../container/Container.jsx';
import './Footer.scss';
import { Context } from '../../index.js';
import {
	HOME_ROUTE,
	CIVIL_ACCOUNT_ROUTE,
	VOLUNTEER_ACCOUNT_ROUTE,
} from '../../utils/paths.js';
import { Link } from 'react-router-dom';
import Logo from '../UI/logo/Logo.jsx';

const Footer = () => {
	const { userStore } = useContext(Context);

	const userAccount = useMemo(() => {
		switch (userStore.userData.role) {
			case 'civil':
				return CIVIL_ACCOUNT_ROUTE;
			case 'volunteer':
				return VOLUNTEER_ACCOUNT_ROUTE;
		}
	}, [userStore.userData.role]);
	return (
		<footer className="footer">
			<Container className="footer__container">
				<div className="footer__container">
					<Link to={HOME_ROUTE} className="footer__logo">
						<Logo />
					</Link>
					{userStore.isAuth && (
						<Link to={userAccount} className="footer__link">
							Account
						</Link>
					)}
					<a className="footer__link" href="#">
						Contact
					</a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;

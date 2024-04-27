import React, { useContext } from 'react';
import Container from '../container/Container.jsx';
import './Footer.scss';
import {
	HOME_ROUTE,
	CIVIL_ACCOUNT_ROUTE,
	VOLUNTEER_ACCOUNT_ROUTE,
} from '../../utils/paths.js';
import { Link } from 'react-router-dom';
import Logo from '../UI/logo/Logo.jsx';

const Footer = () => {
	const { userStore } = useContext(Context);
	return (
		<footer className="footer">
			<Container className="footer__container">
				<div className="footer__container">
					<Link to={HOME_ROUTE} className="footer__logo">
						<Logo />
					</Link>

					{userStore.isAuth && userStore.userData.role === 'civil' && (
						<Link to={CIVIL_ACCOUNT_ROUTE} className="footer__link">
							Account
						</Link>
					)}
					{userStore.isAuth && userStore.userData.role === 'volunteer' && (
						<Link to={VOLUNTEER_ACCOUNT_ROUTE} className="footer__link">
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

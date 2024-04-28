import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../index.js';
import { ACCOUNT_ROUTE, HOME_ROUTE, MAP_ROUTE } from '../../utils/paths.js';
import Logo from '../UI/logo/Logo.jsx';
import Container from '../container/Container.jsx';
import './Footer.scss';

const Footer = observer(() => {
	const { userStore } = useContext(Context);
	const location = useLocation();

	const isMapPage = location.pathname === MAP_ROUTE;

	if (isMapPage) {
		return null;
	}

	return (
		<footer className="footer">
			<Container className="footer__container">
				<div className="footer__container">
					<Link to={HOME_ROUTE} className="footer__logo">
						<Logo />
					</Link>
					{userStore.isAuth && (
						<Link to={ACCOUNT_ROUTE} className="footer__link">
							Акаунт
						</Link>
					)}
					<a className="footer__link" href="#">
						Про нас
					</a>
				</div>
			</Container>
		</footer>
	);
});

export default Footer;

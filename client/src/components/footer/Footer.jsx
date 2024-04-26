import React from 'react';
import Container from '../container/Container.jsx';
import './Footer.scss';
import { HOME_ROUTE, ACCOUNT_ROUTE } from '../../utils/paths.js';
import { Link } from 'react-router-dom';
import Logo from '../UI/logo/Logo.jsx';

const Footer = () => {
	return (
		<footer className="footer">
			<Container className="footer__container">
				<div className="footer__container">
					<Link to={HOME_ROUTE} className="footer__logo">
						<Logo />
					</Link>

					<Link to={ACCOUNT_ROUTE} className="footer__link">
						Account
					</Link>
					<a className='footer__link' href="#">Contact</a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;

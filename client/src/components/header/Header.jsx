import { observer } from 'mobx-react';
import React, { useMemo, useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Context } from '../../index.js';
import { bodyLockToggle, bodyUnlock } from '../../utils/functions.js';
import {
	CIVIL_ACCOUNT_ROUTE,
	VOLUNTEER_ACCOUNT_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
	MAP_ROUTE,
	ACCOUNT_ROUTE,
} from '../../utils/paths.js';
import Container from '../container/Container.jsx';
import './Header.scss';
import Logo from '../UI/logo/Logo.jsx';

const Header = observer(() => {
	const [isMenuActive, setIsMenuActive] = useState(false);
	const location = useLocation();
	const { userStore } = useContext(Context);

	// close menu on location change
	useEffect(() => {
		menuClose();
	}, [location]);

	const isMapPage = location.pathname === MAP_ROUTE;

	function toggleMenu() {
		setIsMenuActive(!isMenuActive);
		bodyLockToggle(0);
		document.documentElement.classList.toggle('menu-open');
	}
	function menuClose() {
		if (!isMenuActive) return;
		bodyUnlock(0);
		setIsMenuActive(false);
		document.documentElement.classList.remove('menu-open');
	}

	let accountButton;
	if (userStore.isAuth) {
		accountButton = (
			<NavLink
				to={ACCOUNT_ROUTE}
				className="actions-header__icon _icon-account"
			></NavLink>
		);
	} else if (location.pathname === LOGIN_ROUTE) {
		accountButton = (
			<Link
				to={REGISTRATION_ROUTE}
				className="actions-header__icon _icon-account-create"
			></Link>
		);
	} else {
		accountButton = (
			<Link
				to={LOGIN_ROUTE}
				className="actions-header__icon _icon-enter"
			></Link>
		);
	}

	return (
		<header
			data-lp // to correct right padding on body lock by bodyUnlock and bodyLock functions
			className={'header' + (isMapPage ? ' map-page' : '')}
		>
			<Container className="header__container">
				<div className="header__menu menu">
					<NavLink to={HOME_ROUTE} className="header__logo">
						<Logo />
					</NavLink>
					<nav className="menu__body">
						<ul className="menu__list">
							<li className="menu__item">
								<NavLink to={HOME_ROUTE} className="menu__link">
									Головна
								</NavLink>
							</li>
							<li className="menu__item">
								<NavLink to={'/about'} className="menu__link">
									Про нас
								</NavLink>
							</li>
							<li className="menu__item">
								<NavLink to={'/contact'} className="menu__link">
									Контакти
								</NavLink>
							</li>
						</ul>
					</nav>
					<ul className="header__actions actions-header">
						<li className="actions-header__item account-btn">
							{accountButton}
						</li>
						<li className="actions-header__item">
							<Link
								to={MAP_ROUTE}
								className="actions-header__icon map-btn"
							>
								<span>Карта</span>
							</Link>
						</li>
						<button
							type="button"
							className="actions-header__icon icon-menu"
							onClick={toggleMenu}
						>
							<span></span>
						</button>
					</ul>
				</div>
			</Container>
		</header>
	);
});

export default Header;

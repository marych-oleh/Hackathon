import { observer } from 'mobx-react';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../components/container/Container';
import { UserAPI } from '../../http/userAPI';
import { Context } from '../../index';
import {
	CIVIL_ACCOUNT_ROUTE,
	VOLUNTEER_ACCOUNT_ROUTE,
	LOGIN_ROUTE,
	ACCOUNT_ROUTE,
	REGISTRATION_VOLUNTEER_ROUTE,
	REGISTRATION_CIVIL_ROUTE,
} from '../../utils/paths';
import Button from '../../components/UI/button/Button';
import Input from '../../components/UI/input/Input';
import './RegistrationChoise.scss';
import PasswordInput from '../../components/UI/passwordInput/PasswordInput';
import Checkbox from '../../components/UI/checkbox/Checkbox';
import { CIVIL, VOLUNTEER } from '../../types';

const Registration = observer(() => {
	const { userStore } = useContext(Context);
	const navigation = useNavigate();

	return (
		<main>
			<Container className="registration-choise">
				<section className="registration-choise__section">
					<Link className="registration-choise__choise volunteer" to={REGISTRATION_VOLUNTEER_ROUTE}>
						<h3 className="registration-choise__title">
							Хочу допомагати
						</h3>
						<div className="registration-choise__description">
							Ви станете волонтером
						</div>
					</Link>
				</section>
				<section className="registration-choise__section">
					<Link className="registration-choise__choise civil" to={REGISTRATION_CIVIL_ROUTE}>
						<h3 className="registration-choise__title">
							Мені потрібна допомога
						</h3>
						<div className="registration-choise__description">
							Волонтери будуть Вам допомагати
						</div>
					</Link>
				</section>
			</Container>
		</main>
	);
});

export default Registration;

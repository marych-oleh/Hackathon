import { observer } from 'mobx-react';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/UI/button/Button';
import Input from '../../components/UI/input/Input';
import PasswordInput from '../../components/UI/passwordInput/PasswordInput';
import Container from '../../components/container/Container';
import { UserAPI } from '../../http/userAPI';
import { Context } from '../../index';
import { VOLUNTEER } from '../../types';
import { ACCOUNT_ROUTE, LOGIN_ROUTE } from '../../utils/paths';
import './Registration.scss';

const RegistrationVolunteer = observer(() => {
	const { userStore } = useContext(Context);
	const navigation = useNavigate();

	const [registrationForm, setRegistrationForm] = useState({
		userName: '',
		email: '',
		password: '',
		phoneNumber: '',
		userRole: VOLUNTEER,
		passport: '',
	});

	async function signUp(e) {
		e.preventDefault();

		try {
			e.preventDefault();
			const data = await UserAPI.registration(registrationForm);
			userStore.setIsAuth(true);
			console.log(data);
			userStore.setUserData(data);
			userStore.setUserId(data.sub);
			userStore.setRole(data.role);
			navigation(ACCOUNT_ROUTE);
		} catch (error) {
			console.log(error);
		}
	}

	const onChangeInput = (e) => {
		const field = e.target.name;
		setRegistrationForm({ ...registrationForm, [field]: e.target.value });
	};

	return (
		<main>
			<Container className="registration">
				<form method="POST" onSubmit={signUp}>
					<h1 className="registration__form-title">Реєстрація</h1>
					<section className="registration__field">
						<Input
							id="name"
							name="userName"
							autoComplete="name"
							label="Ім'я користувача"
							onChange={(e) => onChangeInput(e)}
							required
						/>
					</section>
					<section className="registration__field">
						<Input
							id="email"
							name="email"
							label="Електрона пошта"
							onChange={(e) => onChangeInput(e)}
							autoComplete="username"
							type="email"
							required
						/>
					</section>
					<section className="registration__field">
						<Input
							id="phonenumber"
							name="phoneNumber"
							label="Номер телефону"
							onChange={(e) => onChangeInput(e)}
							autoComplete="tel"
							type="tel"
							required
						/>
					</section>
					<section className="registration__field">
						<Input
							id="passport"
							name="passport"
							label="Номер паспорту"
							onChange={(e) => onChangeInput(e)}
							type="text"
							required
						/>
					</section>
					<section className="registration__field">
						<PasswordInput
							id="password"
							name="password"
							autoComplete="new-password"
							minLength="8"
							aria-describedby="password-constraints"
							required
							onChange={(e) => onChangeInput(e)}
						/>
						<div className="registration__hint" id="password-constraints">
							Пароль має складатись як мінімум з 8 символів.
						</div>
					</section>
					<section className="registration__footer">
						<Button className="login__button" type="submit" id="sign-up">
							Зареєструватись
						</Button>
						<div className="login__footer-text">
							Є акаунт ?
							<Link className="login__footer-link" to={LOGIN_ROUTE}>
								Увійдіть !
							</Link>
						</div>
					</section>
				</form>
			</Container>
		</main>
	);
});

export default RegistrationVolunteer;

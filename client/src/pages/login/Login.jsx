import { observer } from 'mobx-react';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/UI/button/Button';
import Input from '../../components/UI/input/Input';
import PasswordInput from '../../components/UI/passwordInput/PasswordInput';
import Container from '../../components/container/Container';
import { UserAPI } from '../../http/userAPI';
import { Context } from '../../index';
import { ACCOUNT_ROUTE, REGISTRATION_ROUTE } from '../../utils/paths';
import './Login.scss';

const Login = observer(() => {
	const { userStore } = useContext(Context);
	const navigation = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function signIn(e) {
		e.preventDefault();

		try {
			const data = await UserAPI.login(email, password);
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

	return (
		<main>
			<Container className="login">
				<form method="POST" onSubmit={signIn}>
					<h1 className="login__form-title">Вхід</h1>
					<section className="login__field">
						<Input
							id="email"
							name="email"
							type="email"
							label="Електрона пошта"
							onChange={(e) => setEmail(e.target.value)}
							autoComplete="username"
							required
						/>
					</section>
					<section className="login__field">
						<PasswordInput
							label="Password"
							id="password"
							name="password"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="current-password"
							required
						/>
					</section>
					<section className="login__footer">
						<Button className="login__button" type="submit" id="sign-in">
							Увійти
						</Button>
						<div className="login__footer-text">
							Немає акаунту ?
							<Link
								className="login__footer-link"
								to={REGISTRATION_ROUTE}
							>
								Зареєструйтесь !
							</Link>
						</div>
					</section>
				</form>
			</Container>
		</main>
	);
});

export default Login;

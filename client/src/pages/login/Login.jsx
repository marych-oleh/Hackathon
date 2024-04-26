import { observer } from 'mobx-react';
import React, { useContext, useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import Container from '../../components/container/Container';
import { UserAPI } from '../../http/userAPI';
import { Context } from '../../index';
import { ACCOUNT_ROUTE, REGISTRATION_ROUTE } from '../../utils/paths';
import './Login.scss';
import Button from '../../components/UI/button/Button';
import Input from '../../components/UI/input/Input';
import PasswordInput from '../../components/UI/passwordInput/PasswordInput';

const Login = observer(() => {
	const { user } = useContext(Context);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function signIn(e) {
		e.preventDefault();
		console.log('Sigh In');
		user.setIsAuth(true);

		redirect(ACCOUNT_ROUTE);
		// try {
		// 	const data = await UserAPI.login(email, password);
		// 	console.log(data);
		// 	user.setIsAuth(true);
		// } catch (error) {
		// 	console.log(error);
		// }
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
							<Link className='login__footer-link' to={REGISTRATION_ROUTE}>Зареєструйтесь !</Link>
						</div>
					</section>
				</form>
			</Container>
		</main>
	);
});

export default Login;

import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Context } from '../../index';
import './Login.scss';

const Login = observer(() => {
	const { user } = useContext(Context);

	return <main>Login</main>;
});

export default Login;

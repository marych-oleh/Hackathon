import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { Context } from '../../index';
import './Registration.scss';

const Registration = observer(() => {
	const { user } = useContext(Context);

	return <main>Registration</main>;
});

export default Registration;

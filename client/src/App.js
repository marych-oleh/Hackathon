import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.scss';
import AppRouter from './components/AppRouter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App = observer(() => {
	return (
		<div className="wrapper">
			<Header />
			<AppRouter />
			<Footer />
		</div>
	);
});

export default App;

import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import './App.scss';
import AppRouter from './components/AppRouter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './assets/iconfont/iconfont.css';
import { points } from './utils/testData';

const App = observer(() => {
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function (position) {
				const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;
				const accuracy = position.coords.accuracy;
				points.push({ key: accuracy, lat: latitude, lng: longitude });
				console.log(
					`Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy} meters`
				);
			},
			function (error) {
				console.log(`Error getting location: ${error.message}`);
			}
		);
	});
	return (
		<div className="wrapper">
			<Header />
			<main>
				<AppRouter />
			</main>
			<Footer />
		</div>
	);
});

export default App;

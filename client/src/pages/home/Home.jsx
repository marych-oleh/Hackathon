import React from 'react';
import Container from '../../components/container/Container.jsx';
import './Home.scss';
import HelpMap from '../../components/map/HelpMap.jsx';
import { Link } from 'react-router-dom';
import { MAP_ROUTE } from '../../utils/paths.js';
import PlaceFindInput from '../../components/UI/placeFindInput/PlaceFindInput.jsx';

const Home = () => {
	return (
		<main style={{ marginTop: 0 }}>
			<Container className="heading">
				<h1 className="heading__title">Разом для кращого завтра</h1>
				<h3 className="heading__sub-title blue">
					Підтримаймо тих, хто цього потребує
				</h3>
				<h3 className="heading__sub-title orange">
					Подолай будь-які перешкоди з нашою підтримкою
				</h3>
			</Container>
			<Container>
				<h3 className="map-title">Карта потреб</h3>
				<Link to={MAP_ROUTE} className="map-link">
					<span>Повна карта</span>
				</Link>
				<HelpMap className="help-map" />
			</Container>
		</main>
	);
};

export default Home;

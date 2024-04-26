import React from 'react';
import Container from '../../components/container/Container.jsx';
import './Home.scss';
import HelpMap from '../../components/map/HelpMap.jsx';

const Home = () => {
	return (
		<main>
			<Container>
				<HelpMap />
			</Container>
		</main>
	);
};

export default Home;

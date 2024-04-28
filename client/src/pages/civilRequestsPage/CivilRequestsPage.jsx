import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/UI/loader/Loader';
import Container from '../../components/container/Container';
import VolunteerUserRequests from '../../components/volunteerUserRequests/VolunteerUserRequests';
import { useFetching } from '../../hooks/useFetching';
import { CivilRequestResponse } from '../../utils/testData';
const CivilRequests = () => {
	let { locationName } = useParams();
	const [requests, setRequests] = useState([]);
	const [getRequests, isRequestsLoading, requestsError] = useFetching(() => {
		setRequests(CivilRequestResponse);
	}, true);

	useEffect(() => {
		getRequests();
	}, []);
	console.log(requests);
	return (
		<main>
			<Container>
				<div className="civil-user__requests">
					{requests.length != 0 &&
						(isRequestsLoading ? <Loader className="civil-user__loader" />
						: requests.length === 0 ?
							<div className="civil-user__no-requests">
								Ви ще не створювали запитів
							</div>
						:	<VolunteerUserRequests
								canTake={true}
								requests={requests}
							/>)}
				</div>
			</Container>
		</main>
	);
};

export default CivilRequests;

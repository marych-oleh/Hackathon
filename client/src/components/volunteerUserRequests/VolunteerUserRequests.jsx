import React, { useMemo } from 'react';
import './VolunteerUserRequests.scss';
import VolunteerUserRequest from '../volunteerUserRequest/VolunteerUserRequest';
function VolunteerUserRequests(props) {
	const requests = props.requests;
	const requestsLine1 = useMemo(() => {
		return requests.slice(0, Math.ceil(requests.length / 2));
	}, [requests]);
	const requestsLine2 = useMemo(() => {
		return requests.slice(requestsLine1.length, requests.length);
	}, [requests]);

	return (
		<div className="civil-requests">
			<div className="civil-requests__line">
				{requestsLine1.map((request, idx) => {
					return <VolunteerUserRequest key={idx} request={request} />;
				})}
			</div>
			<div className="civil-requests__line">
				{requestsLine2.map((request, idx) => {
					return <VolunteerUserRequests key={idx} request={request} />;
				})}
			</div>
		</div>
	);
}

export default VolunteerUserRequests;

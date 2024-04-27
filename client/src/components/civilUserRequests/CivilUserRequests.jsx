import React, { useMemo } from 'react';
import './CivilUserRequests.scss';
import CivilUserRequest from '../civilUserRequest/CivilUserRequest';
function CivilUserRequests({ requests }) {
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
					return <CivilUserRequest key={idx} request={request} />;
				})}
			</div>
			<div className="civil-requests__line">
				{requestsLine2.map((request, idx) => {
					return <CivilUserRequest key={idx} request={request} />;
				})}
			</div>
		</div>
	);
}

export default CivilUserRequests;

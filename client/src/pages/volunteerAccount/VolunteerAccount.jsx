import React, { useMemo, useContext, useEffect, useState } from 'react';
import UserProfile from '../../components/userProfile/UserProfile';
import Container from '../../components/container/Container';
import { useFetching } from '../../hooks/useFetching';
import { CivilRequestResponse, UserInfo } from '../../utils/testData';
import { Context } from '../../index';
import Loader from '../../components/UI/loader/Loader';
import VolunteerUserRequests from '../../components/volunteerUserRequests/VolunteerUserRequests.jsx';

function VolunteerAccount() {
	const { userStore } = useContext(Context);
	const [userInfo, setUserInfo] = useState(undefined);
	const [requests, setRequests] = useState([]);
	const [getUserInfo, isUserInfoLoading, userInfoError] = useFetching(() => {
		setUserInfo(UserInfo);
	}, true);
	const [getRequests, isRequestsLoading, requestsError] = useFetching(() => {
		setRequests(CivilRequestResponse);
	}, true);

	useEffect(() => {
		getUserInfo();
		getRequests();
	}, []);
	console.log(requests);
	return (
		<main>
			<Container>
				<div className="civil-user__profile">
					{!userInfo || isUserInfoLoading ?
						<Loader className="civil-user__loader" />
					:	<div>
							<UserProfile
								userName={userInfo.userName}
								email={userInfo.email}
								phoneNumber={userInfo.phoneNumber}
							/>
						</div>
					}
				</div>
				<div className="civil-user__requests">
					{!isUserInfoLoading &&
						(isRequestsLoading ? <Loader className="civil-user__loader" />
						: requests.length === 0 ?
							<div className="civil-user__no-requests">
								Ви ще не створювали запитів
							</div>
						:	<VolunteerAccount requests={requests} />)}
				</div>
			</Container>
		</main>
	);
}

export default VolunteerAccount;

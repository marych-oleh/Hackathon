import React, { useContext, useEffect, useState } from 'react';
import Loader from '../../components/UI/loader/Loader';
import CivilUserRequests from '../../components/civilUserRequests/CivilUserRequests';
import Container from '../../components/container/Container';
import CreateRequestModal from '../../components/createRequestModal/CreateRequestModal';
import UserProfile from '../../components/userProfile/UserProfile';
import { useFetching } from '../../hooks/useFetching';
import { Context } from '../../index';
import { CivilRequestResponse, UserInfo } from '../../utils/testData';
import './CivilAccount.scss';
import { CivilRequestsAPI } from '../../http/civilRequestsAPI';
import { UserAPI } from '../../http/userAPI';

function CivilAccount() {
	const { userStore } = useContext(Context);
	const [userInfo, setUserInfo] = useState();
	const [requests, setRequests] = useState([]);
	const [getUserInfo, isUserInfoLoading, userInfoError] = useFetching(() => {
		UserAPI.getCivilUserData(userStore.userId)
			.then((userInfo) => {
				setUserInfo(userInfo);
			})
			.catch((error) => {
				console.log(error);
			});
	}, true);
	const [getRequests, isRequestsLoading, requestsError] = useFetching(() => {
		CivilRequestsAPI.getAllUserRequests(userStore.userData.userId)
			.then((requests) => {
				setRequests(requests);
			})
			.catch((error) => {
				console.log(error);
			});
	}, true);

	useEffect(() => {
		getUserInfo();
		getRequests();
	}, []);

	return (
		<main>
			<Container>
				<div className="civil-user__profile">
					{!userInfo || isUserInfoLoading ?
						<Loader className="civil-user__loader" />
					:	<div>
							{console.log(userInfo)}
							<UserProfile
								userName={userInfo.userName}
								email={userInfo.email}
								phoneNumber={userInfo.phoneNumber}
							/>
						</div>
					}
				</div>
				<CreateRequestModal />
				<div className="civil-user__requests">
					{!isUserInfoLoading &&
						(isRequestsLoading ? <Loader className="civil-user__loader" />
						: requests.length === 0 ?
							<div className="civil-user__no-requests">
								Ви ще не створювали запитів
							</div>
						:	<CivilUserRequests requests={requests} />)}
				</div>
			</Container>
		</main>
	);
}

export default CivilAccount;

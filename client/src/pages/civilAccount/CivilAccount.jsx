import React, { useMemo, useContext, useEffect, useState } from 'react';
import './CivilAccount.scss';
import { useFetching } from '../../hooks/useFetching';
import { CivilRequestResponse, UserInfo } from '../../utils/testData';
import { Context } from '../../index';
import Container from '../../components/container/Container';
import Loader from '../../components/UI/loader/Loader';
import UserProfile from '../../components/userProfile/UserProfile';
import Button from '../../components/UI/button/Button';
import CivilUserRequests from '../../components/civilUserRequests/CivilUserRequests';

function CivilAccount() {
	const { userStore } = useContext(Context);
	const [userInfo, setUserInfo] = useState();
	const [requests, setRequests] = useState([]);
	const [getUserInfo, isUserInfoLoading, userInfoError] = useFetching(() => {
		setUserInfo(UserInfo);
	}, true);
	const [getRequests, isRequestsLoading, requestsError] = useFetching(() => {
		setRequests(CivilRequestResponse);
	}, true);

	useEffect(() => {
		getUserInfo();
		getRequests()
	}, []);

	return (
		<div>
			<Container>
				<div className="civil-user__profile">
					{isUserInfoLoading ?
						<Loader className="civil-user__loader" />
					:	<div>
							<UserProfile
								userName={userInfo.userName}
								email={userInfo.email}
								phoneNumber={userInfo.phoneNumber}
							/>
							<Button className="civil-user__create-request-button">
								Створини новий запит
							</Button>
						</div>
					}
				</div>
				<div className="civil-user__requests">
					{!isUserInfoLoading &&
						(isRequestsLoading ?
							<Loader className="civil-user__loader" />
						: requests.length === 0 ?
							<div className="civil-user__no-requests">
								Ви ще не створювали запитів
							</div>
						:	<CivilUserRequests requests={requests} />)}
				</div>
			</Container>
		</div>
	);
}

export default CivilAccount;

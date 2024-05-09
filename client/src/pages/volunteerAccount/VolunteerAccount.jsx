import React, { useContext, useEffect, useState } from 'react';
import UserProfile from '../../components/userProfile/UserProfile';
import Container from '../../components/container/Container';
import { useFetching } from '../../hooks/useFetching';
import { Context } from '../../index';
import Loader from '../../components/UI/loader/Loader';
import VolunteerUserRequests from '../../components/volunteerUserRequests/VolunteerUserRequests';
import { VolunteerRequestsAPI } from '../../http/volunteerRequestsAPI';
import { UserAPI } from '../../http/userAPI';
import './VolunteerAccount.scss';
import Button from '../../components/UI/button/Button';

function VolunteerAccount() {
	const { userStore } = useContext(Context);
	const [userInfo, setUserInfo] = useState(undefined);
	const [requests, setRequests] = useState([]);
	const [getUserInfo, isUserInfoLoading, userInfoError] = useFetching(() => {
		UserAPI.getVolunteerUserData(userStore.userId)
			.then((userInfo) => {
				setUserInfo(userInfo);
				console.log(userInfo);
			})
			.catch((error) => {
				console.log(error);
			});
	}, true);
	const [getRequests, isRequestsLoading, requestsError] = useFetching(() => {
		VolunteerRequestsAPI.getAllUserRequests(userStore.userData.userId)
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
				<div className="volunteer__request-buttons">
					<Button
						onClick={() => {
							userStore.exitAccount();
						}}
						className="volunteer__request-button"
					>
						Вийти з акаунту
					</Button>
				</div>
				<div className="civil-user__requests">
					{!isUserInfoLoading &&
						(isRequestsLoading ? <Loader className="civil-user__loader" />
						: requests.length === 0 ?
							<div className="civil-user__no-requests">
								Ви ще не створювали запитів
							</div>
						:	<VolunteerUserRequests requests={requests} />)}
				</div>
			</Container>
		</main>
	);
}

export default VolunteerAccount;

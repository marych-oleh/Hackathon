import React from 'react';
import './UserProfile.scss';
import Loader from '../UI/loader/Loader';
function UserProfile({ isLoading, userName, email, phoneNumber }) {
	return (
			<div className="user-profile">
				<div className="user-profile__name">{userName}</div>
				<div className="user-profile__contacts">
					<a href={email} className="user-profile__email">{email}</a>
					<div className="user-profile__phone-number">{phoneNumber}</div>
				</div>
			</div>
	);
}

export default UserProfile;

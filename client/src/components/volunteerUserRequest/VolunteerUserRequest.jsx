import React, { useContext, useMemo } from 'react';
import { Context } from '../../index';
import { formatDate } from '../../utils/functions.js';
import PopupList from '../UI/popupList/PopupList';
import AcceptRequestModal from '../acceptRequestModal/AcceptRequestModal.jsx';
import './VolunteerUserRequest.scss';
import { VOLUNTEER } from '../../types.js';

function VolunteerUserRequest({ request, canTake }) {
	const { userStore } = useContext(Context);
	const requestStatus = useMemo(() => {
		switch (request.status) {
			case 'NOT_TAKEN':
				return 'Не взято';
			case 'TAKEN':
				return 'Взято';
		}
	}, [request.status]);

	const volunteers = useMemo(() => {
		return request.infoVolunteers.map((volunteer) => {
			return {
				title: (
					<div className="request-volunteers__title">
						{volunteer.volunteerUser.userName}
					</div>
				),
				body: (
					<div className="request-volunteers__body">
						<div className="request-volunteers__contacts volunteer-request__two-in-row">
							<div className="request-volunteers__email">
								{volunteer.volunteerUser.email}
							</div>
							<div className="request-volunteers__phone-number">
								{volunteer.volunteerUser.phoneNumber}
							</div>
						</div>
						<div className="request-volunteers__comment">
							{volunteer.comment}
						</div>
						<div className="request-volunteers__date">
							{'Прийнято: ' + formatDate(volunteer.dateOfAcceptation)}
						</div>
					</div>
				),
			};
		});
	}, [request.infoVolunteers]);

	return (
		<div className="volunteer-request">
			<div className="volunteer-request__content">
				<div className="volunteer-request__content-header volunteer-request__two-in-row">
					<h2 className="volunteer-request__tags">
						{'Теги: ' + request.tags.join(', ')}
					</h2>
					<h2 className="volunteer-request__status">
						{'Статус: ' + requestStatus}
					</h2>
				</div>

				<div className="volunteer-request__description">
					{request.description}
				</div>

				<div className="volunteer-request__two-in-row">
					<div className="volunteer-request__date">
						{'Додано: ' + formatDate(request.dateOfCreation)}
					</div>
					<div className="volunteer-request__location">
						{'Локація: ' + request.location.locationName}
					</div>
				</div>
			</div>

			<div className="volunteer-request__body">
				<div className="volunteer-request__name">
					{request.civilUser.userName}
				</div>
				<div className="volunteer-request__contacts volunteer-request__two-in-row">
					<div className="volunteer-request__email">
						{request.civilUser.email}
					</div>
					<div className="volunteer-request__phone-number">
						{request.civilUser.phoneNumber}
					</div>
				</div>
			</div>

			<PopupList
				headerColor="#E6FFEA"
				className="request-volunteers__list-element"
				items={volunteers}
				initiallyOpened={volunteers.length == 1}
			/>
			{canTake && userStore.isAuth && userStore.role === VOLUNTEER && (
				<AcceptRequestModal />
			)}
		</div>
	);
}

export default VolunteerUserRequest;

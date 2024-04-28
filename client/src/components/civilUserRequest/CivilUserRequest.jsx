import React, { useMemo } from 'react';
import './CivilUserRequest.scss';
import PopupList from '../UI/popupList/PopupList';
import { formatDate } from '../../utils/functions.js';
function CivilUserRequest({ request }) {
	const requestHeaderColor = useMemo(() => {
		switch (request.status) {
			case 'NOT_TAKEN':
				return 'orange';
			case 'TAKEN':
				return 'green';
		}
	}, [request.status]);

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
						<div className='request-volunteers__contacts civil-request__two-in-row'>
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
							{"Прийнято: " + formatDate(volunteer.dateOfAcceptation)}
						</div>
					</div>
				),
			};
		});
	}, [request.infoVolunteers]);

	return (
		<div className="civil-request">
			<div className={`civil-request__header ${requestHeaderColor}`}></div>
			<div className="civil-request__content">
				<div className="civil-request__content-header civil-request__two-in-row">
					<h2 className="civil-request__tags">
						{'Теги: ' + request.tags.join(', ')}
					</h2>
					<h2 className="civil-request__status">
						{'Статус: ' + requestStatus}
					</h2>
				</div>

				<div className="civil-request__description">
					{request.description}
				</div>

				<div className="civil-request__two-in-row">
					<div className="civil-request__date">
						{"Додано: " + formatDate(request.dateOfCreation)}
					</div>
					<div className="civil-request__location">
						{"Локація: " + request.location.locationName}
					</div>
				</div>
			</div>

			<PopupList
				headerColor='#E6FFEA'
				className="request-volunteers__list-element"
				items={volunteers}
				initiallyOpened={volunteers.length == 1}
			/>
		</div>
	);
}

export default CivilUserRequest;

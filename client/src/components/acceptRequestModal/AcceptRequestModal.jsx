import React, { useState } from 'react';
import './AcceptRequestModal.scss';
import Button from '../UI/button/Button';
import Textarea from '../UI/textarea/Textarea';
import FullscreenModal from '../modal/fullscreenModal/FullscreenModal';
import PlaceFindInput from '../UI/placeFindInput/PlaceFindInput.jsx';
import ReactSelect from '../UI/reactSelect/ReactSelect';
const options = [
	{ value: 'Оберіть потребу', label: 'Оберіть потребу', isDisabled: true },
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

function AcceptRequestModal() {
	const [acceptRequestData, setAcceptRequestData] = useState({
		description: '',
	});
	const [requestModal, setRequestModal] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	function validateForm(e) {
		e.preventDefault();
		if (acceptRequestData.description !== '') {
			setErrorMessage('');

			const finalObject = {
				userId: 1,
				civilRequestId: 1,
				description: acceptRequestData.description,
			};
			console.log(finalObject);
			// push to the server
		} else {
			setErrorMessage('Дані вказані неправильно.');
		}
	}

	return (
		<div className="accept-requests">
			<Button
				onClick={() => setRequestModal(true)}
				className="accept-request__request-button"
			>
				Прийняти запит
			</Button>
			<FullscreenModal
				active={requestModal}
				closeModal={() => {
					setRequestModal(false);
				}}
				className=""
				variant="fullscreen"
			>
				<form
					onSubmit={(e) => validateForm(e)}
					className="accept-request__form"
					name="createRequest"
					action="post"
				>
					<Textarea
						name="description"
						value={acceptRequestData.description}
						onChange={(e) =>
							setAcceptRequestData({
								...acceptRequestData,
								description: e.target.value,
							})
						}
						label="Напишіть коментар"
					/>
					<Button type="submit">Прийняти запит</Button>
					<div className="accept-request__error-message">
						{errorMessage}
					</div>
				</form>
			</FullscreenModal>
		</div>
	);
}

export default AcceptRequestModal;

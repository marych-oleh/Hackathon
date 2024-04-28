import { default as React, useContext, useState } from 'react';
import { Context } from '../../index.js';
import { tags } from '../../utils/testData.js';
import Button from '../UI/button/Button';
import PlaceFindInput from '../UI/placeFindInput/PlaceFindInput.jsx';
import ReactSelect from '../UI/reactSelect/ReactSelect';
import Textarea from '../UI/textarea/Textarea';
import FullscreenModal from '../modal/fullscreenModal/FullscreenModal';
import './CreateRequestModal.scss';
import { CivilRequestsAPI } from '../../http/civilRequestsAPI.js';
const options = [
	{ value: 'Оберіть потребу', label: 'Оберіть потребу', isDisabled: true },
	...tags,
];

function CreateRequestModal() {
	const { userStore } = useContext(Context);
	const [createRequestData, setCreateRequestData] = useState({
		tags: [],
		description: '',
	});
	const [reactSelect, setReactSelect] = useState([]);
	const [userLocation, setUserLocation] = useState('');
	const [requestModal, setRequestModal] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	function onSelectChange(e) {
		setReactSelect(e);
		setCreateRequestData({
			...createRequestData,
			tags: e.map((elem) => elem.value),
		});
	}

	function onLocationChange(e) {
		if (!e.name) {
			setUserLocation({
				locationName: e.formatted_address,
				coordinates: {
					lat: e.geometry.location.lat(),
					lng: e.geometry.location.lng(),
				},
			});
		}
	}

	function validateForm(e) {
		e.preventDefault();
		const productForm = document.forms.createRequest;
		const formElements = Array.from(productForm.elements);
		let anyHasError = false;

		for (let i = formElements.length - 1; i >= 0; i--) {
			if (formElements[i].classList.contains('error')) {
				formElements[i].classList.remove('error');
			}
			let hasError = false;
			const createRequestElement = createRequestData[formElements[i].name];

			switch (formElements[i].name) {
				case 'tags':
					if (createRequestElement.length == 0) hasError = true;
					break;
				case 'description':
					if (createRequestElement === '') hasError = true;
					break;
			}

			if (hasError) {
				anyHasError = true;
				break;
			}
		}
		if (userLocation == '') anyHasError = true;

		if (!anyHasError) {
			setErrorMessage('');

			const finalObject = {
				civilUserId: userStore.userData.userId,
				tags: createRequestData.tags,
				description: createRequestData.description,
				location: userLocation,
			};
			console.log(finalObject);
			// push to the server
			CivilRequestsAPI.addNewCivilRequest(finalObject)
				.then((value) => {
					setRequestModal(false);
					setCreateRequestData({
						tags: [],
						description: '',
					});
					setReactSelect([]);
					setUserLocation('');
				})
				.catch((error) => {
					console.error(error);
					setErrorMessage(
						'Упс... Щось пішло не так :(    Спробуйте ще раз надіслати'
					);
				});
		} else {
			setErrorMessage('Дані вказані неправильно.');
		}
	}

	return (
		<div className="create-requests">
			<div className="create-request__request-buttons">
				<Button
					onClick={() => setRequestModal(true)}
					className="create-request__request-button"
				>
					Створити новий запит
				</Button>
				<Button
					onClick={() => {
						userStore.exitAccount();
					}}
					className="create-request__request-button"
				>
					Вийти з акаунту
				</Button>
			</div>
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
					className="create-request__form"
					name="createRequest"
					action="post"
				>
					<label
						className="create-request__label"
						htmlFor="create-request__react-select"
					>
						Оберіть потребу
					</label>
					<ReactSelect
						name="tags"
						id="create-request__react-select"
						value={reactSelect}
						setValue={onSelectChange}
						className="create-request__react-select"
						options={options}
					/>
					<Textarea
						name="description"
						value={createRequestData.description}
						onChange={(e) =>
							setCreateRequestData({
								...createRequestData,
								description: e.target.value,
							})
						}
						label="Опишіть ситуацію"
					/>
					<label
						className="create-request__label"
						htmlFor="create-request__location"
					>
						Оберіть вашу локацію
					</label>
					<PlaceFindInput
						name="location"
						id="create-request__location"
						onPlaceSelected={(e) => onLocationChange(e)}
					/>
					<Button type="submit">Створити новий запит</Button>
					<div className="create-request__error-message">
						{errorMessage}
					</div>
				</form>
			</FullscreenModal>
		</div>
	);
}

export default CreateRequestModal;

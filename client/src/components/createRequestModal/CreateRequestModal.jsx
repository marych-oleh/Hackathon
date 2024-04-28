import React, { useState } from 'react';
import './CreateRequestModal.scss';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import Textarea from '../UI/textarea/Textarea';
import FullscreenModal from '../modal/fullscreenModal/FullscreenModal';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const options = [
	{ value: 'Оберіть потребу', label: 'Оберіть потребу', isDisabled: true },
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];
const animatedComponents = makeAnimated();
function CreateRequestModal() {
	const [createRequestData, setCreateRequestData] = useState({
		tags: [],
		description: 'f',
		location: '',
	});
	console.log(createRequestData)
	const [reactSelect, setReactSelect] = useState([]);
	function onSelectChange(e) {
		setReactSelect(e);
		setCreateRequestData({
			...createRequestData,
			tags: e.map((elem) => elem.value),
		});
	}
	const [requestModal, setRequestModal] = useState(false);
	return (
		<div className="create-requests">
			<Button
				onClick={() => setRequestModal(true)}
				className="create-request__request-button"
			>
				Створини новий запит
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
					className="create-request__form"
					name="createRequest"
					action="post"
				>
					<label className='create-request__label' htmlFor="create-request__react-select">
						Оберіть потребу
					</label>
					<Select
						id="create-request__react-select"
						placeholder=""
						value={reactSelect}
						onChange={onSelectChange}
						closeMenuOnSelect={false}
						components={animatedComponents}
						isMulti
						options={options}
					/>
					<Textarea
						value={createRequestData.description}
						onChange={(e) =>
							setCreateRequestData({
								...createRequestData,
								description: e.target.value,
							})
						}
						label="Опишіть ситуацію"
					/>
				</form>
			</FullscreenModal>
		</div>
	);
}

export default CreateRequestModal;

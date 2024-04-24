import React from 'react';

const ModalTop = ({ title, closeModal }) => {
	return (
		<div className="popup__top ">
			<div className="popup__title">{title}</div>
			<button
				type="button"
				onClick={closeModal}
				className="popup__close _icon-shop"
			></button>
		</div>
	);
};

export default ModalTop;

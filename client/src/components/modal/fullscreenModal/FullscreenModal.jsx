import React from 'react';
import './FullscreenModal.scss';
import ModalTop from '../base/ModalTop';
import {bodyLock, bodyUnlock} from "../../../utils/functions.js";

const FullscreenModal = ({ active, closeModal, children, className }) => {
	if (active) {
		bodyLock();
	}
	if (closeModal) {
		bodyUnlock();
	}
	return (
		<div
			onClick={closeModal}
			aria-hidden={active}
			aria-modal={active}
			role="dialog"
			className={[
				'fullscreen-popup',
				active ? 'fullscreen-popup_show' : '',
			].join(' ')}
		>
			<div
				className="fullscreen-popup__wrapper"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="fullscreen-popup__header">
				<div className="fullscreen-popup__title">
					Закрити вікно
				</div>
				<button
					type="button"
					onClick={closeModal}
					className="fullscreen-popups__close _icon-cross"
				></button>
				</div>
				<div className={'fullscreen-popup__content ' + (className ?? '')}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default FullscreenModal;

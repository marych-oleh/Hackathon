import React from 'react';
import './Input.scss';

const Input = ({ label, className, id, ...props }) => {
	return (
		<div className={'input-wrapper ' + (className ?? '')}>
			{label && (
				<label className="input-wrapper__label" htmlFor={id}>
					{label}
				</label>
			)}
			<input
				className="input-wrapper__input"
				id={id}
				{...props}
			/>
		</div>
	);
};

export default Input;

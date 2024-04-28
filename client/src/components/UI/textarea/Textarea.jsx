import React from 'react';
import './Textarea.scss';

const Textarea = ({ label, className, id, ...props }) => {
	return (
		<div className={'textarea-wrapper ' + (className ?? '')}>
			{label && (
				<label className="textarea-wrapper__label" htmlFor={id}>
					{label}
				</label>
			)}
			<textarea
				className="textarea-wrapper__textarea"
				id={id}
				{...props}
			></textarea>
		</div>
	);
};

export default Textarea;

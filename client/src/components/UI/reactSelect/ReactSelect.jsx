import React from 'react';
import './ReactSelect.scss';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const customStyles = {
	control: (provided, state) => ({
		...provided,
		border: state.isFocused ? '1px solid #f55721' : '1px solid #a3a3a3', // Change border color based on focus
		'&:hover': {
			border: '1px solid #ff0000', // Change background color on hover
		},
		transition: 'border .3s ease',
		boxShadow: 'none', // Remove default box shadow
	}),
};

function ReactSelect({
	value,
	setValue,
	options,
	className,
	placeholder = '',
	closeMenuOnSelect = false,
	isMulti = true,
	...props
}) {
	const classNames = ['react-select', className];
	return (
		<Select
			styles={customStyles}
			id="create-request__react-select"
			placeholder={placeholder}
			value={value}
			onChange={setValue}
			closeMenuOnSelect={closeMenuOnSelect}
			components={animatedComponents}
			isMulti={isMulti}
			className={classNames.join(' ')}
			options={options}
			{...props}
		/>
	);
}

export default ReactSelect;

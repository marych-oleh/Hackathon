import React from 'react';
import './Logo.scss';

function Logo({ className }) {
	return <div className={'logo' + (className ?? '')}>helpingUA</div>;
}

export default Logo;

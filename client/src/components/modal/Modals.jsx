import React from 'react';
import CartModal from './cartModal/CartModal';
import { memo } from 'react';
import FavoritesModal from './favoritesModal/FavoritesModal';

/**
 * @param {Object} props
 * @param {(modalName) => modalHandler} props.getModalHandler
 * @returns
 */
const Modals = ({ getModalHandler }) => {
	const cartModalHandler = getModalHandler('cartModal');
	const favoritesModalHandler = getModalHandler('favoritesModal');
	return (
		<>
			{cartModalHandler.isOpen && <CartModal modalHandler={cartModalHandler} />}
			{favoritesModalHandler.isOpen && <FavoritesModal modalHandler={favoritesModalHandler} />}
		</>
	);
};

export default memo(Modals);

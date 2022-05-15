import { ACTIONS } from './actions';

export const favoriteReducer = (favorite, action) => {
	switch (action.type) {
		case ACTIONS.ADD:
			return [...favorite, action.payload];

		case ACTIONS.REMOVE:
			const filteredArray = favorite.filter(
				(game) => game.id !== action.payload.id
			);
			return filteredArray;

		default:
			console.log('default');
	}

	return favoriteReducer;
};

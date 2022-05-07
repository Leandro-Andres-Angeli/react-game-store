import { ACTIONS } from './actions';

export const favouriteReducer = (favourite, action) => {
	switch (action.type) {
		case ACTIONS.ADD:
			return [...favourite, action.payload];

		case ACTIONS.REMOVE:
			const filteredArray = favourite.filter(
				(game) => game.id !== action.payload.id
			);
			return filteredArray;

		default:
			console.log('default');
	}

	return favouriteReducer;
};

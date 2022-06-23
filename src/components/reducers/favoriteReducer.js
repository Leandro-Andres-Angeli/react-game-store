import { ACTIONS } from './actions';

export const favoriteReducer = (favorite, action) => {
	switch (action.type) {
		case ACTIONS.ADD:
			return favorite.filter((favs) => favs.id === action.payload.id).length ===
				0
				? [...favorite, action.payload]
				: favorite;

		case ACTIONS.REMOVE:
			const filteredArray = favorite.filter(
				(game) => game.id !== action.payload.id
			);
			return filteredArray;
		case ACTIONS.RESET:
			return [];
		default:
			console.log('default');
	}

	return favoriteReducer;
};

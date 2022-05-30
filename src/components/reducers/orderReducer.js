import { ACTIONS } from './actions';

export const orderReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};

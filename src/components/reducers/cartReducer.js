import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { ACTIONS } from './actions';

export const cartReducer = (cart, action) => {
	switch (action.type) {
		case ACTIONS.ADD:
			return {
				...cart,

				items: [...cart.items, action.payload],
			};

		default:
			console.log('default');
	}

	console.log(cart.items);
	console.log('cart');
	return cartReducer;
};

import { ACTIONS } from './actions';

export const cartReducer = (cart, action) => {
	switch (action.type) {
		case 'add':
			return { ...cart, items: [...cart.items, action.payload] };

		default:
			console.log('default');
	}
	console.log(cart);
	console.log('cart');
	return cartReducer;
};

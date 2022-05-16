import {
	calcTotalPrice,
	calcTotalValues,
	checkIfExistsFunc,
} from '../../utils/cartFunctions';
import { ACTIONS } from './actions';

export const cartReducer = (state, action) => {
	// const calcTotalQty = calcTotalValues(state);
	// const totalPrice = calcTotalPrice(state);
	switch (action.type) {
		case ACTIONS.ADD:
			const checkIfExists = checkIfExistsFunc(state, action.payload);

			const addToCartFunction = () => {
				if (checkIfExists) {
					let updateQty = state.items.map((item) =>
						parseInt(item.id) === parseInt(action.payload.id) &&
						parseInt(item.platform.id) === parseInt(action.payload.platform.id)
							? { ...item, quantity: item.quantity + action.payload.quantity }
							: item
					);
					return {
						...state,

						items: updateQty,
					};
				} else {
					return {
						...state,
						items: [...state.items, action.payload],
					};
				}
			};

			return addToCartFunction();
		// (state.total = calcTotalQty),
		// (state.total_amount = totalPrice),

		default:
			console.log('def');
			return state;
	}
};

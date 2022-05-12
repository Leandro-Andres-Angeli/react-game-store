import { calcTotalValues, checkIfExistsFunc } from '../../utils/cartFunctions';
import { ACTIONS } from './actions';

export const cartReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD:
			const checkIfExists = checkIfExistsFunc(state, action.payload);

			const calcTotalQty = calcTotalValues(state);

			const addToCartFunction = () => {
				if (checkIfExists) {
					let updateQty = state.items.map((item) =>
						parseInt(item.id) === parseInt(action.payload.id) &&
						parseInt(item.platform.id) === parseInt(action.payload.platform.id)
							? { ...item, quantity: item.quantity + 1 }
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
			state.total = calcTotalQty;
			return addToCartFunction();

		default:
			console.log('def');
			return state;
	}
};

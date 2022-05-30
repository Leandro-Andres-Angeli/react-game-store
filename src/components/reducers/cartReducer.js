import { checkIfExistsFunc } from '../../utils/cartFunctions';
import { ACTIONS } from './actions';

export const cartReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD:
			const checkIfExists = checkIfExistsFunc(state, action.payload);

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
			return addToCartFunction();
		case ACTIONS.REMOVE:
			const removeFromCartFunction = () => {
				let itemToUpdate = state.items.filter(
					(item) =>
						item.id === action.payload.id &&
						item.platform.id === action.payload.platform.id
				);
				const { quantity } = itemToUpdate[0];
				console.log(action.payload.platform.id);
				console.log(itemToUpdate[0].platform.id);
				console.log(quantity);

				const filteredArray =
					quantity > 1
						? {
								...state,
								items: state.items.map((item) =>
									item.id === action.payload.id &&
									item.platform.id === action.payload.platform.id
										? { ...item, quantity: item.quantity - 1 }
										: item
								),
						  }
						: {
								...state,
								items: state.items.filter(
									(item) =>
										item.id !== action.payload.id ||
										parseInt(item.platform.id) !==
											parseInt(action.payload.platform.id)
								),
						  };
				return filteredArray;
			};
			return removeFromCartFunction();

		default:
			return state;
	}
};

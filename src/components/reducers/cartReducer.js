import { ACTIONS } from './actions';

export const cartReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD:
			const checkIfExists = state.items.find((item) => {
				return item.id === action.payload.id &&
					item.platform.id === action.payload.platform.id
					? item
					: null;
			});
			console.log(state);
			console.log(checkIfExists);

			const cht = () => {
				if (checkIfExists) {
					let updateQty = state.items.map((item) =>
						parseInt(item.id) === parseInt(action.payload.id) &&
						parseInt(item.platform.id) === parseInt(action.payload.platform.id)
							? { ...item, quantity: item.quantity + 1 }
							: item
					);
					return { ...state, items: updateQty };
				} else {
					return { ...state, items: [...state.items, action.payload] };
				}
			};
			let c = cht();
			console.log(c);
			return c;
		// return { ...state, items: [...state.items, action.payload] };

		// checkIfExists?state.items.map((item)=>{
		//  let updatedCart = state.items.map(item=>{
		// 	return item.id === action.payload.id && item.platform.id === action.payload.platform.id? {...item, quantity:item.quantity + 1}:item;

		//  return updatedCart;
		// }): { ...cart, items:[...cart.items, action.payload] };

		// let same = false;
		// let ite;
		// let updatedCart;
		// test.map(e=>e.id==data.id && e.name==data.name ? e={...e,num:e.num+1} :test.push(data))
		// cart?.items?.map((item) => {
		// 	if (
		// 		item.id === action.payload.id &&
		// 		item.platform.id === action.payload.platform.id
		// 	) {
		// 		cart.items.pop();
		// 		item = { ...item, quantity: (item.quantity += 1) };
		// 		return (updatedCart = { ...cart, items: [...cart.items, item] });

		// 		// return cart.filter((e) => e === action.payload);
		// 	} else {
		// 		return (updatedCart = {
		// 			...cart,
		// 			items: [...cart.items, action.payload],
		// 		});
		// 	}
		// });

		// return { ...cart, items: [...cart.items, action?.payload] };
		// return updatedCart;

		// cart.items?.map((item) => {
		// 	if (item.id === action.payload.id) {
		// 		console.log('same');
		// 		same = true;
		// 	}
		// 	return same;
		// });

		// return !same ? { ...cart, items: [...cart.items, action.payload] } : cart;
		// return {
		// 	...cart,

		// 	items: [...cart.items, action.payload],
		// };

		// return cart;
		// const addAction = cart.items?.map((item) => {
		// 	return item.platform.id === action.payload.platform.id &&
		// 		item.id === action.payload.id
		// 		? console.log('same')
		// 		: {
		// 				...cart,

		// 				items: [...cart.items, action.payload],
		// 		  };
		// });
		// return addAction;

		// cart.items.map((item) => {
		// 	return item.id === action.payload.id &&
		// 		item.platform.id === action.payload.platform.id &&
		// 		cart.items.length !== 0
		// 		? { quantity: item.quantity + 1 }
		// 		: {
		// 				...cart,

		// 				items: [...cart.items, action.payload],
		// 		  };
		// });
		// break;
		// return	cart.items.map((item) =>
		// 			item.id === action.payload.id &&
		// 			item.platform === action.payload.platform
		// 				?
		// 			{
		// 						...cart,

		// 						items: [...cart.items],
		// 				  }
		// 				:
		// 				 {
		// 						...cart,

		// 						items: [...cart.items, action.payload],
		// 				  };
		// 		);

		// return {
		// 	...cart,

		// 	items: [...cart.items, action.payload],

		default:
			console.log('def');
			return state;
	}
};

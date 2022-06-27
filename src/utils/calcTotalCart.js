export const calcTotalPrice = (cart) => {
	return cart.items
		? cart.items.reduce((a, b) => a + b.price * b.quantity, 0) ||
				cart.items[0]?.price
		: 0;
};
export const calcTotalQuantity = (cart) => {
	return cart.items
		? cart.items.reduce((a, b) => a + b.quantity, 0) || cart?.items[0]?.quantity
		: 0;
};

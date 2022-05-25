export const checkIfExistsFunc = (state, payload) => {
	return state.items.find(
		(item) => item.id === payload.id && item.platform.id === payload.platform.id
	);
};
export const calcTotalPrice = (state) => {
	let totalGames = state.items.reduce((a, b) => a + b.quantity * b.price, 0);

	return totalGames;
};
export const calcTotalValues = (state) => {
	let totalGames = state.items
		.map((item) => item.quantity)
		.reduce((acum, val) => {
			return acum + val;
		}, 0);
	console.log(state.items.length);
	return totalGames;
};

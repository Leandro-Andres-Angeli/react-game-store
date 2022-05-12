export const checkIfExistsFunc = (state, payload) => {
	return state.items.find(
		(item) => item.id === payload.id && item.platform.id === payload.platform.id
	);
};
export const calcTotalValues = (state) => {
	let totalGames = state.items
		.map((item) => item.quantity)
		.reduce((acum, val) => {
			return acum + val;
		}, 1);
	console.log(state.items.length);
	return totalGames;
};
// state.items.length >= 1
// 								? state.items
// 										.map((item) => item.quantity)
// 										.reduce((a, b) => a + b)
// 								: 1,

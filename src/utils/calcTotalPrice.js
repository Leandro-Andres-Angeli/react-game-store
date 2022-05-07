export const calcTotalPrice = async (arrayGames) => {
	let returnTotal = Promise.resolve();
	try {
		returnTotal =
			(await arrayGames.map((game) => game.price).reduce((a, b) => a + b)) ||
			arrayGames[0].price;
	} catch (err) {
		console.log(err);
	}
	return returnTotal;
};
// const promise = Promise.resolve("This is a promise");

// async function PromiseExample() {
//   try {
//     const value = await promise;
//     console.log(value); //This is a promise  👈
//   } catch (error) {
//     console.log(error);
//   }
// }
// totalPrice: calcTotalPrice(cart.items),
// cart.items.length > 0
// 	? cart.items.map((game) => game.price).reduce((a, b) => a + b)
// 	: cart.items[0]?.price,

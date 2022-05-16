export const checkIfExistsInFavoriteFunc = (arrayFav, gameID) => {
	let check = false;
	console.log('check');
	for (let i = 0; i < arrayFav.length; i++) {
		if (arrayFav[i].id === gameID) {
			check = true;
			break;
		} else {
			check = false;
		}
	}
	return check;
};

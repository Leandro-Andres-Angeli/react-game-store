const initial = JSON.parse(localStorage.getItem('cart')) || {
	items: [],
};

export default initial;

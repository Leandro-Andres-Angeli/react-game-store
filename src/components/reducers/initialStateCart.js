const initial = JSON.parse(localStorage.getItem('cart')) || {
	total: 0,
	items: [],
};
export default initial;

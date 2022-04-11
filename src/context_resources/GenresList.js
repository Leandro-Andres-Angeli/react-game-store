import { useFetch } from '../customHooks/useFetch';

export const GenresList = () =>
	useFetch(
		`${process.env.REACT_APP_API_BASE_URL}/genres?key=${process.env.REACT_APP_API_KEY}`
	);

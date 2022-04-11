import { useLocation } from 'react-router-dom';

export const GetLocationFunction = () => {
	const location = useLocation();
	return location.pathname.replace('/', '');
};

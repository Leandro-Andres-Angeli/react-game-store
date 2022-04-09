import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const getData = useCallback(() => {
		console.log('fetch callback');
		axios
			.get(url)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => console.log('error'));
	}, [url]);
	useEffect(() => {
		getData();
		console.log('fetch from useState');
	}, [getData]);
	return data;
};

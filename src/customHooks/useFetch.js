import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	// const [params, setParams] = useState(parameters);

	const fetchData = useCallback(() => {
		axios
			.get(url)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => console.log(err))
			.finally(setLoading(true));
	}, [url]);

	useEffect(() => {
		//ISLOADED FOR CLEANUP PURPOSES
		let isLoaded = false;
		//ISLOADED FOR CLEANUP PURPOSES

		if (!isLoaded) {
			fetchData();
		}
		isLoaded = true;

		console.log(isLoaded);
	}, [fetchData]);
	return [data, setData, loading];
};

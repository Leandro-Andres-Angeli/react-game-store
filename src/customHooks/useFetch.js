import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useFetch = (url, filterFetch) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(null);

	const fetchData = useCallback(() => {
		axios
			.get(url)
			.then((res) => {
				filterFetch ? setData(filterFetch(res)) : setData(res.data);
			})
			.catch((err) => console.log(err))
			.finally(setLoading(true));
	}, [filterFetch, url]);

	useEffect(() => {
		//ISLOADED FOR CLEANUP PURPOSES
		let isLoaded = false;
		//ISLOADED FOR CLEANUP PURPOSES

		if (!isLoaded) {
			fetchData();
		}
		isLoaded = true;
	}, [fetchData]);

	return [data, setData, loading];
};

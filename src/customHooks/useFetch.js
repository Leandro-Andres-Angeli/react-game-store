import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useFetch = (url, parameters) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const paramsRef = useRef(parameters);
	const params = paramsRef.current;

	const fetchData = useCallback(() => {
		axios
			.get(url)
			.then((res) => {
				if (params.length === 0) {
					setData(res.data);
				} else {
					// params.map((param) => {
					// 	const objProp = param;
					// 	return setData({ ...data, objProp: res.data[objProp] });
					// });

					for (const param of params) {
						return setData({ ...data, [param]: res.data[param] });
					}
				}
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

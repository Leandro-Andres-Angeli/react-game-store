import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { useFetch } from '../customHooks/useFetch';
import SliderComponent from '../components/SliderComponent';

const Home = () => {
	const KEY = process.env.REACT_APP_API_KEY;
	const URI = process.env.REACT_APP_API_BASE_URL;
	const API_URI = `${URI}/games/1?key=${KEY}`;
	const [data, setData] = useState({ data: 1 });
	const fetched = useFetch(API_URI);

	//FETCH FUNCTION WORKING
	console.log(fetched);
	//FETCH FUNCTION WORKING
	useEffect(() => {
		console.log('redn');
		if (fetched) {
			const { name } = fetched;
			setData({ ...data, name });
		}
	}, [fetched]);
	console.log(data);

	return (
		<Container maxWidth="lg">
			Home
			<SliderComponent></SliderComponent>
		</Container>
	);
};

export default Home;

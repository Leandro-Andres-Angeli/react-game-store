import React, { memo, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { useFetch } from '../customHooks/useFetch2';
import SliderComponent from '../components/SliderComponent';
import { useTheme } from '@mui/system';

const Home = () => {
	const theme = useTheme();

	return (
		<Container maxWidth="lg">
			<SliderComponent
				sx={{ height: `${theme.slider_height}` }}
			></SliderComponent>
		</Container>
	);
};

export default Home;

import React from 'react';

import SliderComponent from '../components/SliderComponent';
import { useTheme } from '@mui/system';
import { Box } from '@mui/material';
import PoliciesComponent from '../components/PoliciesComponent';

const Home = () => {
	const theme = useTheme();

	return (
		<Box sx={{ p: 0 }}>
			<SliderComponent
				sx={{ height: `${theme.slider_height}`, p: 0, width: '100vw' }}
			></SliderComponent>
			<PoliciesComponent></PoliciesComponent>
		</Box>
	);
};

export default Home;

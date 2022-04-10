import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@mui/system';
import SliderItem from './SliderItem';
export default function SliderComponent() {
	const theme = useTheme();
	const [gamesId, setGamesId] = useState([3, 6, 33, 22, 59]);

	var settings = {
		dots: true,
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<Box
			component={Slider}
			{...settings}
			sx={{
				'& button::before': { color: [theme.palette.secondary.main] },
				px: 4,
			}}
		>
			{gamesId.map((gameId, i) => (
				<SliderItem
					component="div"
					key={i}
					title={'upcoming stock'}
					gameId={gameId}
				>
					{' '}
				</SliderItem>
			))}
		</Box>
	);
}

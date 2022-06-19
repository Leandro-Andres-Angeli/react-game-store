import { Box, Container, Typography } from '@mui/material';
//MAKE STYES DOESN'T WORK ON REACT STRICT MODE OR REACT 18
// import { makeStyles } from '@mui/styles';
//MAKE STYES DOESN'T WORK ON REACT STRICT MODE OR REACT 18
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@mui/system';
import SliderItem from './SliderItem';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
export default function SliderComponent() {
	const theme = useTheme();
	const randomGame = () => {
		return Math.round(Math.random() * 1000);
	};
	let gamesArray = [];
	for (let index = 0; index < 5; index++) {
		gamesArray = [...gamesArray, randomGame()];
	}

	// const [gamesId, setGamesId] = useState([3, 6, 33, 22, 59]);
	const [gamesId, setGamesId] = useState(gamesArray);




	var settings = {
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <KeyboardDoubleArrowRightIcon />,
		prevArrow: <KeyboardDoubleArrowLeftIcon />,
	};

	const arrowsCss = {
		fontSize: '2rem',
		color: [theme.palette.secondary.main],
		transition: 'all .2s ease',
		borderRadius: ' 20px 20px;',
		'&:hover': {
			backgroundColor: [theme.palette.secondary.main],
			color: [theme.palette.primary.main],
		},
	};
	return (
		<Box
			component={Slider}
			{...settings}
			sx={{
				'& .slick-prev': { zIndex: 1, left: '15px' },
				'& .slick-next': { zIndex: 1, right: '15px' },
				'& svg.slick-prev  ': arrowsCss,
				'& svg.slick-next  ': arrowsCss,

				p: 0,
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

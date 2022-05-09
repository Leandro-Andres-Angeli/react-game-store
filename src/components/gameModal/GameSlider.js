import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box } from '@mui/material';
const GameSlider = ({ gameData }) => {
	console.log(gameData);
	var settings = {
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 4,
		nextArrow: <KeyboardDoubleArrowRightIcon />,
		prevArrow: <KeyboardDoubleArrowLeftIcon />,
	};

	return (
		<Box
			component={Slider}
			{...settings}
			sx={{
				width: '90%',

				margin: ' 0 auto',
				svg: {
					fill: 'white',
				},
				img: { height: '16vh', objectFit: 'cover' },
				'.slick-list': { marginTop: '1rem' },
			}}
		>
			<img alt=" " src={gameData.background_image}></img>
			<img alt=" " src={gameData.background_image_additional}></img>
			<img alt=" " src={gameData.background_image}></img>
			<img alt=" " src={gameData.background_image_additional}></img>
			<img alt=" " src={gameData.background_image}></img>
			<img alt=" " src={gameData.background_image_additional}></img>
		</Box>
	);
};

export default GameSlider;

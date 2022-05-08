import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';
const GameSlider = () => {
	var settings = {
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		// nextArrow: <KeyboardDoubleArrowRightIcon />,
		// prevArrow: <KeyboardDoubleArrowLeftIcon />,
	};

	return (
		<Box component={Slider} {...settings}>
			<div>
				<h3>1</h3>
			</div>
			<div>
				<h3>2</h3>
			</div>
			<div>
				<h3>3</h3>
			</div>
			<div>
				<h3>4</h3>
			</div>
			<div>
				<h3>5</h3>
			</div>
			<div>
				<h3>6</h3>
			</div>
			<div>
				<h3>7</h3>
			</div>
			<div>
				<h3>8</h3>
			</div>
		</Box>
	);
};

export default GameSlider;

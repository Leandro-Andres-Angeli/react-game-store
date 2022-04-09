import { Box, Container } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@mui/system';
export default function SliderComponent() {
	const theme = useTheme();
	console.log(theme.palette.secondary.main);
	var settings = {
		dots: true,
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<Container maxWidth="lg">
			<Box
				component={Slider}
				{...settings}
				sx={{ '& button::before': { color: [theme.palette.secondary.main] } }}
			>
				<div component="div ">
					<h3>1</h3>
				</div>
				<div component="div ">
					<h3>2</h3>
				</div>
				<div component="div ">
					<h3>3</h3>
				</div>
				<div component="div ">
					<h3>4</h3>
				</div>
				<div component="div ">
					<h3>5</h3>
				</div>
				<div component="div ">
					<h3>6</h3>
				</div>
			</Box>
		</Container>
	);
}

import { Box, Button, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useEffect } from 'react';
import { useFetch } from '../customHooks/useFetch';

const SliderItem = ({ gameId, title }) => {
	const KEY = process.env.REACT_APP_API_KEY;
	const URI = process.env.REACT_APP_API_BASE_URL;
	const endPointToFetch = `${URI}/games/${gameId}?key=${KEY}`;

	const [data, setData, isLoaded] = useFetch(endPointToFetch, []);
	const { background_image, name } = data;
	// console.log(data);
	// console.log(background_image);
	// console.log(name);
	// console.log(isLoaded);
	const theme = useTheme();
	useEffect(() => {
		console.log('render');
	});

	return (
		<>
			{isLoaded ? (
				<>
					<Box
						component="div"
						sx={{
							backgroundImage: `linear-gradient(to right bottom,#151515a6,#3b3b3c87), url(${background_image})`,
							height: `${theme.slider_height}`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							position: 'relative',
						}}
					>
						<Container>
							<Box
								sx={{
									textTransform: 'capitalize',
									fontStyle: 'italic',
									display: 'inline-block',
									padding: '.3rem .5rem',
									transform: 'skewX(-30deg)',
									backgroundColor: `${theme.palette.secondary.main}`,
								}}
							>
								<Typography
									variant="h3"
									sx={{
										fontSize: '1.5rem',
										transform: 'skewX(30deg)',
										fontWeight: 'bolder',
									}}
								>
									{title}
								</Typography>
							</Box>{' '}
							<Typography
								variant="h2"
								sx={{
									fontSize: '1.5rem',
									color: 'white',
									fontWeight: 'bolder',
								}}
							>
								{name}{' '}
							</Typography>
							<Button>Shop now</Button>
						</Container>
					</Box>
				</>
			) : (
				<Box component="div">Loading...</Box>
			)}
		</>
	);
};

export default SliderItem;

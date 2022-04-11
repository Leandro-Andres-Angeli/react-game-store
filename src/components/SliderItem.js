import {
	Box,
	Button,
	CircularProgress,
	Container,
	Typography,
} from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useEffect } from 'react';
import { useFetch } from '../customHooks/useFetch';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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
	const { grey } = theme.palette;

	useEffect(() => {
		console.log('render');
	});

	return (
		<>
			{isLoaded && data.background_image ? (
				<>
					<Box
						component="div"
						sx={{
							backgroundImage: `linear-gradient(to right bottom,#151515a6,#3b3b3c87), url(${background_image})`,
							height: `${theme.slider_height}`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							position: 'relative',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Container sx={{ mx: theme.spacing(5) }}>
							<Box
								sx={{
									textTransform: 'capitalize',
									fontStyle: 'italic',
									display: 'inline-block',
									padding: '.3rem 2rem',
									transform: 'skewX(-30deg)',
									backgroundColor: `${theme.palette.secondary.main}`,
									boxShadow: 10,
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
									mt: theme.spacing(3),
									color: 'white',
									fontWeight: 'bolder',
									letterSpacing: theme.spacing(2),
								}}
							>
								{name}{' '}
							</Typography>
							<Button
								sx={{
									bgcolor: [grey[500]],
									'&:hover': { bgcolor: [grey[50]] },
									my: theme.spacing(5),
									boxShadow: 10,
								}}
								endIcon={<AddShoppingCartIcon sx={{ color: 'black' }} />}
							>
								Shop now
							</Button>
						</Container>
					</Box>
				</>
			) : (
				<Box
					component="div"
					sx={{
						height: `${theme.slider_height}`,
						bgcolor: [theme.palette.primary.main],
						color: 'white',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Typography sx={{ mr: 3 }}>Loading...</Typography>{' '}
					<CircularProgress color="secondary" />
				</Box>
			)}
		</>
	);
};

export default SliderItem;

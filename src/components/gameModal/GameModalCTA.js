import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import {
	TextFieldBox,
	Button,
	CardActions,
	IconButton,
	TextField,
	Grid,
	Box,
	Typography,
	Stack,
	Divider,
} from '@mui/material';
import { useTheme } from '@mui/styles';

const GameModalCTA = () => {
	const [add, setAdd] = useState(true);
	const toFavourite = () => {
		setAdd(!add);
	};
	const theme = useTheme();
	return (
		<CardActions sx={{ alignItems: 'flex-end', marginBottom: 7 }}>
			<Stack
				direction="row"
				sx={{ width: '100%' }}
				justifyContent="space-around"
				divider={
					<Divider
						orientation="vertical"
						flexItem
						sx={{ background: '#f9f9f94f' }}
					/>
				}
				spacing={2}
			>
				<Box sx={{ position: 'relative', flexBasis: '20%' }}>
					<TextField
						sx={{
							button: {
								borderRadius: 0,
								minWidth: { md: '1em', sm: 'auto' },
								height: { md: '1em', sm: 'auto' },
								padding: 0,
							},

							'& label.Mui-focused': {
								color: 'white',
							},
							'& .MuiInput-underline:after': {
								borderBottomColor: 'white',
							},
							'& .MuiOutlinedInput-root': {
								'& fieldset': {
									borderColor: 'white',
								},

								'&.Mui-focused fieldset': {
									borderColor: 'white',
								},
							},
						}}
						aria-label="quantity-purchase"
						inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
					/>
					<Box
						component={'button'}
						sx={{ border: '1px solid white', position: 'absolute', right: 0 }}
					>
						<ArrowDropUpIcon></ArrowDropUpIcon>
					</Box>
					<Box
						component={'button'}
						sx={{
							border: '1px solid white',
							position: 'absolute',
							right: 0,
							bottom: 0,
						}}
					>
						<ArrowDropDownIcon></ArrowDropDownIcon>
					</Box>
				</Box>
				<Button type="submit" variant="outlined" color="secondary" size="large">
					{/* <Typography
							paragraph
							sx={{
								display: { xs: 'none', sm: 'none', md: 'block' },
							}}
						> */}
					add to cart
					{/* </Typography> */}
					<AddIcon
					// sx={{
					// 	display: { sm: 'block', md: 'none' },
					// 	width: 50,
					// 	height: 50,
					// }}
					/>
				</Button>
				<IconButton
					aria-label="add to favorites"
					onClick={toFavourite}
					sx={{
						// p: { sm: 2, md: 'auto' },
						// border: '.5px solid  ',
						// borderRadius: 1,
						borderColor: !add ? [theme.palette.secondary.main] : 'white',
						svg: {
							color: !add ? [theme.palette.secondary.main] : 'white',
						},
					}}
				>
					<FavoriteIcon />
				</IconButton>
			</Stack>
			{/* <Grid
				container
				spacing={{ md: 2, sm: 1 }}
				sx={{ alignItems: 'end' }}
				justifyContent="space-around"
				component="form"
			>
				<Grid item xs={2} sx={{ position: 'relative' }}>
					<TextField
						sx={{
							button: {
								borderRadius: 0,
								minWidth: { md: '1em', sm: 'auto' },
								height: { md: '1em', sm: 'auto' },
								padding: 0,
							},

							'& label.Mui-focused': {
								color: 'white',
							},
							'& .MuiInput-underline:after': {
								borderBottomColor: 'white',
							},
							'& .MuiOutlinedInput-root': {
								'& fieldset': {
									borderColor: 'white',
								},

								'&.Mui-focused fieldset': {
									borderColor: 'white',
								},
							},
						}}
						aria-label="quantity-purchase"
						inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
					/>
					<Box
						component={'button'}
						sx={{ border: '1px solid white', position: 'absolute', right: 0 }}
					>
						<ArrowDropUpIcon></ArrowDropUpIcon>
					</Box>
					<Box
						component={'button'}
						sx={{
							border: '1px solid white',
							position: 'absolute',
							right: 0,
							bottom: 0,
						}}
					>
						<ArrowDropDownIcon></ArrowDropDownIcon>
					</Box>
				</Grid>
				<Grid item xs={{ sm: 2, xs: 2, md: 6 }} sx={{ display: 'flex' }}>
					<Button
						type="submit"
						variant="contained"
						color="secondary"
						size="small"
						sx={{ flex: 3, color: 'white' }}
					>
						<Typography
							paragraph
							sx={{
								display: { xs: 'none', sm: 'none', md: 'block' },
							}}
						>
							add to cart
						</Typography>
						<AddIcon
							sx={{
								display: { sm: 'block', md: 'none' },
								width: 50,
								height: 50,
							}}
						/>
					</Button>
				</Grid>
				<Grid item xs={'auto'}>
					<IconButton
						aria-label="add to favorites"
						// onClick={toFavourite}

						sx={{
							p: { sm: 2, md: 'auto' },
							border: '.5px solid  ',
							borderRadius: 1,
							borderColor: !add ? [theme.palette.secondary.main] : 'white',
							svg: {
								color: !add ? [theme.palette.secondary.main] : 'white',
							},
						}}
					>
						<FavoriteIcon />
					</IconButton>
				</Grid>
			</Grid> */}
		</CardActions>
	);
};

export default GameModalCTA;

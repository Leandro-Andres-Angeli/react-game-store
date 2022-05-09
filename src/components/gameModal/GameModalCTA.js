import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
	TextFieldBox,
	Button,
	CardActions,
	IconButton,
	TextField,
	Grid,
	Box,
} from '@mui/material';
import { useTheme } from '@mui/styles';

const GameModalCTA = () => {
	const [add, setAdd] = useState(true);
	const theme = useTheme();
	return (
		<CardActions>
			<Grid container spacing={2} sx={{ alignItems: 'center' }}>
				<Grid item xs={4} sx={{ position: 'relative' }}>
					<TextField
						sx={{
							button: {
								borderRadius: 0,
								minWidth: '1em',
								height: '1em',
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
				<Grid item xs={6} sx={{ display: 'flex' }}>
					<Button
						variant="contained"
						color="secondary"
						size="small"
						sx={{ flex: 3, px: 3, py: 2, color: 'white' }}
					>
						add to cart
					</Button>
				</Grid>
				<Grid item xs={2}>
					<IconButton
						aria-label="add to favorites"
						// onClick={toFavourite}

						sx={{
							p: 1.4,
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
			</Grid>
		</CardActions>
	);
};

export default GameModalCTA;

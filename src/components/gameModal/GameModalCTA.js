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
		<CardActions
			sx={{
				alignItems: { sx: 'start', md: 'end' },
				marginBottom: { md: 7, sx: 'auto', sm: 'auto' },
			}}
		>
			<Stack
				direction="row"
				sx={{ width: '100%', px: { md: 5 } }}
				justifyContent="space-around"
				divider={
					<Divider
						orientation="vertical"
						flexItem
						sx={{
							background: '#f9f9f94f',
							display: { xs: 'none', sm: 'block', md: 'block' },
						}}
					/>
				}
				spacing={2}
			>
				<Box
					sx={{
						position: 'relative',
						flexBasis: { xs: '35%', sm: '20%', md: '20%' },
					}}
				>
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
				<Button
					type="submit"
					variant="outlined"
					color="secondary"
					size="large"
					sx={{
						mt: { xs: 3, sm: 3, md: 'auto' },
						mr: { sx: 'auto', sm: 'auto' },
					}}
				>
					<Box sx={{ display: { xs: 'none', md: 'block', sm: 'block' } }}>
						{' '}
						add to cart
					</Box>
					<AddIcon
						sx={{
							marginBottom: 0.5,
						}}
					/>
				</Button>
				<IconButton
					aria-label="add to favorites"
					onClick={toFavourite}
					sx={{
						borderColor: !add ? [theme.palette.secondary.main] : 'white',
						svg: {
							color: !add ? [theme.palette.secondary.main] : 'white',
						},
					}}
				>
					<FavoriteIcon />
				</IconButton>
			</Stack>
		</CardActions>
	);
};

export default GameModalCTA;

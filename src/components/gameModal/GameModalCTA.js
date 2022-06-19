import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import CheckoutLink from '../shared/CheckoutLink';
import {
	Button,
	CardActions,
	TextField,
	Box,
	Stack,
	Divider,
	InputLabel,
	Select,
	MenuItem,
} from '@mui/material';
import { useTheme } from '@mui/styles';
import AddToFavoriteButton from '../shared/AddToFavoriteButton';
import SnackbarComponent from '../../snackbar/SnackbarComponent';
import FavoriteSnackAction from '../../snackbar/FavoriteSnackAction';
import { AppContext } from '../../context/AppContext';
import { ACTIONS } from '../reducers/actions';
import CheckoutButton from '../../snackbar/CheckoutButton';

const GameModalCTA = ({
	gamePlatforms,
	game,
	price,
	setFailAddedtoCart,
	setToggleSnackbarCart,
	add,
	setAdd,
	setCloseSnackbar,
}) => {
	const context = useContext(AppContext);

	let qtyRef = useRef({ current: 1 });
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(context.cart));
	}, [context.cart]);

	const theme = useTheme();
	const handleSubmit = (e) => {
		e.preventDefault();

		let [idPlatform, namePlatform] =
			e.target.platformsSelection.value.split(',');
		idPlatform = parseInt(idPlatform);
		const payload = {
			id: game.id,
			name: game.name,
			price: price,
			quantity: parseInt(qtyRef.current.children[0].childNodes[0].value),
			platform: { id: idPlatform, name: namePlatform },
		};
		console.log(idPlatform);
		if (idPlatform !== 0) {
			context.dispatchCart({ type: ACTIONS.ADD, payload: payload });
			setFailAddedtoCart(true);
		}

		setToggleSnackbarCart(true);
		console.log(qtyRef.current.children[0].childNodes[0].value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<CardActions
					sx={{
						flexDirection: 'column',
						rowGap: 3,
						alignItems: { sx: 'start', md: 'end' },
						marginBottom: { md: 7, sx: 'auto', sm: 'auto' },
					}}
				>
					<Box
						sx={{
							alignSelf: ' stretch',
							display: 'inline-grid',
							'.MuiOutlinedInput-root': { border: '1px solid white' },
							svg: { color: 'white' },
						}}
					>
						<InputLabel
							id="select-label"
							sx={{
								color: theme.palette.secondary.main,
								fontWeight: 'bolder',
								textTransform: 'uppercase',
								mb: 2,
							}}
						>
							Select Platform
						</InputLabel>
						<Select
							labelId="select-platform-label"
							id="select-platform-select"
							label="Platform"
							name="platformsSelection"
							defaultValue={0}
							required
						>
							<MenuItem disabled value={0} sx={{ color: 'black' }}>
								---selec platform---
							</MenuItem>
							;
							{gamePlatforms.map((gamePlatform, i) => {
								return (
									<MenuItem
										sx={{ color: 'black' }}
										value={
											`${gamePlatform.platform.id}` +
											',' +
											`${gamePlatform.platform.name}`
										}
										key={i}
									>
										{gamePlatform.platform.name}
									</MenuItem>
								);
							})}
						</Select>
					</Box>
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
								name="quantityField"
								ref={qtyRef}
								defaultValue={1}
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
								sx={{
									border: '1px solid white',
									position: 'absolute',
									right: 0,
								}}
							>
								<ArrowDropUpIcon
									onClick={(e) => {
										e.preventDefault();

										qtyRef.current.children[0].childNodes[0].value++;
									}}
								></ArrowDropUpIcon>
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
								<ArrowDropDownIcon
									onClick={(e) => {
										e.preventDefault();

										qtyRef.current.children[0].childNodes[0].value > 1
											? qtyRef.current.children[0].childNodes[0].value--
											: (qtyRef.current.children[0].childNodes[0].value = 1);
									}}
								></ArrowDropDownIcon>
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
									display: { xs: 'block', md: 'none', sm: 'none' },
								}}
							/>
						</Button>

						<AddToFavoriteButton
							game={game}
							addState={{ add, setAdd }}
							setCloseSnackbar={setCloseSnackbar}
						></AddToFavoriteButton>
					</Stack>
				</CardActions>
			</form>
		</>
	);
};

export default GameModalCTA;

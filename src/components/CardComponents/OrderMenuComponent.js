import {
	Menu,
	List,
	Typography,
	ListItem,
	Button,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	FormControl,
	Divider,
} from '@mui/material';

import { useTheme } from '@mui/styles';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import FavoriteSnackAction from '../../snackbar/FavoriteSnackAction';
import SnackbarComponent from '../../snackbar/SnackbarComponent';
import { ACTIONS } from '../reducers/actions';

const OrderMenuComponent = ({ handleClose, open, anchorEl, game }) => {
	const context = useContext(AppContext);

	const [closeSnackbar, setCloseSnackbar] = useState(false);
	const { cart } = context;
	const theme = useTheme();
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const handleAddProduct = (e) => {
		e.preventDefault();

		const { name, price, id } = game;

		const payload = {
			name,
			price,
			id,
			platform: {
				id: labelValue.current.id,
				name: labelValue.current.platform,
			},
			quantity: 1,
		};

		context.dispatchCart({ type: ACTIONS.ADD, payload });
		setCloseSnackbar(true);
	};
	console.log(closeSnackbar);
	let labelValue = useRef(null);
	return (
		<>
			<Menu
				sx={{
					'.MuiPaper-root': {
						color: [theme.palette.primary.main],
						px: 3,
						py: 2,

						maxHeight: '70vh',
					},
					'.css-ato29r-MuiButtonBase-root-MuiRadio-root.Mui-checked': {
						color: [theme.palette.secondary.main],
					},
				}}
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				onClose={handleClose}
				// onClick={handleClose}
			>
				<List>
					<Typography
						sx={{
							color: [theme.palette.secondary.main],
							textTransform: 'uppercase',
							fontWeight: 'bolder',
						}}
					>
						order game
					</Typography>
					<Divider></Divider>
					<ListItem sx={{ fontWeight: 'bolder' }}>
						{' '}
						<Typography sx={{ textTransform: 'uppercase' }}>
							name :
						</Typography>{' '}
						{game.name}
					</ListItem>
					<ListItem sx={{ fontWeight: 'bolder' }}>
						{' '}
						<Typography sx={{ textTransform: 'uppercase' }}>
							price :
						</Typography>{' '}
						{game.price} $
					</ListItem>
				</List>
				<form>
					<FormControl
						sx={{
							'.MuiRadio-root': { color: [theme.palette.primary.main] },
						}}
					>
						<FormLabel
							id="demo-radio-buttons-group-label"
							sx={{
								textTransform: 'uppercase',
								fontWeight: 'bolder',
								display: 'block',
								color: [theme.palette.secondary.main],
							}}
							color="secondary"
						>
							select platform
						</FormLabel>
						<Divider></Divider>
						<RadioGroup
							aria-labelledby="demo-radio-buttons-group-label"
							name="radio-buttons-group"
							ref={labelValue}
							onChange={(e) => {
								labelValue.current = {
									id: e.target.value,
									platform: e.target.parentElement.nextSibling.textContent,
								};
							}}
						>
							{game.platforms.map((platform, i) => {
								return (
									<FormControlLabel
										key={i}
										value={platform.platform.id}
										control={<Radio />}
										label={platform.platform.name}
									/>
								);
							})}
						</RadioGroup>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							onClick={handleAddProduct}
						>
							order
						</Button>
					</FormControl>
				</form>
			</Menu>

			<SnackbarComponent
				msg={' added to cart'}
				add={false}
				positionY={'top'}
				closeSnackbar={closeSnackbar}
				setCloseSnackbar={setCloseSnackbar}
				snackAction={
					<FavoriteSnackAction
						setCloseSnackbar={setCloseSnackbar}
					></FavoriteSnackAction>
				}
			></SnackbarComponent>
		</>
	);
};

export default OrderMenuComponent;

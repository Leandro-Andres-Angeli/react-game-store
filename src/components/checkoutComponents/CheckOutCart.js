import {
	Card,
	CardContent,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
	Divider,
	Stack,
	Button,
	Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { useTheme } from '@mui/styles';
import { ACTIONS } from '../reducers/actions';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';
import SnackbarComponent from '../../snackbar/SnackbarComponent';
import CloseButtonSnackbar from '../../snackbar/CloseButtonSnackbar';
const CheckOutCart = () => {
	const context = useContext(AppContext);

	const theme = useTheme();

	const { cart } = context;
	const [totalItems, setTotalItems] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const [closeSnackbar, setCloseSnackbar] = useState(false);
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
		cart.items
			? setTotalPrice(
					cart.items.reduce((a, b) => a + b.price * b.quantity, 0) ||
						cart.items[0]?.price
			  )
			: setTotalPrice(0);

		setTotalItems(
			cart.items
				? cart.items.reduce((a, b) => a + b.quantity, 0) ||
						cart?.items[0]?.quantity
				: 0
		);
	}, [cart]);
	const emptyCart = () => {
		context.dispatchCart({ type: ACTIONS.RESET });
		setCloseSnackbar(true);
	};

	return (
		<>
			<Card
				sx={{
					bgcolor: theme.palette.bg_card_color,
					py: { xs: 0, sm: 0, md: 1 },
				}}
			>
				{cart.items.length > 0 ? (
					<CardContent>
						<Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
							cart
						</Typography>
						<List sx={{ width: '100%' }}>
							{cart.items
								? cart.items.map((game) => {
										return (
											<>
												<ListItem
													sx={{
														flexWrap: 'wrap',
														button: { minWidth: 3 },
														paddingBottom: 2,
													}}
												>
													<ListItemAvatar>
														<VideogameAssetIcon
															sx={{
																fontSize: { xs: 64, sm: 64, md: 32 },
																marginRight: 2,
															}}
														/>
													</ListItemAvatar>
													<ListItemText
														sx={{ marginLeft: { xs: 0, sm: 1, md: 1 } }}
														primary={game.name}
														secondary={game.platform.name}
													/>
													<Stack
														sx={{
															' .MuiTypography-root': {
																fontWeight: 'lighter',
																textTransform: 'uppercase',
															},
															button: { color: 'white' },
														}}
														direction="row"
														spacing={2}
													>
														{' '}
														<Box
															sx={{
																display: 'flex',
																gap: 2,
																flexWrap: 'wrap',
																alignItems: 'center',
															}}
														>
															<Typography>
																Amount :{' '}
																{(game.quantity * game.price).toFixed(2)} $
															</Typography>{' '}
															<Box
																sx={{
																	display: 'flex',
																	columnGap: 1,
																	alignItems: 'center',
																}}
															>
																<Button
																	variant="contained"
																	size="small"
																	color="primary"
																	onClick={() => {
																		context.dispatchCart({
																			type: ACTIONS.ADD,
																			payload: { ...game, quantity: 1 },
																		});
																	}}
																>
																	<AddIcon></AddIcon>
																</Button>
																<Typography>Units:{game.quantity} </Typography>{' '}
																<Button
																	variant="contained"
																	size="small"
																	color="primary"
																	onClick={() => {
																		context.dispatchCart({
																			type: ACTIONS.REMOVE,
																			payload: game,
																		});
																	}}
																>
																	<RemoveIcon />
																</Button>
															</Box>
														</Box>
													</Stack>
												</ListItem>
												<Divider
													sx={{ borderColor: 'rgba(253, 253, 253, 0.21)' }}
												></Divider>
											</>
										);
								  })
								: null}
							<Stack
								spacing={2}
								direction={'row'}
								sx={{
									'.MuiTypography-root': { fontWeight: 'bold' },
									justifyContent: { sm: 'start', md: 'end' },
									m: 2,
									alignItems: 'center',
									flexWrap: 'wrap',
								}}
							>
								<Typography sx={{ textTransform: 'uppercase' }}>
									{' '}
									total items :{totalItems ? totalItems : null}{' '}
								</Typography>
								<Typography
									sx={{
										textTransform: 'uppercase',
										py: { xs: 2, md: 4 },
									}}
								>
									{' '}
									total price :{totalPrice ? totalPrice.toFixed(2) : null}{' '}
								</Typography>
								<Button
									sx={{
										bgcolor: red[900],
										color: 'white',
										'&:hover': { bgcolor: red[700] },
									}}
									onClick={() => {
										emptyCart();
									}}
								>
									<DeleteForeverIcon></DeleteForeverIcon>
								</Button>
							</Stack>
						</List>
					</CardContent>
				) : (
					<CardContent
						sx={{
							minHeight: '50vh',
							display: ' flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Typography
							sx={{
								textTransform: 'uppercase',
							}}
						>
							No items in cart
						</Typography>
					</CardContent>
				)}
			</Card>

			<SnackbarComponent
				msg={'empty cart'}
				positionY={'bottom'}
				closeSnackbar={closeSnackbar}
				onClose={setCloseSnackbar}
				snackAction={<CloseButtonSnackbar {...{ setCloseSnackbar }} />}
			></SnackbarComponent>
		</>
	);
};

export default CheckOutCart;

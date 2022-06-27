import {
	Card,
	CardContent,
	List,
	Typography,
	Divider,
	Stack,
} from '@mui/material';

import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';

import { useTheme } from '@mui/styles';

import SnackbarComponent from '../../snackbar/SnackbarComponent';
import CheckOutListIem from '../shared/CheckOutListIem';
import ButtonAddListItem from './ButtonAddListItem';
import ButtonDeleteListItem from './ButtonDeleteListItem';
import ButtonEmptyCart from './ButtonEmptyCart';
import { calcTotalPrice, calcTotalQuantity } from '../../utils/calcTotalCart';

const CheckOutCart = () => {
	const context = useContext(AppContext);

	const theme = useTheme();

	const { cart } = context;
	const [totalItems, setTotalItems] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const [closeSnackbar, setCloseSnackbar] = useState(false);
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
		setTotalPrice(calcTotalPrice(cart));

		setTotalItems(calcTotalQuantity(cart));
	}, [cart]);

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
												<CheckOutListIem
													{...{ game }}
													buttonAdd={
														<ButtonAddListItem
															{...{ game }}
														></ButtonAddListItem>
													}
													buttonRemove={
														<ButtonDeleteListItem
															{...{ game }}
														></ButtonDeleteListItem>
													}
												></CheckOutListIem>

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
									total price :$ {totalPrice
										? totalPrice.toFixed(2)
										: null}{' '}
								</Typography>
								<ButtonEmptyCart {...{ setCloseSnackbar }}></ButtonEmptyCart>
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
				{...{ closeSnackbar }}
				setCloseSnackbar={() => {
					setCloseSnackbar(false);
				}}
			></SnackbarComponent>
		</>
	);
};

export default CheckOutCart;

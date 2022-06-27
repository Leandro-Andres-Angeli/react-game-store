import React, { useContext, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {
	Card,
	CardContent,
	Divider,
	List,
	ListItem,
	ListItemText,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import { AppContext } from '../context/AppContext';
import CheckOutListIem from './shared/CheckOutListIem';
import { calcTotalPrice, calcTotalQuantity } from '../utils/calcTotalCart';

const ConfirmOrderComponent = () => {
	const { cart, cardData } = useContext(AppContext);
	const [totalItems, setTotalItems] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const theme = useTheme();
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
		setTotalPrice(calcTotalPrice(cart));

		setTotalItems(calcTotalQuantity(cart));
	}, [cart]);
	console.log(cardData);
	console.log(cardData.cardInformation);

	return (
		<Container maxWidth="lg">
			<Typography sx={{ textTransform: 'uppercase' }} variant="h3">
				Order details
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Card sx={{ bgcolor: [theme.palette.bg_card_color] }}>
						<CardContent>
							<Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
								cart
							</Typography>
							<List sx={{ width: '100%' }}>
								{cart.items
									? cart.items.map((game) => {
											return (
												<>
													<CheckOutListIem {...{ game }}></CheckOutListIem>

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
										total price : $ {totalPrice
											? totalPrice.toFixed(2)
											: null}{' '}
									</Typography>
									{/* <ButtonEmptyCart {...{ setCloseSnackbar }}></ButtonEmptyCart> */}
								</Stack>
							</List>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={6}>
					<Card sx={{ bgcolor: [theme.palette.bg_card_color] }}>
						<CardContent sx={{ textTransform: 'uppercase' }}>
							<Typography variant="h4">card information</Typography>
							<List sx={{ width: '100%' }}>
								{cardData.cardInformation ? (
									<>
										<ListItem>
											<ListItemText>
												name : {cardData.cardInformation.name}
											</ListItemText>
											<Divider
												sx={{ borderColor: 'rgba(253, 253, 253, 0.21)' }}
											></Divider>
										</ListItem>
										<ListItem>
											<ListItemText>
												card number: {cardData.cardInformation.cardNumber}
											</ListItemText>
											<Divider
												sx={{ borderColor: 'rgba(253, 253, 253, 0.21)' }}
											></Divider>
										</ListItem>
										<ListItem>
											<ListItemText>
												expiration date :{' '}
												{cardData.cardInformation[`${'expirationDate(mm/yy)'}`]}
											</ListItemText>
											<Divider
												sx={{ borderColor: 'rgba(253, 253, 253, 0.21)' }}
											></Divider>
										</ListItem>
										<ListItem>
											<ListItemText>
												security Code : {'*'.repeat(3)}
											</ListItemText>
											<Divider
												sx={{ borderColor: 'rgba(253, 253, 253, 0.21)' }}
											></Divider>
										</ListItem>
									</>
								) : null}
							</List>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ConfirmOrderComponent;

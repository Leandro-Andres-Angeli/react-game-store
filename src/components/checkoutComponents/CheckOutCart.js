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
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { useTheme } from '@mui/styles';
import { ACTIONS } from '../reducers/actions';
const CheckOutCart = () => {
	const context = useContext(AppContext);

	const theme = useTheme();

	const { cart } = context;
	const [totalItems, setTotalItems] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
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

	return (
		<Card sx={{ bgcolor: theme.palette.bg_card_color }}>
			<CardContent>
				<Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
					cart
				</Typography>
				<List sx={{ width: '100%' }}>
					{cart.items
						? cart.items.map((game) => {
								return (
									<>
										<ListItem>
											<ListItemAvatar>
												<VideogameAssetIcon />
											</ListItemAvatar>
											<ListItemText
												primary={game.name}
												secondary={game.platform.name}
											/>
											<Stack
												sx={{
													' .MuiTypography-root': {
														fontWeight: 'bold',
														textTransform: 'uppercase',
													},
													button: { color: 'white' },
												}}
												direction="row"
												spacing={2}
											>
												{' '}
												<Typography>
													Amount : {(game.quantity * game.price).toFixed(2)} $
												</Typography>{' '}
												<Button
													variant="contained"
													size="small"
													color="secondary"
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
													color="secondary"
													onClick={() => {
														context.dispatchCart({
															type: ACTIONS.REMOVE,
															payload: game,
														});
													}}
												>
													<RemoveIcon />
												</Button>
											</Stack>
										</ListItem>
										<Divider
											sx={{ borderColor: 'rgba(253, 253, 253, 0.21)' }}
										></Divider>
									</>
								);
						  })
						: null}
					<ListItem
						sx={{
							'.MuiTypography-root': { fontWeight: 'bold' },
							justifyContent: 'end',
						}}
					>
						<Typography sx={{ textTransform: 'uppercase' }}>
							{' '}
							total items :{totalItems ? totalItems : null}{' '}
						</Typography>
						<Typography sx={{ textTransform: 'uppercase', marginLeft: '1rem' }}>
							{' '}
							total price :{totalPrice ? totalPrice.toFixed(2) : null}{' '}
						</Typography>
					</ListItem>
				</List>
			</CardContent>
		</Card>
	);
};

export default CheckOutCart;

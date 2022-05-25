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
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { useTheme } from '@mui/styles';
const CheckOutCart = () => {
	const context = useContext(AppContext);
	const theme = useTheme();
	const { cart } = context;
	console.log(cart);
	return (
		<Card sx={{ bgcolor: theme.palette.bg_card_color }}>
			<CardContent>
				<Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
					billing adress
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
													Amount : {game.quantity * game.price} $
												</Typography>{' '}
												<Button
													variant="contained"
													size="small"
													color="secondary"
												>
													<AddIcon></AddIcon>
												</Button>
												<Typography>Units:{game.quantity} </Typography>{' '}
												<Button
													variant="contained"
													size="small"
													color="secondary"
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
				</List>
			</CardContent>
		</Card>
	);
};

export default CheckOutCart;

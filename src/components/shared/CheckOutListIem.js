import {
	Box,
	Button,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
import { AppContext } from '../../context/AppContext';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { ACTIONS } from '../reducers/actions';

const CheckOutListIem = ({ game, buttonAdd, buttonRemove }) => {
	return (
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
						Amount : {(game.quantity * game.price).toFixed(2)} $
					</Typography>{' '}
					<Box
						sx={{
							display: 'flex',
							columnGap: 1,
							alignItems: 'center',
						}}
					>
						{buttonAdd && buttonAdd}
			
						<Typography>Units:{game.quantity} </Typography>{' '}
						{buttonRemove && buttonRemove}
			
					</Box>
				</Box>
			</Stack>
		</ListItem>
	);
};

export default CheckOutListIem;

import { Button, Divider, Icon, ListItem, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import RemoveIcon from '@mui/icons-material/Remove';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { ACTIONS } from '../reducers/actions';

const FavoriteButtonNavbarItem = ({ item }) => {
	const context = useContext(AppContext);
	return (
		<>
			<ListItem>
				<Icon>
					<VideogameAssetIcon />
				</Icon>{' '}
				<Typography
					paragraph
					sx={{
						mb: 0,
						ml: 2,
						fontWeight: 'bolder',
						width: 'calc(100% - 9rem)',
						textOverflow: ' ellipsis',
						overflow: ' hidden',
						whiteSpace: 'nowrap',
					}}
				>
					{item.name}
				</Typography>
				<Button
					variant="outlined"
					size="small"
					sx={{
						marginLeft: 'auto',
						bgcolor: red[900],
						color: 'white',
						border: 'none',
						'&:hover': {
							bgcolor: red[400],
							color: 'white',
							border: 'none',
						},
					}}
				>
					<RemoveIcon
						onClick={() => {
							context.dispatchFavorite({
								type: ACTIONS.REMOVE,
								payload: { id: item.id },
							});
						}}
					/>
				</Button>
			</ListItem>
			<Divider />
		</>
	);
};

export default FavoriteButtonNavbarItem;

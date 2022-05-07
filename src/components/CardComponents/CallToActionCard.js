import { CardActions, IconButton, Menu } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import React, { useState } from 'react';
import { grey } from '@mui/material/colors';
import OrderMenuComponent from './OrderMenuComponent';
const CallToActionCard = ({ dispatchCart, game }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<CardActions
				disableSpacing
				color="secondary"
				sx={{
					button: {
						flexGrow: 1,

						borderRadius: 0,
						'&:not(:last-child)': { borderRight: '.5px solid #ffffff1f' },
					},
					' svg': { color: grey[50] },
					borderTop: '.5px solid #ffffff1f',
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
				<IconButton
					aria-label="add to cart"
					onClick={handleClick}
					size="small"
					sx={{ ml: 2 }}
					aria-controls={open ? 'account-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
				>
					<CardGiftcardIcon />
				</IconButton>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton aria-label="open modal">
					<VisibilityIcon />
				</IconButton>
			</CardActions>

			<OrderMenuComponent
				game={game}
				open={open}
				handleClose={handleClose}
				anchorEl={anchorEl}
				dispatchCart={dispatchCart}
			></OrderMenuComponent>
		</>
	);
};

export default CallToActionCard;

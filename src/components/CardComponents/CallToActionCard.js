import { CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react';
import { grey } from '@mui/material/colors';
const CallToActionCard = () => {
	return (
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
			<IconButton aria-label="add to cart">
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
	);
};

export default CallToActionCard;

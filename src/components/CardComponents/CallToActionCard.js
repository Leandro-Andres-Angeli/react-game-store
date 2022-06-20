import { CardActions, IconButton } from '@mui/material';

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import React, { useState } from 'react';
import { grey } from '@mui/material/colors';
import OrderMenuComponent from './OrderMenuComponent';

import SnackbarComponent from '../../snackbar/SnackbarComponent';
import AddToFavoriteButton from '../shared/AddToFavoriteButton';
import CloseButtonSnackbar from '../../snackbar/CloseButtonSnackbar';

const CallToActionCard = ({ game, modalState }) => {
	const [, setModal] = modalState;
	const [add, setAdd] = useState(true);
	const [anchorEl, setAnchorEl] = useState(null);
	const [closeSnackbar, setCloseSnackbar] = useState(false);

	const open = Boolean(anchorEl);
	const handleModal = () => {
		setModal(true);
	};
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

				<AddToFavoriteButton
					game={game}
					addState={{ add, setAdd }}
					setCloseSnackbar={setCloseSnackbar}
				></AddToFavoriteButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton aria-label="open modal" onClick={handleModal}>
					<VisibilityIcon />
				</IconButton>
			</CardActions>

			<OrderMenuComponent
				game={game}
				open={open}
				handleClose={handleClose}
				anchorEl={anchorEl}
			></OrderMenuComponent>
			<SnackbarComponent
				add={add}
				closeSnackbar={closeSnackbar}
				setCloseSnackbar={setCloseSnackbar}
				positionY={'top'}
				snackAction={
					<CloseButtonSnackbar
						setCloseSnackbar={setCloseSnackbar}
					></CloseButtonSnackbar>
				}
				msg={!add ? ' added to favorites' : 'removed from favorites'}
			></SnackbarComponent>
		</>
	);
};

export default CallToActionCard;

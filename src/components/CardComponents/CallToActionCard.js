import { CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import React, { useContext, useState } from 'react';
import { grey } from '@mui/material/colors';
import OrderMenuComponent from './OrderMenuComponent';
import { useTheme } from '@mui/styles';
import { AppContext } from '../../context/AppContext';
import { ACTIONS } from '../reducers/actions';
import SnackbarComponent from '../SnackbarComponent';

const CallToActionCard = ({ game }) => {
	const theme = useTheme();
	const context = useContext(AppContext);
	const [add, setAdd] = useState(true);
	const [anchorEl, setAnchorEl] = useState(null);
	const [closeSnackbar, setCloseSnackbar] = useState(false);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const toFavourite = () => {
		add
			? context.dispatchFavorite({
					type: ACTIONS.ADD,
					payload: { id: game.id, name: game.name },
			  })
			: context.dispatchFavorite({
					type: ACTIONS.REMOVE,
					payload: { id: game.id, name: game.name },
			  });
		add && setCloseSnackbar(true);
		setAdd(!add);
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
				<IconButton
					aria-label="add to favorites"
					onClick={toFavourite}
					sx={{
						svg: { color: !add && [theme.palette.secondary.main] },
					}}
				>
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
			></OrderMenuComponent>
			<SnackbarComponent
				closeSnackbar={closeSnackbar}
				setCloseSnackbar={setCloseSnackbar}
			></SnackbarComponent>
		</>
	);
};

export default CallToActionCard;

import React, { useContext, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/styles';
import { AppContext } from '../../context/AppContext';
import { ACTIONS } from '../reducers/actions';
const AddToFavoriteButton = ({ game, setCloseSnackbar, addState }) => {
	const theme = useTheme();
	const context = useContext(AppContext);
	const { add, setAdd } = addState;

	const toFavorite = () => {
		console.log(add);
		add
			? context.dispatchFavorite({
					type: ACTIONS.ADD,
					payload: { id: game.id, name: game.name },
			  })
			: context.dispatchFavorite({
					type: ACTIONS.REMOVE,
					payload: { id: game.id, name: game.name },
			  });

		setCloseSnackbar(true);
		setAdd(!add);
	};
	useEffect(() => {
		localStorage.setItem('favorite', JSON.stringify(context.favorite));
	}, [context.favorite]);
	return (
		<IconButton
			aria-label="add to favorites"
			onClick={toFavorite}
			sx={{
				svg: { color: !add ? [theme.palette.secondary.main] : 'white' },
			}}
		>
			<FavoriteIcon />
		</IconButton>
	);
};

export default AddToFavoriteButton;

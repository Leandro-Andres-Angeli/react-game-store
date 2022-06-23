import React, { useContext, useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/styles';
import { AppContext } from '../../context/AppContext';
import { ACTIONS } from '../reducers/actions';
import { checkIfExistsInFavoriteFunc } from '../../utils/checkIfExistsInFavorites';
const AddToFavoriteButton = ({ game, setCloseSnackbar, addState }) => {
	const checkInFavs = checkIfExistsInFavoriteFunc;
	const theme = useTheme();
	const context = useContext(AppContext);
	const { add, setAdd } = addState;
	const [existsInFav, setExistsInFav] = useState();

	const toFavorite = () => {
		existsInFav === false
			? context.dispatchFavorite({
					type: ACTIONS.ADD,
					payload: { id: game.id, name: game.name },
			  })
			: context.dispatchFavorite({
					type: ACTIONS.REMOVE,
					payload: { id: game.id, name: game.name },
			  });

		setCloseSnackbar(true);

		setAdd(existsInFav);
	};

	useEffect(() => {
		localStorage.setItem('favorite', JSON.stringify(context.favorite));

		setExistsInFav(checkInFavs(context.favorite, game.id));
	}, [checkInFavs, context.favorite, game.id]);
	return (
		<IconButton
			aria-label="add to favorites"
			onClick={() => {
				toFavorite();
			}}
			sx={{
				svg: { color: existsInFav ? [theme.palette.secondary.main] : 'white' },
			}}
		>
			<FavoriteIcon />
		</IconButton>
	);
};

export default AddToFavoriteButton;

import React from 'react';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
const FavoriteSnackAction = ({ setCloseSnackbar }) => {
	return (
		<IconButton
			size="small"
			aria-label="close"
			color="inherit"
			
			onClick={() => {
				setCloseSnackbar(false);
			}}
		>
			<Close fontSize="small" />
		</IconButton>
	);
};

// const FavoriteSnackAction = ({ setCloseSnackbar }) => {
// 	return (
// 		<IconButton
// 			size="small"
// 			aria-label="close"
// 			color="inherit"
// 			onClick={() => {
// 				setCloseSnackbar(false);
// 			}}
// 		>
// 			x
// 			<Close fontSize="small" />
// 		</IconButton>
// 	);
// };

export default FavoriteSnackAction;

import { Button } from '@mui/material';
import { red } from '@mui/material/colors';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { ACTIONS } from '../reducers/actions';

const ButtonEmptyCart = ({ setCloseSnackbar }) => {
	const context = useContext(AppContext);
	const emptyCart = () => {
		context.dispatchCart({ type: ACTIONS.RESET });
		setCloseSnackbar(true);
	};
	return (
		<Button
			sx={{
				bgcolor: red[900],
				color: 'white',
				'&:hover': { bgcolor: red[700] },
			}}
			onClick={() => {
				emptyCart();
			}}
		>
			<DeleteForeverIcon></DeleteForeverIcon>
		</Button>
	);
};

export default ButtonEmptyCart;

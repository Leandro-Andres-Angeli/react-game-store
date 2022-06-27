import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { ACTIONS } from '../reducers/actions';
import RemoveIcon from '@mui/icons-material/Remove';

const ButtonDeleteListItem = ({ game }) => {
	const context = useContext(AppContext);

	return (
		<Button
			variant="contained"
			size="small"
			color="primary"
			onClick={() => {
				context.dispatchCart({
					type: ACTIONS.REMOVE,
					payload: { ...game, quantity: 1 },
				});
			}}
		>
			<RemoveIcon />
		</Button>
	);
};

export default ButtonDeleteListItem;

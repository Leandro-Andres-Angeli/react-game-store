import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { ACTIONS } from '../reducers/actions';
import AddIcon from '@mui/icons-material/Add';

const ButtonAddListItem = ({ game }) => {
	const context = useContext(AppContext);
	return (
		<Button
			variant="contained"
			size="small"
			color="primary"
			onClick={() => {
				context.dispatchCart({
					type: ACTIONS.ADD,
					payload: { ...game, quantity: 1 },
				});
			}}
		>
			<AddIcon></AddIcon>
		</Button>
	);
};

export default ButtonAddListItem;

import { Snackbar } from '@mui/material';
import React from 'react';

const SnackbarComponent = ({
	closeSnackbar,
	setCloseSnackbar,
	add,
	snackAction,
	msg,
	reverseCol,
	positionY,
}) => {
	return (
		<Snackbar
			color="primary"
			anchorOrigin={{
				vertical: `${positionY}`,
				horizontal: 'center',
			}}
			open={closeSnackbar}
			onClose={setCloseSnackbar}
			autoHideDuration={3000
				// msg.includes('favorite') ? 2000 : msg.includes('empty') ? 2000 : 4000
			}
			message={msg}
			sx={{
				zIndex: 1400,
				textTransform: 'uppercase',
				'.MuiPaper-root': {
					color: 'white',
					backgroundColor: '#000000a6',
					flexDirection: reverseCol ? 'column-reverse' : 'inherit',
				},
			}}
			action={snackAction}
		/>
	);
};

export default SnackbarComponent;

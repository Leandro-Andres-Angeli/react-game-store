import { Snackbar } from '@mui/material';
import React from 'react';

const SnackbarComponent = ({
	closeSnackbar,
	setCloseSnackbar,
	add,
	snackAction,
	msg,
	positionY,
}) => {
	return (
		<Snackbar
			color="primary"
			anchorOrigin={{ vertical: `${positionY}`, horizontal: 'center' }}
			open={closeSnackbar}
			onClose={setCloseSnackbar}
			autoHideDuration={msg.includes('favorite') ? 2000 : 6000}
			message={msg}
			sx={{
				zIndex: 1400,
				textTransform: 'uppercase',
				'.MuiPaper-root': { color: 'white', backgroundColor: '#000000a6' },
			}}
			action={snackAction}
		/>
	);
};

export default SnackbarComponent;

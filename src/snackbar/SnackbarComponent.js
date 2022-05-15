import { Snackbar } from '@mui/material';
import React from 'react';
import FavoriteSnackAction from './FavoriteSnackAction';
const test = (
	<>
		<button>close</button>
	</>
);

const SnackbarComponent = ({
	closeSnackbar,
	setCloseSnackbar,
	add,
	snackAction,
	msg,
}) => {
	return (
		<Snackbar
			color="primary"
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			open={closeSnackbar}
			onClose={setCloseSnackbar}
			autoHideDuration={2000}
			message={!add ? `added to  ${msg}` : `removed from ${msg}`}
			sx={{
				textTransform: 'uppercase',
				'.MuiPaper-root': { color: 'white', backgroundColor: '#000000a6' },
			}}
			action={snackAction}
		/>
	);
};

export default SnackbarComponent;

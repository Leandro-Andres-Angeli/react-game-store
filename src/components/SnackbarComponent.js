import React from 'react';
import { Close } from '@mui/icons-material';
import { IconButton, Snackbar } from '@mui/material';
const SnackbarComponent = ({ closeSnackbar, setCloseSnackbar, add }) => {
	console.log(add);
	return (
		<Snackbar
			color="primary"
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			open={closeSnackbar}
			onClose={setCloseSnackbar}
			autoHideDuration={4000}
			message={!add ? 'added to favorite' : 'removed from favorite'}
			sx={{
				textTransform: 'uppercase',
				'.MuiPaper-root': { color: 'white', backgroundColor: '#000000a6' },
			}}
			action={
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
			}
		/>
	);
};

export default SnackbarComponent;

import React from 'react';
import { Close } from '@mui/icons-material';
import { IconButton, Snackbar } from '@mui/material';
const SnackbarComponent = ({ closeSnackbar, setCloseSnackbar }) => {
	return (
		<Snackbar
			color="primary"
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			open={closeSnackbar}
			onClose={setCloseSnackbar}
			autoHideDuration={4000}
			message="added to cart"
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

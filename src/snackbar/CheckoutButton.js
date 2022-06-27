import { Button } from '@mui/material';
import React from 'react';

const CheckoutButton = () => {
	return (
		<Button
			variant="outlined"
			color="secondary"
			size="small"
			sx={{ textDecoration: 'none' }}
		>
			go to checkout
		</Button>
	);
};

export default CheckoutButton;

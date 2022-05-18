import { Button, Stack } from '@mui/material';
import React from 'react';

const CheckoutButtons = ({ handleStep, activeStep, steps }) => {
	return (
		<Stack
			direction="row"
			spacing={2}
			justifyContent={'end'}
			sx={{ button: { color: 'white' } }}
		>
			{activeStep !== 0 && (
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						handleStep(activeStep > 0 ? -1 : 0);
					}}
				>
					prev
				</Button>
			)}
			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					handleStep(activeStep < steps.length ? +1 : 0);
				}}
			>
				{activeStep !== steps.length ? 'next' : 'confirm order'}
			</Button>
		</Stack>
	);
};

export default CheckoutButtons;

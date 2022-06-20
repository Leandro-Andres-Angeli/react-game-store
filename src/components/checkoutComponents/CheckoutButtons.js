import { Button, Stack } from '@mui/material';
import React from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
const CheckoutButtons = ({ handleStep, activeStep, steps }) => {
	return (
		<Stack
			direction="row"
			spacing={2}
			justifyContent={'end'}
			sx={{
				button: { color: 'white' },

				inset: ' auto 2rem 2rem',
			}}
		>
			{activeStep !== 0 && (
				<Button
					variant="contained"
					color="secondary"
					startIcon={<ArrowLeftIcon />}
					onClick={() => {
						handleStep(activeStep > 0 ? -1 : 0);
					}}
				>
					prev
				</Button>
			)}
			<Button
				variant="contained"
				color="secondary"
				onClick={() => {
					handleStep(activeStep < steps.length ? +1 : 0);
				}}
				endIcon={
					activeStep !== steps.length ? (
						<ArrowRightIcon />
					) : (
						<ThumbUpOffAltIcon />
					)
				}
			>
				{activeStep !== steps.length ? 'next' : 'confirm order'}
			</Button>
		</Stack>
	);
};

export default CheckoutButtons;

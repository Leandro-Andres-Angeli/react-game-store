import { Button, Stack } from '@mui/material';
import React, { useContext } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { AppContext } from '../../context/AppContext';
const CheckoutButtons = ({ handleStep, activeStep, steps }) => {
	const context = useContext(AppContext);
	return (
		<Stack
			direction="row"
			spacing={2}
			justifyContent={'end'}
			sx={{
				button: { color: 'white' },
				p: 3,
			}}
		>
			{activeStep !== 0 && (
				<Button
					variant="contained"
					color="secondary"
					size="small"
					startIcon={<ArrowLeftIcon />}
					onClick={() => {
						handleStep(activeStep > 0 ? -1 : 0);
					}}
				>
					prev
				</Button>
			)}
			{context.cart.items.length > 0 ? (
				<Button
					variant="contained"
					size="small"
					color="secondary"
					disabled={context.cardData.length === 0 && activeStep === 1}
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
					{activeStep !== steps.length ? 'next' : 'confirm purchase'}
				</Button>
			) : null}
		</Stack>
	);
};

export default CheckoutButtons;

import React, { useState } from 'react';

import Container from '@mui/material/Container';

import { Box, Button, CssBaseline, Stack, StepButton } from '@mui/material';
// import { ThemeProvider } from '@mui/styles'; => wrong import
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/styles';
import { grey, red } from '@mui/material/colors';
// import { createTheme } from '@mui/system';=>wrong import
import { createTheme } from '@mui/material/styles';
import CheckoutStepper from '../components/checkoutComponents/CheckoutStepper';
import CheckoutButtons from '../components/checkoutComponents/CheckoutButtons';
const steps = ['checkout', 'order details', 'confirm order'];
const Checkout = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [completed, setCompleted] = React.useState({});
	const theme = useTheme();
	const handleStep = (num) => {
		// setActiveStep(activeStep + 1);
		setActiveStep((prev) => num + prev);
	};
	console.log(theme);
	const stepperStyles = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#f9aa01',
				light: '#f9aa01',
				dark: '#f9aa01',
			},
			secondary: {
				main: grey[500],
				light: grey[500],
				dark: grey[500],
			},
		},
	});

	return (
		<ThemeProvider theme={stepperStyles}>
			<Container maxWidth="lg">
				<CheckoutStepper
					completed={completed}
					activeStep={activeStep}
					steps={steps}
				></CheckoutStepper>
				<Box>
					{activeStep !== steps.length ? (
						<Container maxWidth="lg">current step {activeStep}</Container>
					) : (
						<Container maxWidth="lg">current step {activeStep} final</Container>
					)}
				</Box>
				<CheckoutButtons {...{ handleStep, activeStep, steps }} ></CheckoutButtons>
			</Container>
		</ThemeProvider>
	);
};

export default Checkout;

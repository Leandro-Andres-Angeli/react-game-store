import React, { useState, useReducer } from 'react';

import Container from '@mui/material/Container';

import { Box } from '@mui/material';
// import { ThemeProvider } from '@mui/styles'; => wrong import
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/styles';
import { grey } from '@mui/material/colors';
// import { createTheme } from '@mui/system';=>wrong import
import { createTheme } from '@mui/material/styles';
import CheckoutStepper from '../components/checkoutComponents/CheckoutStepper';
import CheckoutButtons from '../components/checkoutComponents/CheckoutButtons';

import CheckOutCart from '../components/checkoutComponents/CheckOutCart';
import CartContext from '../context/CartContext';
import { orderReducer } from '../components/reducers/orderReducer';

import CreditCard from '../components/CreditCard';
const steps = ['checkout', 'payment method', 'confirm order'];
const Checkout = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [completed, setCompleted] = useState({});
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
	const [order, dispatchOrder] = useReducer(orderReducer, {});
	return (
		<CartContext.Provider value={{ order, dispatchOrder }}>
			<Container maxWidth="lg">
				<ThemeProvider theme={stepperStyles}>
					<CheckoutStepper
						completed={completed}
						activeStep={activeStep}
						steps={steps}
					></CheckoutStepper>
				</ThemeProvider>
				<Box>
					{activeStep === 0 ? (
						<Container maxWidth="lg">
							current step {activeStep}
							<CheckOutCart></CheckOutCart>
						</Container>
					) : activeStep === 1 ? (
						<CreditCard></CreditCard>
					) : (
						<Container maxWidth="lg">current step {activeStep} final</Container>
					)}
				</Box>
				<CheckoutButtons
					{...{ handleStep, activeStep, steps }}
				></CheckoutButtons>
			</Container>
		</CartContext.Provider>
	);
};

export default Checkout;

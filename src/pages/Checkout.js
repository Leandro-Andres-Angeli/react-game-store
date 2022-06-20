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

import PaymentComponent from '../components/paymentSection/PaymentComponent';
const steps = ['checkout', 'payment method', 'confirm order'];
const Checkout = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [completed, setCompleted] = useState({});

	const handleStep = (num) => {
		// setActiveStep(activeStep + 1);
		setActiveStep((prev) => num + prev);
	};

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
			bg_card_color: '#43177330',
		},
	});
	const [order, dispatchOrder] = useReducer(orderReducer, {});
	return (
		<CartContext.Provider value={{ order, dispatchOrder }}>
			<Container maxWidth="lg" sx={{ marginTop: 2 }}>
				<ThemeProvider theme={stepperStyles}>
					<CheckoutStepper
						completed={completed}
						activeStep={activeStep}
						steps={steps}
					></CheckoutStepper>

					<Box sx={{ marginTop: 2 }}>
						{activeStep === 0 ? (
							<Container maxWidth="lg">
								<CheckOutCart></CheckOutCart>
							</Container>
						) : activeStep === 1 ? (
							<PaymentComponent />
						) : (
							<Container maxWidth="lg">
								current step {activeStep} final
							</Container>
						)}
					</Box>
				</ThemeProvider>
				<CheckoutButtons
					{...{ handleStep, activeStep, steps }}
				></CheckoutButtons>
			</Container>
		</CartContext.Provider>
	);
};

export default Checkout;

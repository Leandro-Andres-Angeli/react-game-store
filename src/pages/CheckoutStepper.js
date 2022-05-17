import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Container from '@mui/material/Container';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Box, Button, CssBaseline, Stack, StepButton } from '@mui/material';
// import { ThemeProvider } from '@mui/styles'; => wrong import
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/styles';
import { grey, red } from '@mui/material/colors';
// import { createTheme } from '@mui/system';=>wrong import
import { createTheme } from '@mui/material/styles';
const steps = ['checkout', 'order details', 'confirm order'];
const CheckoutStepper = () => {
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

		// stepper: {
		// 	width: '100%',
		// },
		// heading: {
		// 	fontSize: '1.7em',
		// },
		// stepperHeader: {
		// 	color: 'white',
		// 	backgroundColor: 'blue',
		// },
		// stepButton: {
		// 	'& .MuiStepIcon-active': {
		// 		opacity: 1,
		// 		color: 'green',
		// 	},
		// },
		// stepIcon: {
		// 	color: 'red',
		// 	opacity: 0.8,
		// },
		// stepIconText: {
		// 	display: 'none',
		// },
	});

	return (
		<ThemeProvider theme={stepperStyles}>
			<Container maxWidth="lg">
				<Stepper activeStep={activeStep}>
					{steps.map((step, i) => {
						return (
							<Step key={step} completed={completed[i]}>
								<StepButton>{step}</StepButton>
							</Step>
						);
					})}
				</Stepper>
				<Box>
					{activeStep !== steps.length ? (
						<Container maxWidth="lg">current step {activeStep}</Container>
					) : (
						<Container maxWidth="lg">current step {activeStep} final</Container>
					)}
					<Stack
						direction="row"
						spacing={2}
						justifyContent={'end'}
						sx={{ button: { color: 'white' } }}
					>
						<Button
							variant="contained"
							color="primary"
							onClick={() => {
								handleStep(activeStep > 0 ? -1 : 0);
							}}
						>
							prev
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={() => {
								handleStep(activeStep < steps.length ? +1 : 0);
							}}
						>
							next
						</Button>
					</Stack>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default CheckoutStepper;

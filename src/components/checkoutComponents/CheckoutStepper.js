import { Step, StepButton, Stepper } from '@mui/material';
import React from 'react';

const CheckoutStepper = ({ completed, activeStep, steps }) => {
	return (
		<Stepper activeStep={activeStep}>
			{steps.map((step, i) => {
				return (
					<Step key={step} completed={completed[i]}>
						<StepButton>{step}</StepButton>
					</Step>
				);
			})}
		</Stepper>
	);
};

export default CheckoutStepper;

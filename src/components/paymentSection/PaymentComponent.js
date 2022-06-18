import { Container, Grid } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import CreditCard from './CreditCardComponents/CreditCard';
import PaymentFormComponent from './paymentForm/PaymentFormComponent';

const PaymentComponent = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		onChange,
		control,
	} = useForm({ mode: 'all' });
	return (
		<Container>
			<Grid container>
				<CreditCard></CreditCard>
				<PaymentFormComponent
					{...{
						register,
						handleSubmit,
						formState: { errors },
						onChange,
						control,
					}}
				></PaymentFormComponent>
			</Grid>
		</Container>
	);
};

export default PaymentComponent;

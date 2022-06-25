import { Container, Grid } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import CreditCard from './CreditCardComponents/CreditCard';
import PaymentFormComponent from './paymentForm/PaymentFormComponent';

const PaymentComponent = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		onChange,
		control,

		watch,
		getValues,
	} = useForm({ mode: 'all' });
	const [flipped, setFlipped] = useState('not-flipped');
	let name = watch('name');
	let expirationDate = watch('expirationDate(mm/yy)');
	let securityCode = watch('cardSecurityCode');
	let cardNumber = watch('cardNumber');
	return (
		<Container>
			<Grid container>
				<CreditCard
					{...{
						flipped,
						setFlipped,
						name,
						expirationDate,
						securityCode,
						cardNumber,
					}}
				></CreditCard>
				<PaymentFormComponent
					{...{
						register,
						handleSubmit,
						formState: { errors },
						onChange,
						control,
						setFlipped,
						flipped,
						isValid,
					}}
				></PaymentFormComponent>
			</Grid>
		</Container>
	);
};

export default PaymentComponent;

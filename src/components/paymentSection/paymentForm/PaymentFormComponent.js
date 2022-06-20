import { Box, Button, Grid, Stack } from '@mui/material';

import React, { useEffect } from 'react';

import InputErrorMsg from './InputErrorMsg';
import InputController from './InputController';
import {
	cardRules,
	CardSecurityCodeRules,
	expirationDateRules,
	nameRules,
} from './inputRules';

const PaymentFormComponent = ({
	register,
	handleSubmit,
	formState: { errors },
	onChange,
	control,
	setFlipped,
	flipped,
	formRef,
}) => {
	const onSubmit = (data) => {
		console.log(data);
	};

	useEffect(() => {}, []);

	return (
		<Grid item xs={12} sm={12} md={6} sx={{ py: 2.5, px: 1.5 }}>
			<Box
				component="form"
				onSubmit={handleSubmit(onSubmit)}
				sx={{ '& .MuiTextField-root': { m: 1 } }}
				noValidate
				autoComplete="off"
				ref={formRef}
			>
				<div>
					<InputController
						{...{ control }}
						name={'name'}
						pattern={'x'}
						rules={nameRules}
					></InputController>

					{errors.name ? (
						<InputErrorMsg errors={errors} field={errors.name}></InputErrorMsg>
					) : null}
				</div>
				<div>
					<InputController
						{...{ control }}
						name={'cardNumber'}
						pattern={'0000-0000-0000-0000'}
						rules={cardRules}
					></InputController>

					{errors.cardNumber ? (
						<InputErrorMsg
							errors={errors}
							field={errors.cardNumber}
						></InputErrorMsg>
					) : null}
				</div>
				<Stack direction="row" spacing={2}>
					<Box>
						<InputController
							{...{ control }}
							name={'expirationDate(mm/yy)'}
							pattern={'m/Y'}
							rules={expirationDateRules}
						></InputController>
						{errors[`expirationDate(mm/yy)`] ? (
							<InputErrorMsg
								errors={errors}
								field={errors[`expirationDate(mm/yy)`]}
							></InputErrorMsg>
						) : null}
					</Box>
					<Box>
						<InputController
							{...{ control, setFlipped, flipped }}
							name={'cardSecurityCode'}
							pattern={'000'}
							rules={CardSecurityCodeRules}
						></InputController>
						{errors.cardSecurityCode ? (
							<InputErrorMsg
								errors={errors}
								field={errors.cardSecurityCode}
							></InputErrorMsg>
						) : (
							<Box sx={{ height: '39px' }} />
						)}
					</Box>
				</Stack>
				<Box sx={{ display: 'flex', justifyContent: 'end' }}>
					<Button type="submit">sub</Button>
				</Box>
			</Box>
		</Grid>
	);
};

export default PaymentFormComponent;

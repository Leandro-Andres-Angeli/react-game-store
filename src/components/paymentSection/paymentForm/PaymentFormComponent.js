import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import React, { useEffect, useRef } from 'react';

import InputErrorMsg from './InputErrorMsg';
import InputController from './InputController';
import {
	cardRules,
	CardSecurityCodeRules,
	expirationDateRules,
} from './inputRules';

const PaymentFormComponent = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		onChange,
		control,
	} = useForm({ mode: 'all' });
	const onSubmit = (data) => {
		console.log(data);
	};
	const inputRef = useRef(null);

	useEffect(() => {
		console.log(inputRef.current);
	}, []);

	return (
		<Grid item xs={12} sm={12} md={6}>
			<Box
				component="form"
				onSubmit={handleSubmit(onSubmit)}
				sx={{ '& .MuiTextField-root': { m: 1 } }}
				noValidate
				autoComplete="off"
			>
				<div>
					{' '}
					<TextField
						label="Name"
						id="outlined-size-small"
						size="small"
						name="ownerName"
						fullWidth
						onChange={onChange}
						inputProps={{
							...register('name', {
								required: 'required field',
								minLength: { value: 10, message: 'name too short' },
							}),
						}}
					/>
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
				<Stack direction="row" spacing={2} ref={inputRef}>
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
							{...{ control }}
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
				<Box>
					<Button type="submit">sub</Button>
				</Box>
			</Box>
		</Grid>
	);
};

export default PaymentFormComponent;

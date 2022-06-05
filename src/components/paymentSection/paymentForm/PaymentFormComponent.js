import { Box, Button, FormHelperText, Grid, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import IMask, { InputMask } from 'imask';
import InputCustomMask from './InputCustomMask';
import React from 'react';
import { red } from '@mui/material/colors';

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
	console.log(errors);
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
						// defaultValue="name"
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
					{/* {errors.name && (
								<FormHelperText
									sx={{ color: red[900], marginLeft: 2 }}
									id="component-error-text"
								>
									{errors.name.message}
								</FormHelperText>
							) */}
				</div>
				<div>
					<Controller
						defaultValue=""
						name="cardNumber"
						control={control}
						render={({
							field: { onChange: onChangeReactHookForm, value, ref },
						}) => {
							return (
								<TextField
									size="small"
									label="card number"
									value={value}
									onChange={onChangeReactHookForm}
									fullWidth
									InputProps={{
										inputComponent: InputCustomMask,
										inputProps: { pattern: '0000-0000-0000-0000' },
									}}
								></TextField>
							);
						}}
						rules={{
							required: 'required field',
							minLength: { value: 19, message: 'must be 16 numbers long' },
						}}
					></Controller>
					{errors.cardNumber ? (
						<FormHelperText
							id="component-helper-text"
							sx={{
								marginLeft: 1,
								bgcolor: red[700],
								color: 'white',

								textTransform: 'uppercase',
								width: 'fit-content',
								padding: 1,
								borderRadius: 1,
							}}
						>
							{errors.cardNumber.message}
						</FormHelperText>
					) : null}
				</div>
				<div>
					{/* <TextField
								label="Card Number"
								name="cardNumber"
								id="outlined-size-small"
								value={values.cardNumber}
								size="small"
								fullWidth
								 {...register('cardNumber', {
								 	required: 'required field',
								 	minLength: {
								 		value: 19,
								 		message: 'credit card number must be 16 numbers long',
								 	},
								 })}
								defaultValue=""
								InputProps={{
									inputComponent: CardNumberFormatIMask,
								}}
								onChange={handleChange}
							/> */}
					{/* {errors.cardNumber && (
								<FormHelperText
									sx={{ color: red[900], marginLeft: 2 }}
									id="component-error-text"
								>
									{errors.cardNumber.message}
								</FormHelperText>
							)} */}
				</div>
				<Box
					sx={{
						'& .MuiTextField-root': { width: '25ch' },
					}}
				>
					{/* <TextField
								label="Expiration (mm/yy)"
								id="outlined-size-small"
								{...register('expirationDate', {
									required: 'required field',
									minLength: {
										value: 5,
										message: 'incomplete expiration date',
									},
								})}
								value={values.expiration}
								onChange={handleChange}
								name="expiration"
								size="small"
								required
								InputProps={{
									inputComponent: ExpirationDateIMask,
								}}
							/> */}
					{/* {errors.expirationDate && (
								<FormHelperText
									sx={{ color: red[900], marginLeft: 2 }}
									id="component-error-text"
								>
									{errors.expirationDate.message}
								</FormHelperText>
							)} */}
					{/* <TextField
								label="Security Code"
								id="outlined-size-small"
								defaultValue=""
								size="small"
								{...register('securityCode', {
									required: 'required field',
									minLenght: {
										value: 3,
										message: 'security code must be 3 numbers long',
									},
								})}
								value={values.securityCode}
								name="securityCode"
								onChange={handleChange}
								onBlur={() => {
									creditCard.current.classList.remove('flipped');
								}}
								onFocus={() => {
									creditCard.current.classList.add('flipped');
								}}
								required
								InputProps={{
									inputComponent: cardCodeIMask,
								}}
							/> */}

					{/* <Controller
								control={control}
								name="muiSwitch"
								defaultValue={''}
								ref={ref}
								render={({ field: { onChange, value, ref } }) => (
									<>
										 <TextField {...field} step={10} marks min={10} max={110} /> 
									
										<CustomMask
											ref={ref}
											value={value}
											onChange={onChange}
										></CustomMask>
										 {() => (
											<>
												{/* <TextField
										
												error={!!errors.phone?.message}
												label="Phone"
												variant="outlined"
												type="text"
												fullWidth
												required
												
											/> 
												
											</>
										)} 
									</>
								)}
								rules={{
									required: 'required field',
									minLength: { value: 3, message: '3 min' },
								}}
							/> */}
					{/* <Controller
								component={<InputMask />}
								control={control}
								mask="999.999.999-99"
								name="cpf"
							></Controller> */}
				</Box>

				<Button type="submit">sub</Button>
			</Box>
		</Grid>
	);
};

export default PaymentFormComponent;

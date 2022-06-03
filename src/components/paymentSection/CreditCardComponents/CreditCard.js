import {
	Box,
	Button,
	Container,
	Grid,
	TextField,
	FormHelperText,
} from '@mui/material';
import React, { forwardRef, useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { useForm } from 'react-hook-form';
import IMask from 'imask';
import PropTypes from 'prop-types';
import './CardStyles.css';
import { red } from '@mui/material/colors';
import Front from './Front';
import Back from './Back';
const ExpirationDateIMask = forwardRef((props, ref) => {
	const { onChange, ...other } = props;

	return (
		<IMaskInput
			{...other}
			required
			mask="m{/}yy"
			blocks={{
				m: {
					mask: IMask.MaskedRange,
					from: parseInt(new Date().getMonth()).toString().slice(-2),
					to: 12,
					maxLength: 2,
				},
				yy: {
					mask: IMask.MaskedRange,
					from: parseInt(new Date().getFullYear()).toString().slice(-2),
					to: 99,
					maxLength: 2,
				},
			}}
			autofix
			inputRef={ref}
			onAccept={(value) => onChange({ target: { name: props.name, value } })}
			overwrite
		/>
	);
});
ExpirationDateIMask.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
const CardNumberFormatIMask = forwardRef((props, ref) => {
	const { onChange, ...other } = props;

	return (
		<IMaskInput
			{...other}
			mask="0000{-}0000{-}0000{-}0000"
			autofix
			inputRef={ref}
			onAccept={(value) => onChange({ target: { name: props.name, value } })}
			overwrite
		/>
	);
});
CardNumberFormatIMask.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
const cardCodeIMask = forwardRef((props, ref) => {
	const { onChange, ...other } = props;
	return (
		<IMaskInput
			{...other}
			mask="000"
			autofix
			inputRef={ref}
			onAccept={(value) => onChange({ target: { name: props.name, value } })}
			overwrite
		/>
	);
});
cardCodeIMask.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
const CreditCard = () => {
	const creditCard = useRef();

	const [values, setValues] = useState({});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
		console.log(values);
	};

	// const onSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(values);
	// };
	console.log(errors.expirationDate);
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<Container>
			{' '}
			<Grid container>
				<Grid item xs={12} sm={12} md={6}>
					<Box sx={{ position: 'relative' }}>
						<Container className="creditcard" ref={creditCard}>
							<Box className="front">
								<Front></Front>
							</Box>
							<Box className="back">
								<Back></Back>
							</Box>
						</Container>
					</Box>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Box
						component="form"
						onSubmit={handleSubmit(onSubmit)}
						// onSubmit={submitForm}
						sx={{ '& .MuiTextField-root': { m: 1 } }}
						noValidate
						autoComplete="off"
					>
						<div>
							{' '}
							<TextField
								{...register('name', {
									required: 'required field',
									minLength: { value: 10, message: 'name too short' },
								})}
								label="Name"
								id="outlined-size-small"
								// defaultValue="name"
								size="small"
								name="ownerName"
								fullWidth
								onChange={handleChange}
							/>
							{errors.name && (
								<FormHelperText
									sx={{ color: red[900], marginLeft: 2 }}
									id="component-error-text"
								>
									{errors.name.message}
								</FormHelperText>
							)}
						</div>
						<div>
							<TextField
								label="Card Number"
								name="cardNumber"
								{...register('cardNumber', {
									required: 'required field',
									minLength: {
										value: 19,
										message: 'credit card number must be 16 numbers long',
									},
								})}
								id="outlined-size-small"
								value={values.cardNumber}
								onChange={handleChange}
								size="small"
								fullWidth
								InputProps={{
									inputComponent: CardNumberFormatIMask,
								}}
							/>
							{errors.cardNumber && (
								<FormHelperText
									sx={{ color: red[900], marginLeft: 2 }}
									id="component-error-text"
								>
									{errors.cardNumber.message}
								</FormHelperText>
							)}
						</div>
						<Box
							sx={{
								'& .MuiTextField-root': { width: '25ch' },
							}}
						>
							<TextField
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
							/>
							{errors.expirationDate && (
								<FormHelperText
									sx={{ color: red[900], marginLeft: 2 }}
									id="component-error-text"
								>
									{errors.expirationDate.message}
								</FormHelperText>
							)}
							<TextField
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
							/>
							owner {values.ownerName}
						</Box>
						<Button type="submit">sub</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default CreditCard;

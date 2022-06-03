import { Box, Button, Container, Grid, TextField } from '@mui/material';
import React, { forwardRef, useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { Formik } from 'formik';
import IMask from 'imask';
import PropTypes from 'prop-types';
import './CardStyles.css';

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

const CreditCard = () => {
	const creditCard = useRef();

	const [values, setValues] = useState({});

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
		console.log(values);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
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
						onSubmit={handleSubmit}
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
								onChange={handleChange}
							/>
						</div>
						<div>
							<TextField
								label="Card Number"
								name="cardNumber"
								id="outlined-size-small"
								value={values.cardNumber}
								onChange={handleChange}
								size="small"
								fullWidth
								InputProps={{
									inputComponent: CardNumberFormatIMask,
								}}
							/>
						</div>
						<Box
							sx={{
								'& .MuiTextField-root': { width: '25ch' },
							}}
						>
							<TextField
								label="Expiration (mm/yy)"
								id="outlined-size-small"
								value={values.expiration}
								onChange={handleChange}
								name="expiration"
								size="small"
								required
								InputProps={{
									inputComponent: ExpirationDateIMask,
								}}
							/>
							<TextField
								label="Security Code"
								id="outlined-size-small"
								defaultValue=""
								size="small"
								onChange={handleChange}
								onBlur={() => {
									creditCard.current.classList.remove('flipped');
								}}
								onFocus={() => {
									creditCard.current.classList.add('flipped');
								}}
								required
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

import {
	Box,
	Button,
	Container,
	Grid,
	TextField,
	FormHelperText,
	Input,
	Typography,
} from '@mui/material';
import React, { forwardRef, useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { Controller, useForm } from 'react-hook-form';
import IMask, { InputMask } from 'imask';
import PropTypes from 'prop-types';
import './CardStyles.css';

import Front from './Front';
import Back from './Back';
import PaymentFormComponent from '../paymentForm/PaymentFormComponent';

const CustomMask = ({ ref, value, onChange }, children) => {
	return (
		<IMaskInput
			mask="000-000-000-000"
			definitions={{
				'#': /[1-9]/,
			}}
			inputRef={ref}
			value={value}
			onChange={onChange}
			overwrite
			defaultValue=""
		>
			{' '}
			{children}
		</IMaskInput>
	);
};
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
const MaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
	const { onChange, register, pattern, errors, ...other } = props;

	return (
		<IMaskInput
			{...other}
			mask={props.pattern}
			definitions={{
				'#': /[1-9]/,
			}}
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
	const {
		register,
		handleSubmit,
		formState: { errors },
		onChange,
		control,
	} = useForm({ mode: 'all' });
	const [values, setValues] = useState({});
	const ref = useRef();
	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
		console.log(values);
	};

	const onSubmit = (data) => {
		console.log(data);
	};
	console.log(errors);

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
				<PaymentFormComponent></PaymentFormComponent>
			</Grid>
		</Container>
	);
};

export default CreditCard;

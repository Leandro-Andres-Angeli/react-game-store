import { Box, Container, Grid } from '@mui/material';
import React, { forwardRef, useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';

import IMask from 'imask';
import PropTypes from 'prop-types';
import './CardStyles.css';

import Front from './Front';
import Back from './Back';
import PaymentFormComponent from '../paymentForm/PaymentFormComponent';

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

const CreditCard = () => {
	const creditCard = useRef();

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

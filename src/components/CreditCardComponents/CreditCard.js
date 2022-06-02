import { Box, Container, Grid, TextField } from '@mui/material';
import React, { forwardRef, useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
import IMask from 'imask';
import PropTypes from 'prop-types';
import './CardStyles.css';

import Front from './Front';
import Back from './Back';
const TextMaskCustom = forwardRef((props, ref) => {
	const { onChange, ...other } = props;
	return (
		<IMaskInput
			{...other}
			mask="m{/}y"
			blocks={{
				m: {
					mask: IMask.MaskedRange,
					from: 1,
					to: 12,
					maxLength: 2,
				},
				y: {
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
TextMaskCustom.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

const CreditCard = () => {
	const creditCard = useRef();
	const [nameOwner, setNameOwner] = useState(' ');
	const [values, setValues] = useState({
		textmask: '',
		numberformat: '1320',
	});

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};
	console.log(nameOwner);

	return (
		<Container>
			{' '}
			<Grid container>
				<Grid item xs={12} sm={12} md={6}>
					<Box sx={{ position: 'relative' }}>
						<Container className="creditcard" ref={creditCard}>
							<div className="front">
								<Front></Front>
							</div>
							<div className="back">
								<Back></Back>
							</div>
						</Container>
					</Box>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Box
						component="form"
						sx={{ '& .MuiTextField-root': { m: 1 } }}
						noValidate
						autoComplete="off"
					>
						<div>
							{' '}
							<TextField
								label="Name"
								id="outlined-size-small"
								defaultValue="name"
								size="small"
								fullWidth
								onChange={(e) => {
									console.log(e.target.value);
									setNameOwner(e.target.value);
								}}
							/>
						</div>
						<div>
							<TextField
								label="Card Number"
								id="outlined-size-small"
								defaultValue="card-number"
								size="small"
								fullWidth
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
								value={values.textmask}
								onChange={handleChange}
								name="textmask"
								size="small"
								InputProps={{
									inputComponent: TextMaskCustom,
								}}
							/>
							<TextField
								label="Security Code"
								id="outlined-size-small"
								defaultValue=""
								size="small"
								onBlur={() => {
									creditCard.current.classList.remove('flipped');
								}}
								onFocus={() => {
									creditCard.current.classList.add('flipped');
								}}
							/>
							owner {nameOwner}
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default CreditCard;

import { Box, Button, Grid, Stack, Typography } from '@mui/material';

import React, { useContext, useEffect, useState } from 'react';

import InputErrorMsg from './InputErrorMsg';
import InputController from './InputController';
import {
	cardRules,
	cardSecurityCodeRules,
	expirationDateRules,
	nameRules,
} from './inputRules';
import { AppContext } from '../../../context/AppContext';
import SnackbarComponent from '../../../snackbar/SnackbarComponent';

const PaymentFormComponent = ({
	register,
	handleSubmit,
	formState: { errors },
	onChange,
	control,
	setFlipped,
	flipped,
	formRef,
	isValid,
}) => {
	const { cardData, setCardData } = useContext(AppContext);
	const [closeSnackbar, setCloseSnackbar] = useState(false);

	const onSubmit = (data, e) => {
		setCardData({ ...cardData, cardInformation: data });

		e.target.reset();
		setCloseSnackbar(true);
	};

	useEffect(() => {
		localStorage.setItem('card', JSON.stringify(cardData));
	}, [cardData]);
	const inputType = { text: 'text', tel: 'tel' };

	return (
		<Grid item xs={12} sm={12} md={6} sx={{ py: 2.5, px: 1.5 }}>
			{cardData.length === 0 ? (
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
							<InputErrorMsg
								errors={errors}
								field={errors.name}
							></InputErrorMsg>
						) : null}
					</div>
					<div>
						<InputController
							{...{ control, inputType }}
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
								{...{ control, inputType }}
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
								{...{ control, setFlipped, flipped, inputType }}
								name={'cardSecurityCode'}
								pattern={'000'}
								rules={cardSecurityCodeRules}
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
						<Button
							type="submit"
							disabled={!isValid}
							variant="contained"
							sx={{ color: 'white' }}
						>
							confirm card
						</Button>
					</Box>
				</Box>
			) : (
				<Box
					sx={{
						display: 'flex',
						height: '100%',
						justifyContent: { md: 'center' },
						alignItems: { md: 'center', xs: 'start' },
						m: { xs: 2, md: 0 },
					}}
				>
					<Typography sx={{ textTransform: 'uppercase' }}>
						Card information already loaded
					</Typography>
				</Box>
			)}
			<SnackbarComponent
				msg={'card information added'}
				positionY={'bottom'}
				{...{ closeSnackbar }}
				setCloseSnackbar={() => {
					setCloseSnackbar(false);
				}}
			></SnackbarComponent>
		</Grid>
	);
};

export default PaymentFormComponent;

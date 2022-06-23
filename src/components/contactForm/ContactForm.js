import { Box, Typography, Container, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import formStyles from '../../theme/formStyles.js';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';


import {
	msgRules,
	nameRules,
	validEmail,
} from '../paymentSection/paymentForm/inputRules.js';
import ContactFormController from './ContactFormController.js';
import InputErrorMsg from '../paymentSection/paymentForm/InputErrorMsg.js';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
	const {
		register,
		handleSubmit,

		control,
		formState: { errors, isDirty, isValid },
	} = useForm({ mode: 'all' });
	console.log(!!errors);

	const formThemeStyles = formStyles;
	// console.log(emailjs);
	const formTheme = createTheme(formThemeStyles);

	const onSubmit = (data) => {
		console.log(data);
	};
	const InputProps = { rows: 4, type: 'textarea', multiline: true };
	return (
		<ThemeProvider theme={formTheme}>
			<Container>
				<Typography
					variant="h3"
					sx={{
						bgcolor: [formTheme.palette.primary.main],
						color: 'white',
						textTransform: 'uppercase',
						fontSize: { xs: 16, md: 24, lg: 32 },
						p: { xs: 1, md: 2 },
					}}
				>
					contact
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit(onSubmit)}
					flexDirection="column"
					sx={{ display: 'flex', bgcolor: [formTheme.palette.bg_card_color] }}
					p={2}
					rowGap={2}
				>
					<div>
						<ContactFormController
							rules={nameRules}
							name="name"
							{...{ control, register }}
						></ContactFormController>
						{errors.name && (
							<InputErrorMsg field={errors.name} mlZero={0}></InputErrorMsg>
						)}
					</div>
					<div>
						<ContactFormController
							rules={validEmail}
							name="eMail"
							{...{ control, register }}
						></ContactFormController>
						{errors.eMail && (
							<InputErrorMsg field={errors.eMail} mlZero={0}></InputErrorMsg>
						)}
					</div>
					<div>
						<ContactFormController
							rules={msgRules}
							name="message"
							{...{ control, register, InputProps }}
						></ContactFormController>
						{errors.message && (
							<InputErrorMsg field={errors.message} mlZero={0}></InputErrorMsg>
						)}
					</div>

					<Button
						variant="contained"
						sx={{
							textTransform: 'uppercase',
							width: 'fit-content',
							alignSelf: 'end',
							color: 'white',
						}}
						type="submit"
						disabled={!isDirty || !isValid}
						endIcon={<SendIcon/>}
					>
						send
					</Button>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default ContactForm;

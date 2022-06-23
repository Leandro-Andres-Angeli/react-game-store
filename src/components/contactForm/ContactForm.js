import { Box, Typography, TextField, Container, Button } from '@mui/material';
import { createTheme, useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import formStyles from '../../theme/formStyles.js';
import React from 'react';
import emailjs from '@emailjs/browser';
import { Controller, useForm } from 'react-hook-form';
import { returnLabelName } from '../../utils/convertNameToLabel.js';
import {
	msgRules,
	nameRules,
	validEmail,
} from '../paymentSection/paymentForm/inputRules.js';
import ContactFormController from './ContactFormController.js';

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
						{errors.name && <p>{errors.name.message}</p>}
					</div>
					<div>
						<ContactFormController
							rules={validEmail}
							name="eMail"
							{...{ control, register }}
						></ContactFormController>
						{errors.eMail && <p>{errors.eMail.message}</p>}
					</div>
					<div>
						<ContactFormController
							rules={msgRules}
							name="message"
							{...{ control, register, InputProps }}
						></ContactFormController>
						{errors.message && <p>{errors.message.message}</p>}
					</div>

					<Button
						size="small"
						variant="contained"
						sx={{
							textTransform: 'uppercase',
							width: 'fit-content',
							alignSelf: 'end',
							color: 'white',
						}}
						type="submit"
						disabled={!isDirty || !isValid}
					>
						send
					</Button>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default ContactForm;

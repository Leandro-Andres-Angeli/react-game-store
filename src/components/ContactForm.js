import { Box, Typography, TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import formStyles from '../theme/formStyles.js';
import React from 'react';

const ContactForm = () => {
	const formThemeStyles = formStyles;

	const formTheme = createTheme(formThemeStyles);
	return (
		<ThemeProvider theme={formTheme}>
			<Box component="form">
				<Typography variant="h1" color="primary">
					contact
				</Typography>
				<TextField></TextField>
			</Box>
		</ThemeProvider>
	);
};

export default ContactForm;

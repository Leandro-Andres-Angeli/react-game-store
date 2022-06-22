import { Box, Typography, TextField } from '@mui/material';
import { createTheme, useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import formStyles from '../theme/formStyles.js';
import React from 'react';

const ContactForm = () => {
	const formThemeStyles = formStyles;

	const formTheme = createTheme(formThemeStyles);
	const theme = useTheme(formTheme);
	console.log(theme);
	return (
		<ThemeProvider theme={formTheme}>
			<Box component="form">
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
				<TextField></TextField>
				<TextField></TextField>
				<TextField></TextField>
			</Box>
		</ThemeProvider>
	);
};

export default ContactForm;

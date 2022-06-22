import { Box, Typography, TextField, Container, Button } from '@mui/material';
import { createTheme, useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import formStyles from '../theme/formStyles.js';
import React from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	const formThemeStyles = formStyles;
	console.log(emailjs);
	const formTheme = createTheme(formThemeStyles);
	console.log(formTheme);
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
					flexDirection="column"
					sx={{ display: 'flex', bgcolor: [formTheme.palette.bg_card_color] }}
					p={2}
					rowGap={2}
				>
					<div>
						<TextField variant="standard" label="Name" fullWidth></TextField>
					</div>
					<div>
						<TextField variant="standard" label="E-Mail" fullWidth></TextField>
					</div>
					<div>
						<TextField
							variant="standard"
							rows={5}
							multiline
							label="Message"
							fullWidth
						></TextField>
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
					>
						send
					</Button>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default ContactForm;

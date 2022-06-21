import React from 'react';
import Container from '@mui/material/Container';
import { Grid, Stack, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/styles';

const Footer = () => {
	const theme = useTheme();

	return (
		<Container
			maxWidth="xl"
			component="footer"
			sx={{
				bgcolor: theme.palette.primary.main,
				display: 'flex',
				justifyContent: 'end',
				borderTop: `1px solid ${theme.palette.secondary.main}`,
				pb: '1rem',
				pt: '4rem',
			}}
		>
			<Grid
				container
				rowSpacing={4}
				sx={{
					color: 'white',
					fontSize: '14px',
					display: 'flex',
					justifyContent: 'baseline',
				}}
			>
				<Grid item xs={12} md={6}>
					<Typography>
						By Leandro Angeli © 2022 ,Buenos Aires Argentina{' '}
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Stack direction="row" spacing={2}>
						<a href="https://www.linkedin.com/in/leandro-angeli-787b7822b/">
							<LinkedInIcon sx={{ ml: 2 }}></LinkedInIcon>
						</a>
						<a href="https://github.com/Leandro-Andres-Angeli">
							<GitHubIcon sx={{ ml: 2 }}></GitHubIcon>
						</a>
						<a href="mailto:leandroandresangeli@gmail.com">
							<MailIcon sx={{ ml: 2 }}></MailIcon>
						</a>
						<a href="https://telegram.me/L34nndr0">
							<TelegramIcon sx={{ ml: 2 }}></TelegramIcon>
						</a>
						<a href="https://wa.me/541159066928">
							<WhatsAppIcon sx={{ ml: 2 }}></WhatsAppIcon>
						</a>
						<a href="tel:+541159066928">
							<CallIcon sx={{ ml: 2 }}></CallIcon>
						</a>
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;

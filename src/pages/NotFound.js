import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				textTransform: 'uppercase',
				minHeight: '65vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Typography
				color="secondary"
				variant="h1"
				sx={{
					fontSize: { md: '5rem', xs: '3rem', sm: '3.5rem' },
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{' '}
				Error 4{' '}
				<Box
					component="img"
					sx={{
						width: { md: '5rem', xs: '3rem', sm: '3.5rem' },
						margin: '0 10px',
					}}
					src="./404ghost.png"
				></Box>
				4
			</Typography>
			<Typography
				variant="h2"
				sx={{
					fontSize: '2rem',
					fontWeight: { md: 'light', xs: 'lighter' },
					letterSpacing: { md: '11px' },
				}}
			>
				{' '}
				page not found!
			</Typography>
		</Container>
	);
};

export default NotFound;

import React from 'react';
import Container from '@mui/material/Container';
import {
	Box,
	CircularProgress,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';

const FallbackComponent = () => {
	return (
		<Container
			maxWidth="xl"
			sx={{
				height: '80vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Stack direction="row" spacing={2}>
				<Typography variant="h1">Loading</Typography>
				<CircularProgress color="secondary" />
			</Stack>
		</Container>
	);
};

export default FallbackComponent;

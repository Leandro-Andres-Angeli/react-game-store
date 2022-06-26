import React from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import './fallbackStyles.css';
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
			<Box className="lds-ellipsis">
				<Box></Box>
				<Box></Box>
				<Box></Box>
				<Box></Box>
			</Box>
		</Container>
	);
};

export default FallbackComponent;

import { Box, Container, Grid } from '@mui/material';
import React, { useRef } from 'react';

import './CardStyles.css';

import Front from './Front';
import Back from './Back';

const CreditCard = () => {
	const creditCard = useRef();

	return (
		<Grid item xs={12} sm={12} md={6}>
			<Box
				sx={{
					width: '100%',
					maxWidth: 600,
					maxHeight: 300,
					height: '54vw',
					p: 3,
				}}
			>
				<Box className="creditcard" ref={creditCard}>
					<Box className="front">
						<Front></Front>
					</Box>
					<Box className="back">
						<Back></Back>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};

export default CreditCard;

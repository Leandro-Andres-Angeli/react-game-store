import { Box, Typography } from '@mui/material';
import React from 'react';

const NoInformationFallback = ({ msg }) => {
	return (
		<Box
			sx={{
				minHeight: '50vh',
				display: ' flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Typography
				sx={{
					textTransform: 'uppercase',
				}}
			>
				{msg}
			</Typography>
		</Box>
	);
};

export default NoInformationFallback;

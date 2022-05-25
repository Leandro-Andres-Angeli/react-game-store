import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography, Divider } from '@mui/material';

const PoliciesComponentItem = ({ icon, title, subtitle }) => {
	return (
		<Grid item sx={{ display: 'flex', alignItems: 'center', ml: 4 }}>
			<Box sx={{ '& svg': { height: '2rem', width: '2rem' }, mr: 3 }}>
				{icon}{' '}
			</Box>
			<Box>
				<Typography
					variant="h3"
					sx={{ fontSize: '1.5rem', fontWeight: 'bolder' }}
				>
					{title}
				</Typography>

				<Typography
					variant="small"
					sx={{ fontSize: '.8rem', fontWeight: 'lighter' }}
				>
					{subtitle}
				</Typography>
			</Box>{' '}
		</Grid>
	);
};

export default PoliciesComponentItem;

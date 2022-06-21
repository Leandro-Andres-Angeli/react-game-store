import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';

const PoliciesComponentItem = ({ icon, title, subtitle }) => {
	return (
		<Grid
			item
			lg={2}
			md={6}
			sm={12}
			xs={12}
			sx={{
				display: 'flex',
				alignItems: 'center',
				columnGap: { xs: 2, md: 4, sm: 8 },
				justifyContent: { xs: 'center' },
			}}
		>
			<Box
				sx={{
					'& svg': { height: '2rem', width: '2rem' },
					//  mr: 3
				}}
			>
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

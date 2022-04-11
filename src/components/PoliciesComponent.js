import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/system';
import { policies } from '../utils/policies';
import PoliciesComponentItem from './PoliciesComponentItem';
import { Divider } from '@mui/material';

const PoliciesComponent = () => {
	const policiesArray = policies;

	const theme = useTheme();
	return (
		<Box
			maxWidth="lg"
			sx={{
				px: 10,
				py: 10,
				bgcolor: [theme.palette.primary.main],
				color: 'white',
				maxWidth: '100%',
			}}
		>
			<Grid
				container
				sx={{
					justifyContent: 'center',
					p: 4,
					sm: { gap: '1rem' },
				}}
			>
				{policiesArray.map((policie, i) => (
					<>
						<PoliciesComponentItem
							key={i}
							icon={policie.icon}
							title={policie.title}
							subtitle={policie.subtitle}
							sx={{
								position: 'relative',

								padding: `10px 20px 5px `,
							}}
						></PoliciesComponentItem>
						<Divider
							key={`divider ${i}`}
							orientation="vertical"
							sx={{
								borderColor: 'rgba(244, 241, 241, 0.17)',
								width: '5px',
								marginLeft: theme.spacing(2),
							}}
							flexItem
						/>
					</>
				))}
			</Grid>
		</Box>
	);
};

export default PoliciesComponent;

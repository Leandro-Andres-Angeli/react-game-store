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
				// px: 10,
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
					rowGap: 3,
					// sm: { gap: '1rem' },
				}}
			>
				{policiesArray.map((policie, i) => (
					<>
						<PoliciesComponentItem
							key={policie.title}
							icon={policie.icon}
							title={policie.title}
							subtitle={policie.subtitle}
							sx={{
								position: 'relative',
							}}
						></PoliciesComponentItem>
						<Divider
							key={`divider ${i}`}
							orientation="vertical"
							sx={{
								borderColor: 'rgba(244, 241, 241, 0.17)',
								// width: '5px',
								marginRight: theme.spacing(2),
								marginLeft: theme.spacing(2),
								display: { lg: 'block', md: 'none' },
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

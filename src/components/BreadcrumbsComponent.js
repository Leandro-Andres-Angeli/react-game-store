import { Box, Breadcrumbs, Link, Stack } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/styles';
const BreadcrumbsComponent = ({ route }) => {
	const theme = useTheme();
	console.log(theme);
	return (
		<Breadcrumbs
			sx={{
				textTransform: 'uppercase',
				'& a ': {
					color: 'white',
					textDecoration: 'none',
					'&.active': {
						color: [theme.palette.secondary.main],
					},
				},
			}}
			separator={<NavigateNextIcon fontSize="small" />}
			aria-label="breadcrumb"
		>
			<Link component={NavLink} to="/">
				Home
			</Link>
			<Link component={NavLink} to={`/${route}`}>
				{route}
			</Link>
		</Breadcrumbs>
	);
};

export default BreadcrumbsComponent;

import { Breadcrumbs, Button, IconButton, Link } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/styles';
const BreadcrumbsComponent = ({ route, navigateToMain }) => {
	const theme = useTheme();

	return (
		<Breadcrumbs
			sx={{
				textTransform: 'uppercase',
				'& ol': {
					display: 'flex',
				},
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
			<Link
				href=""
				component="a"
				onClick={(e) => {
					e.preventDefault();
					navigateToMain();
				}}
			>
				{route.split('/', 1)[0]}
			</Link>

			<Link component={NavLink} to={`/${route}`}>
				{route.split('/', route.length)[1].replace(/-/g, ' ')}
			</Link>
		</Breadcrumbs>
	);
};

export default BreadcrumbsComponent;

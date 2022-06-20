import { Breadcrumbs, Button, IconButton, Link } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/styles';
const BreadcrumbsComponent = ({ route, navigateToMain }) => {
	const theme = useTheme();
	let gameGenre = route.split('/', route.length)[1];

	return (
		<Breadcrumbs
			sx={{
				fontSize: { xs: 14, sm: 16, md: 16 },
				textTransform: 'uppercase',
				'.MuiBreadcrumbs-separator': { m: { xs: 0, sm: 0, md: '0 5px' } },
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
				{gameGenre &&
					gameGenre
						.replace(/-/g, ' ')
						.replace(/ga 2/, 'GA')
						.replace('%20', ' ')}
			</Link>
		</Breadcrumbs>
	);
};

export default BreadcrumbsComponent;

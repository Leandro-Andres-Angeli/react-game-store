import { Breadcrumbs, Link } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavLink, useParams } from 'react-router-dom';
import { useTheme } from '@mui/styles';
const BreadcrumbsComponent = ({ route }) => {
	const theme = useTheme();
	const params = useParams();

	const lengthLink = route.length;
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
			<Link component={NavLink} to={`/${route.replace(params.genre, '')}`}>
				{route.slice(0, 5)}
			</Link>
			<Link component={NavLink} to={`/${route}`}>
				{route.slice(7, lengthLink)}
			</Link>
		</Breadcrumbs>
	);
};

export default BreadcrumbsComponent;

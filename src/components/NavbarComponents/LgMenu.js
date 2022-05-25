import { useTheme } from '@emotion/react';
import { Box, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const LgMenu = ({ navbarRoutes }) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				marginLeft: 'auto',
				display: {
					xs: 'none',
					md: 'block',
				},
			}}
		>
			{navbarRoutes.map((route, i) =>
				route.name === 'home' ? (
					<Button
						key={i}
						component={NavLink}
						sx={{
							color: 'white',
							'&:hover': {
								color: [theme.palette.secondary.main],
							},
							'&.active': {
								color: [theme.palette.secondary.main],
							},
						}}
						to="/"
					>
						{route.name}
					</Button>
				) : route.name !== 'notfound' && route.name !== 'home' ? (
					<Button
						key={i}
						component={NavLink}
						sx={{
							color: 'white',
							'&:hover': {
								color: [theme.palette.secondary.main],
							},
							'&.active': {
								color: [theme.palette.secondary.main],
							},
						}}
						to={route.name}
					>
						{route.name}
					</Button>
				) : null
			)}
		</Box>
	);
};

export default LgMenu;

import { useTheme } from '@emotion/react';
import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SmMenu = ({ navbarRoutes, anchorElNav, handleCloseNavMenu }) => {
	const theme = useTheme();
	return (
		<Menu
			id="menu-appbar"
			anchorEl={anchorElNav}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			open={Boolean(anchorElNav)}
			onClose={handleCloseNavMenu}
			sx={{
				display: {
					xs: 'block',
					md: 'none',
				},
				ul: {
					bgcolor: theme.palette.primary.main,
					textTransform: 'uppercase',
				},
			}}
		>
			{navbarRoutes.map((route, i) =>
				route.name === 'home' ? (
					<MenuItem
						key={i}
						onClick={handleCloseNavMenu}
						textAlign="center"
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
					</MenuItem>
				) : route.name !== 'notfound' && route.name !== 'home' ? (
					<MenuItem
						key={i}
						onClick={handleCloseNavMenu}
						textAlign="center"
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
					</MenuItem>
				) : null
			)}
		</Menu>
	);
};

export default SmMenu;

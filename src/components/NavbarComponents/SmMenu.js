import { useTheme } from '@emotion/react';
import { Menu, MenuItem } from '@mui/material';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const SmMenu = ({ navbarRoutes, anchorElNav, handleCloseNavMenu }) => {
	const { cart } = useContext(AppContext);
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
						component={NavLink}
						disabled={
							route.name === 'checkout' && cart.items.length <= 0 ? true : false
						}
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

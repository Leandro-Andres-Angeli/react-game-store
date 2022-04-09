import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import { Box, Button, Container } from '@mui/material';
import { routes } from '../utils/routes';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const theme = useTheme();
	const navbarRoutes = routes;
	return (
		<>
			<AppBar position="static" color="primary">
				<Container maxWidth="xl">
					<Toolbar>
						<Typography
							variant="h1"
							sx={{
								textTransform: 'uppercase',
								fontStyle: 'italic',
								fontWeight: 'bold',
								display: 'inline-flex',
							}}
						>
							game{' '}
							<Box
								sx={{
									display: 'inline',
									color: [theme.palette.secondary.main],
								}}
							>
								hoax
							</Box>
						</Typography>
						<Box sx={{ marginLeft: 'auto' }}>
							{navbarRoutes.map((route) =>
								route.name === 'home' ? (
									<Button
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
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};

export default Navbar;

import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import { Badge, Box, Button, IconButton } from '@mui/material';
import { routes } from '../../utils/routes';

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { AppContext } from '../../context/AppContext';
import { Sling as Hamburger } from 'hamburger-react';
import LgMenu from './LgMenu';
import SmMenu from './SmMenu';
import { calcTotalValues } from '../../utils/cartFunctions';
import FavoriteButtonNavbar from './FavoriteButtonNavbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const theme = useTheme();
	const { cart } = useContext(AppContext);

	const navbarRoutes = routes;
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	return (
		<>
			<AppBar
				// position="fixed"
				color="primary"
				sx={{ button: { color: 'white' } }}
			>
				<Toolbar maxWidth="xl" sx={{ display: 'flex', alignItems: 'center' }}>
					<Button
						component={Link}
						to="/"
						sx={{ textDecoration: 'none', color: 'white' }}
					>
						<Typography
							variant="h1"
							sx={{
								textTransform: 'uppercase',
								fontStyle: 'italic',
								fontWeight: 'bold',
								display: 'inline-flex',
								flexGrow: 1,
								fontSize: {
									xs: 24,
									sm: 24,
									md: 32,
									lg: [theme.typography.h1.fontSize],
								},
							}}
						>
							game{' '}
							<Box
								sx={{
									display: 'inline',
									color: [theme.palette.secondary.main],
								}}
							>
								store
							</Box>
						</Typography>
					</Button>
					<LgMenu navbarRoutes={navbarRoutes}></LgMenu>
					<Button
						sx={{ marginLeft: 'auto', color: 'white' }}
						component={Link}
						to="/checkout"
						disabled={cart.items <= 0}
					>
						<Badge badgeContent={calcTotalValues(cart)} color="secondary">
							<CardGiftcardIcon></CardGiftcardIcon>
						</Badge>
					</Button>
					<FavoriteButtonNavbar></FavoriteButtonNavbar>

					<IconButton
						sx={{
							color: 'white',

							display: {
								xs: 'block',
								md: 'none',
							},
						}}
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
					>
						<Box
							size={20}
							component={Hamburger}
							toggle={setAnchorElNav}
							toggled={anchorElNav}
						/>
					</IconButton>
					<SmMenu
						navbarRoutes={navbarRoutes}
						anchorElNav={anchorElNav}
						handleCloseNavMenu={handleCloseNavMenu}
					></SmMenu>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
};

export default Navbar;

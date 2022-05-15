import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import { Badge, Box, Button, IconButton } from '@mui/material';
import { routes } from '../../utils/routes';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { AppContext } from '../../context/AppContext';
import { Sling as Hamburger } from 'hamburger-react';
import LgMenu from './LgMenu';
import SmMenu from './SmMenu';
import { calcTotalValues } from '../../utils/cartFunctions';
import FavoriteSnackAction from '../../snackbar/FavoriteSnackAction';

const Navbar = () => {
	const theme = useTheme();
	const { cart, favourite } = useContext(AppContext);

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
					<Typography
						variant="h1"
						sx={{
							textTransform: 'uppercase',
							fontStyle: 'italic',
							fontWeight: 'bold',
							display: 'inline-flex',
							flexGrow: 1,
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
					<LgMenu navbarRoutes={navbarRoutes}></LgMenu>
					<Button sx={{ marginLeft: 'auto' }}>
						<Badge badgeContent={calcTotalValues(cart)} color="secondary">
							<CardGiftcardIcon></CardGiftcardIcon>
						</Badge>
					</Button>
					<Button>
						<Badge badgeContent={favourite?.length} color="secondary">
							<FavoriteIcon></FavoriteIcon>
						</Badge>
					</Button>
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

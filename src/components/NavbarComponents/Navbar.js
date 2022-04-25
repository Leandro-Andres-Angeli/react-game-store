import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import { Box, Button, IconButton } from '@mui/material';
import { routes } from '../../utils/routes';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { AppContext } from '../../context/AppContext';
import { Sling as Hamburger } from 'hamburger-react';
import LgMenu from './LgMenu';
import SmMenu from './SmMenu';

const Navbar = () => {
	const theme = useTheme();
	const navbarRoutes = routes;
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<AppBar
				position="fixed"
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
						<CardGiftcardIcon></CardGiftcardIcon>
					</Button>
					<Button>
						<FavoriteIcon></FavoriteIcon>
					</Button>
					<IconButton
						sx={{
							color: 'white',
							transform: 'scale(.6)',
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
		</>
	);
};

export default Navbar;

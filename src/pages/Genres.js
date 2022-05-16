import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Container from '@mui/material/Container';
import { Toolbar, Box, AppBar, Drawer, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import { GetLocationFunction } from '../utils/GetLocationFunction';
import DrawerComponent from '../components/DrawerComponent';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';
import { Outlet, useNavigate } from 'react-router-dom';

import { MarginSettings } from '../utils/MarginSettings';
import DrawerButtonToggler from '../components/DrawerButtonToggler';

const Genres = (props) => {
	const context = useContext(AppContext);
	const categories = context.contextVar[0];

	const [mobileOpen, setMobileOpen] = useState(true);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const theme = useTheme();
	const marginTopDrawerSettings = MarginSettings();

	const location = GetLocationFunction();

	let navigate = useNavigate();
	const navigateToMain = () => {
		navigate(`${categories?.results[0].name}`);
	};
	// console.log('render');
	let firstLoad = true;

	const initialPage = useCallback(() => {
		return categories?.results && firstLoad
			? (firstLoad = !navigateToMain())
			: null;
	}, [firstLoad, categories?.results]);
	useEffect(() => {
		initialPage();
	}, [initialPage]);
	const drawerWidth = theme.drawerWidth;

	const classes = marginTopDrawerSettings();

	return (
		<>
			<Container maxWidth="lg">
				<DrawerButtonToggler
					handleDrawerToggle={handleDrawerToggle}
				></DrawerButtonToggler>
				<Box
					sx={{
						bgcolor: [theme.palette.primary.main],
						color: 'white',
						position: 'relative',
					}}
				>
					<AppBar
						component="nav"
						shadow={0}
						sx={{
							position: 'absolute',
							my: 5,
							width: { md: `calc(100% - ${drawerWidth}px)` },
							ml: { md: `${drawerWidth}px` },
							boxShadow: 'none',
						}}
					>
						<BreadcrumbsComponent
							route={location}
							navigateToMain={navigateToMain}
						></BreadcrumbsComponent>
					</AppBar>{' '}
					<Drawer
						variant="persistent"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							// display: { xs: 'block', sm: 'none' },
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth,
							},
							'& .MuiPaper-root': {
								bgcolor: [theme.palette.primary.main],
							},
						}}
						classes={{
							paper: classes.customMargin,
						}}
					>
						<Toolbar></Toolbar>
						<DrawerComponent categories={categories}></DrawerComponent>
						<Toolbar></Toolbar>
					</Drawer>
					<Toolbar></Toolbar>
					<Box
						sx={{
							width: {
								md: `calc(100% - ${drawerWidth}px)`,
							},
							ml: { md: `${drawerWidth}px` },
						}}
					>
						<Outlet></Outlet>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default Genres;

import { AppBar, Box, Container, Drawer, Toolbar } from '@mui/material';
import { useTheme } from '@mui/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';
import DrawerButtonToggler from '../components/DrawerButtonToggler';
import DrawerComponent from '../components/DrawerComponent';
import { useFetch } from '../customHooks/useFetch';
import { GetLocationFunction } from '../utils/GetLocationFunction';
import { MarginSettings } from '../utils/MarginSettings';

const Publishers = () => {
	const theme = useTheme();

	const [mobileOpen, setMobileOpen] = useState(window.innerWidth > 600);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const location = GetLocationFunction();
	const routeToGetPublishers = location.split('/', 1)[0];

	const drawerWidth = theme.drawerWidth;
	const [categories, setCategories, Loaded] = useFetch(
		`https://api.rawg.io/api/${routeToGetPublishers}?key=4396add0150d461aa3bcd0e3dc6d556e`
	);

	let navigate = useNavigate();
	const navigateToMain = () => {
		navigate(`${categories?.results[0].name}`);
	};
	let firstLoad = true;

	const initialPage = useCallback(() => {
		return categories?.results && firstLoad
			? (firstLoad = !navigateToMain())
			: null;
	}, [firstLoad, categories?.results]);
	useEffect(() => {
		initialPage();
	}, [initialPage]);

	const marginTopDrawerSettings = MarginSettings();
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
						shadow={0}
						sx={{
							position: 'absolute',
							my: 5,
							width: { md: `calc(100% - ${drawerWidth}px)` },
							ml: { md: `${drawerWidth}px` },
							boxShadow: 'none',
							zIndex: 1099,
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
							keepMounted: false,
						}}
						sx={{
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

export default Publishers;

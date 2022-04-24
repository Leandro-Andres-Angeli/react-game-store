import React, { useCallback, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Container from '@mui/material/Container';
import { Toolbar, Box, AppBar, Drawer } from '@mui/material';
import { useTheme } from '@mui/system';
import { GetLocationFunction } from '../utils/GetLocationFunction';
import DrawerComponent from '../components/DrawerComponent';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';
import { Outlet, useNavigate } from 'react-router-dom';

import { MarginSettings } from '../utils/MarginSettings';

const Genres = () => {
	const [genresList] = useContext(AppContext);

	const theme = useTheme();
	const marginTopDrawerSettings = MarginSettings();

	const location = GetLocationFunction();

	let navigate = useNavigate();
	const navigateToMain = () => {
		navigate(`${genresList?.results[0].name}`);
	};
	console.log('render');
	let firstLoad = true;

	const initialPage = useCallback(() => {
		return genresList?.results && firstLoad
			? (firstLoad = !navigateToMain())
			: null;
	}, [firstLoad, genresList?.results]);
	useEffect(() => {
		initialPage();
	}, [initialPage]);
	const drawerWidth = 240;

	const classes = marginTopDrawerSettings();

	return (
		<>
			<Container maxWidth="lg">
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
							width: { sm: `calc(100% - ${drawerWidth}px)` },
							ml: { sm: `${drawerWidth}px` },
							boxShadow: 'none',
						}}
					>
						<BreadcrumbsComponent
							route={location}
							navigateToMain={navigateToMain}
						></BreadcrumbsComponent>
					</AppBar>{' '}
					<Drawer
						classes={{
							paper: classes.customMargin,
						}}
						variant="permanent"
						sx={{
							'& .MuiPaper-root': {
								bgcolor: [theme.palette.primary.main],
							},
						}}
					>
						<Toolbar></Toolbar>
						<DrawerComponent genresList={genresList}></DrawerComponent>
						<Toolbar></Toolbar>
					</Drawer>
					<Toolbar></Toolbar>
					<Box
						sx={{
							width: { sm: `calc(100% - ${drawerWidth}px)` },
							ml: { sm: `${drawerWidth}px` },
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

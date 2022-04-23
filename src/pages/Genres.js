import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import Container from '@mui/material/Container';
import {
	Divider,
	List,
	ListItem,
	ListItemText,
	Toolbar,
	Box,
	Stack,
	Button,
	AppBar,
	Drawer,
	ListItemIcon,
} from '@mui/material';
import { useTheme } from '@mui/system';
import { GetLocationFunction } from '../utils/GetLocationFunction';
import DrawerComponent from '../components/DrawerComponent';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';
import {
	BrowserRouter,
	NavLink,
	Outlet,
	Route,
	Routes,
	useMatch,
	useNavigate,
} from 'react-router-dom';
import GenreComponent from '../components/GenreComponent';
import Home from './Home';
import { makeStyles } from '@mui/styles';
import { marginSettingsGenerator } from '../utils/MarginSettings';

const Genres = () => {
	const [genresList, setGenresList, Loading] = useContext(AppContext);

	const theme = useTheme();

	let mtSetting = JSON.stringify(theme.mixins.toolbar).replace(
		/minHeight/g,
		'marginTop'
	);

	mtSetting = JSON.parse(mtSetting);
	console.log(mtSetting);
	console.log([theme.mixins.Toolbar]);

	const location = GetLocationFunction();
	console.log(location);
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
	const useStyles = makeStyles({
		mtSetting,
	});
	const classes = useStyles();

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
						sx={{
							position: 'absolute',
							my: 5,
							width: { sm: `calc(100% - ${drawerWidth}px)` },
							ml: { sm: `${drawerWidth}px` },
						}}
					>
						<BreadcrumbsComponent
							route={location}
							navigateToMain={navigateToMain}
						></BreadcrumbsComponent>
					</AppBar>{' '}
					<Drawer
						classes={{
							paper: classes.mtSetting,
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

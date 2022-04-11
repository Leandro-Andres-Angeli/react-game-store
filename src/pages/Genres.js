import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Container from '@mui/material/Container';
import {
	Divider,
	List,
	ListItem,
	ListItemText,
	Toolbar,
	Box,
} from '@mui/material';
import { useTheme } from '@mui/system';
import { GetLocationFunction } from '../utils/GetLocationFunction';
import DrawerComponent from '../components/DrawerComponent';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';

const Genres = () => {
	const [genresList, setGenresList, Loading] = useContext(AppContext);
	const theme = useTheme();
	const location = GetLocationFunction();
	console.log(location);
	return (
		<>
			<Container maxWidth="lg">
				<BreadcrumbsComponent route={location}></BreadcrumbsComponent>
				{/* <DrawerComponent></DrawerComponent> */}
			</Container>
		</>

		// <Box sx={{ bgcolor: [theme.palette.primary.main], color: 'white' }}>
		// 	<Toolbar />
		// 	<Divider sx={{ bgcolor: [theme.palette.secondary.main] }} />
		// 	<List>
		// 		{genresList.results
		// 			? genresList.results?.map((genre, index) => (
		// 					<>
		// 						<ListItem button key={index}>
		// 							<ListItemText
		// 								primary={genre.name}
		// 								sx={{ textTransform: 'uppercase' }}
		// 							/>
		// 						</ListItem>
		// 						<Divider sx={{ bgcolor: [theme.palette.grey[50]] }} />
		// 					</>
		// 			  ))
		// 			: null}
		// 	</List>
		// 	<Divider />
		// </Box>
	);
};

export default Genres;

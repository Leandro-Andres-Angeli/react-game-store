import {
	Box,
	Button,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Stack,
	Toolbar,
} from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const DrawerComponent = ({ genresList }) => {
	// const [genresList, setGenresList, Loading] = useContext(AppContext);
	const theme = useTheme();

	return (
		// <Stack>
		<>
			<List>
				{genresList.results
					? genresList.results?.map((genre, index) => (
							<>
								<ListItem button key={index} component="li">
									<Button
										component={NavLink}
										to={genre.name}
										sx={{
											color: 'white',
											'&:hover': {
												color: [theme.palette.secondary.main],
											},
											'&.active': {
												color: [theme.palette.secondary.main],
											},
										}}
									>
										{genre.name}
									</Button>
								</ListItem>
								<Divider sx={{ bgcolor: [theme.palette.grey[50]] }} />
							</>
					  ))
					: null}
			</List>
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

export default DrawerComponent;

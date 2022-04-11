import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemText,
	Toolbar,
} from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const DrawerComponent = () => {
	const [genresList, setGenresList, Loading] = useContext(AppContext);
	const theme = useTheme();
	return (
		<Box sx={{ bgcolor: [theme.palette.primary.main], color: 'white' }}>
			<Toolbar />
			<Divider sx={{ bgcolor: [theme.palette.secondary.main] }} />
			<List>
				{genresList.results
					? genresList.results?.map((genre, index) => (
							<>
								<ListItem button key={index}>
									<ListItemText
										primary={genre.name}
										sx={{ textTransform: 'uppercase' }}
									/>
								</ListItem>
								<Divider sx={{ bgcolor: [theme.palette.grey[50]] }} />
							</>
					  ))
					: null}
			</List>
			<Divider />
		</Box>
	);
};

export default DrawerComponent;

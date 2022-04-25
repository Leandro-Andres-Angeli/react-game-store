import { Button, Divider, List, ListItem, Toolbar } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const DrawerComponent = ({ genresList }) => {
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
										key={genre.name}
										component={NavLink}
										to={genre.slug}
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
								<Divider sx={{ bgcolor: '#fafafa33' }} />
							</>
					  ))
					: null}
				<Toolbar></Toolbar>
			</List>
		</>
	);
};

export default DrawerComponent;

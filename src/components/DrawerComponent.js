import { Button, Divider, List, ListItem, Toolbar } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

import { GetLocationFunction } from '../utils/GetLocationFunction';
const DrawerComponent = ({ categories }) => {
	const theme = useTheme();
	const { setPage } = useContext(AppContext);
	const location = GetLocationFunction();
	const categoryString = location.split('/', location.length)[0];

	return (
		<>
			<List>
				{categories.results
					? categories.results?.map((category, index) => (
							<>
								<ListItem button key={index} component="li">
									<Button
										key={category.name}
										component={NavLink}
										onClick={() => {
											setPage(1);
										}}
										state={{ [categoryString]: `${category.id}` }}
										to={category.slug}
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
										{category.name}
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

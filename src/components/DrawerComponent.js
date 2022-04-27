import { Button, Divider, List, ListItem, Toolbar } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { GetLocationFunction } from '../utils/GetLocationFunction';
const DrawerComponent = ({ categories }) => {
	const theme = useTheme();

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

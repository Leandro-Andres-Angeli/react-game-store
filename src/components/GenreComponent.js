import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import { useFetch } from '../customHooks/useFetch';
import Grid from '@mui/material/Grid';

import { Box, CircularProgress, Typography } from '@mui/material';

import GameCard from './CardComponents/GameCard';
import PaginationSection from './PaginationSection';

const GenreComponent = () => {
	const params = useParams();

	const [page, setPage] = useState(1);

	let route = JSON.stringify(params)
		.replace(/"/g, '')
		.replace('{', '')
		.replace('}', '')
		.replace(':', 's=');
	route = route.includes('RPG') === false ? route.toLowerCase() : route;

	const URI = `${process.env.REACT_APP_API_BASE_URL}/games?page=${page}&page_size=24&${route}&key=${process.env.REACT_APP_API_KEY}`;

	const [data, setData, Loaded] = useFetch(URI);
	console.log(data);

	return (
		<Container sx={{ p: 3 }} maxWidth="lg">
			<Grid container spacing={{ xl: 5, lg: 3, md: 2 }}>
				{data?.results ? (
					data.results.map((game) => {
						return (
							<Grid item xs={12} md={6} lg={4} xl={3}>
								<GameCard game={game} loaded={Loaded}></GameCard>
							</Grid>
						);
					})
				) : (
					<Box
						sx={{
							width: '70vw',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Typography sx={{ mr: 3 }}>Loading...</Typography>{' '}
						<CircularProgress color="secondary" />
					</Box>
				)}
			</Grid>
			<PaginationSection
				total={Math.round(data.count / 24)}
				pageNumber={page}
				setPage={setPage}
			></PaginationSection>
		</Container>
	);
};

export default GenreComponent;

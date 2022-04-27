import React, { useContext, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import { useFetch } from '../customHooks/useFetch';
import Grid from '@mui/material/Grid';

import { Box, CircularProgress, Typography } from '@mui/material';
import { parseParams } from '../utils/parseParams';
import GameCard from './CardComponents/GameCard';
import PaginationSection from './PaginationSection';
import { AppContext } from '../context/AppContext';

const GenreComponent = () => {
	const params = useParams();

	const location = useLocation();
	const { page, setPage } = useContext(AppContext);

	let route = parseParams(location.state);

	const URI = `${process.env.REACT_APP_API_BASE_URL}/games?page=${page}&page_size=24&${route}&key=${process.env.REACT_APP_API_KEY}`;

	const [data, setData, Loaded] = useFetch(URI);
	console.log(data);
	return (
		<Container sx={{ p: 3 }} maxWidth="lg">
			<Grid
				container
				spacing={{ xl: 5, lg: 3, md: 2, sm: 2 }}
				sx={{ rowGap: { sm: '1rem', xs: '1rem' } }}
			>
				{data?.results ? (
					data.results.map((game) => {
						return (
							<Grid item xs={12} sm={6} lg={4} xl={3}>
								<GameCard
									game={game}
									URI={URI}
									page={page}
									loaded={Loaded}
								></GameCard>
							</Grid>
						);
					})
				) : (
					<Box
						sx={{
							width: '70vw',
							height: '80vh',
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
				total={Math.floor(data.count / 54)}
				pageNumber={page}
				setPage={setPage}
			></PaginationSection>
		</Container>
	);
};

export default GenreComponent;

import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import { useFetch } from '../customHooks/useFetch';
import Grid from '@mui/material/Grid';

import { Box, CircularProgress, Typography } from '@mui/material';
import { parseParams } from '../utils/parseParams';
import GameCard from './CardComponents/GameCard';
import PaginationNumbersSection from './shared/pagination/PaginationNumbersSection';
import PaginationArrowsSection from './shared/pagination/PaginationArrowsSection';
import { AppContext } from '../context/AppContext';

const GenreComponent = () => {
	const location = useLocation();
	const { page, setPage } = useContext(AppContext);

	let route = parseParams(location.state);

	const URI = `${process.env.REACT_APP_API_BASE_URL}/games?page=${page}&page_size=24&${route}&key=${process.env.REACT_APP_API_KEY}`;

	const [data, setData, Loaded] = useFetch(URI);

	const calcMaxPage = () => {
		let maxPage = Math.round(data.count / 24);
		return maxPage < 416 ? maxPage : 416;
	};

	return (
		<Container sx={{ p: 3 }} maxWidth="lg">
			<Grid
				container
				spacing={{ xl: 5, lg: 3, md: 2, sm: 2 }}
				sx={{ rowGap: { sm: '1rem', xs: '1rem' } }}
			>
				{data?.results ? (
					data.results.map((game, i) => {
						return (
							<Grid item key={i} xs={12} sm={6} lg={4} xl={3}>
								<GameCard
									key={game}
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
			{!location.pathname.includes('popular') &&
			!location.pathname.includes('publishers') ? (
				<PaginationNumbersSection
					total={calcMaxPage()}
					pageNumber={page}
					setPage={setPage}
				></PaginationNumbersSection>
			) : (
				<PaginationArrowsSection
					nextPage={data.next}
					prevPage={data.previous}
					{...{ setPage, page }}
				></PaginationArrowsSection>
			)}
		</Container>
	);
};

export default GenreComponent;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import { useFetch } from '../customHooks/useFetch';
import Grid from '@mui/material/Grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Collapse,
	IconButton,
	Typography,
} from '@mui/material';
import { grey, red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import { useTheme } from '@mui/styles';
import GameCard from './GameCard';

const GenreComponent = () => {
	const params = useParams();
	console.log(process.env.REACT_APP_API_BASE_URL);
	console.log(process.env.REACT_APP_API_KEY);
	const theme = useTheme();
	let route = JSON.stringify(params)
		.replace(/"/g, '')
		.replace('{', '')
		.replace('}', '')
		.replace(':', 's=');
	route = route.includes('RPG') === false ? route.toLowerCase() : route;

	const URI = `${process.env.REACT_APP_API_BASE_URL}/games?page=1&page_size=16&${route}&key=${process.env.REACT_APP_API_KEY}`;

	const [data, setData, Loaded] = useFetch(URI);
	console.log(URI);

	console.log(Loaded);
	return (
		<Container sx={{ p: 3 }} maxWidth="lg">
			<Grid container spacing={{ xl: 5, lg: 3, md: 2 }}>
				{data?.results ? (
					data.results.map((game) => {
						return (
							<Grid item xs={12} md={6} lg={4} xl={3}>
								<GameCard game={game}></GameCard>
							</Grid>
						);
					})
				) : (
					<p>Loading</p>
				)}
			</Grid>
		</Container>
	);
};

export default GenreComponent;

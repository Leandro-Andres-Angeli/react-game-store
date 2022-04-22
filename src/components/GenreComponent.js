import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';

const GenreComponent = () => {
	const params = useParams();
	console.log(params);
	return (
		<Container sx={{ p: 5 }} maxWidth="lg">
			Genre {params.genre}
		</Container>
	);
};

export default GenreComponent;

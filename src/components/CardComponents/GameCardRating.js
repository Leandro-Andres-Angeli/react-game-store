import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Box, Stack, Typography } from '@mui/material';
const GameCardRating = ({ rating }) => {
	return (
		<Box>
			<Stack direction="row" spacing={1} sx={{ my: 1 }}>
				{rating ? (
					Array.from({ length: Math.round(rating) }, (_, i) => (
						<StarIcon
							key={i}
							className="fa fa-star"
							aria-hidden="true"
							color="secondary"
						></StarIcon>
					))
				) : (
					<Typography sx={{ textTransform: 'uppercase' }}>
						No rating Available
					</Typography>
				)}
			</Stack>
		</Box>
	);
};

export default GameCardRating;

import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';

import { useTheme } from '@mui/styles';
import GameCardRating from './GameCardRating';
import CallToActionCard from './CallToActionCard';
import { Skeleton, Typography } from '@mui/material';

import './gameCardAnimations.css';

import GameModal from '../gameModal/GameModal';

export const GameCard = ({ game, URI }) => {
	let URIRef = React.useRef(URI);
	const [modal, setModal] = useState(false);
	const theme = useTheme();
	const price = 99.99;

	useEffect(() => {
		URIRef.current = URI;
	}, [URI]);

	let loadingVar = URI !== URIRef.current;

	return (
		<>
			{' '}
			<Card
				component="div"
				sx={{
					maxWidth: 345,
					bgcolor: [theme.palette.bg_card_header],
				}}
			>
				<CardHeader
					avatar={
						loadingVar ? (
							<Skeleton
								animation="wave"
								variant="circular"
								width={40}
								height={40}
							/>
						) : (
							<Avatar
								sx={{ bgcolor: [theme.palette.secondary.main] }}
								aria-label=""
							>
								🎮
							</Avatar>
						)
					}
					sx={{
						' .MuiCardHeader-title': {
							color: [theme.palette.secondary.main],
							fontWeight: 'bolder',
							textTransform: 'uppercase',
							overflow: 'hidden',
							whiteSpace: 'nowrap',
							textOverflow: ' ellipsis',
							// THE TRICK IS IN USING CALC!!
							width: 'calc(75%)',
						},
						'.MuiCardHeader-subheader': {
							fontSize: 'smaller',
							color: [theme.palette.neutral],
						},
					}}
					title={
						loadingVar ? (
							<Skeleton
								animation="wave"
								height={10}
								width="80%"
								style={{ marginBottom: 6 }}
							/>
						) : (
							game.name
						)
					}
					subheader={
						loadingVar ? (
							<Skeleton animation="wave" height={10} width="40%" />
						) : (
							game.released
						)
					}
				/>
				{loadingVar ? (
					<Skeleton
						sx={{ height: 194 }}
						animation="wave"
						variant="rectangular"
					/>
				) : (
					<CardMedia
						component="img"
						height="194"
						image={game.background_image || 'loading'}
						alt={game.slug}
					/>
				)}
				{loadingVar ? (
					<>
						<Skeleton animation="wave" height={25} sx={{ mt: 2 }} />
						<Skeleton animation="wave" height={30} width="20%" />
						<Skeleton animation="wave" height={40} width="100%" />
					</>
				) : (
					<>
						<CardContent>
							<GameCardRating rating={game.rating}></GameCardRating>
							<Typography color="secondary">{price} $</Typography>
						</CardContent>
						<CallToActionCard
							game={{
								id: game.id,
								name: game.name,

								platforms: game.platforms,
								price: price,
							}}
							modalState={[modal, setModal]}
						></CallToActionCard>
					</>
				)}
			</Card>
			<GameModal modalState={[modal, setModal]} game={game}></GameModal>
		</>
	);
};
export default GameCard;

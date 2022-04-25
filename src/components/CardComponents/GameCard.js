import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';

import { useTheme } from '@mui/styles';
import GameCardRating from './GameCardRating';
import CallToActionCard from './CallToActionCard';
import { Typography } from '@mui/material';
import { CSSTransition } from 'react-transition-group';
import './gameCardAnimations.css';
export const GameCard = ({ game, URI }) => {
	const [render, setRender] = useState(true);
	let gameRef = React.useRef();
	gameRef.current = game;
	const theme = useTheme();
	const price = 99.99;
	React.useEffect(() => {
		setRender(!render);
		console.log(gameRef.current);
		console.log(game);
		console.log(game == gameRef.current);
	}, []);

	return (
		<>
			<button
				onClick={() => {
					setRender(!render);
				}}
			>
				switch
			</button>
			<CSSTransition
				in={URI}
				timeout={{ appear: 0, enter: 0, exit: 300 }}
				classNames="roll"
				appear
			>
				<Card
					sx={{
						maxWidth: 345,
						bgcolor: [theme.palette.bg_card_header],
					}}
				>
					<CardHeader
						avatar={
							<Avatar
								sx={{ bgcolor: [theme.palette.secondary.main] }}
								aria-label=""
							>
								🎮
							</Avatar>
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
						title={game.name}
						subheader={game.released}
					/>
					<CardMedia
						component="img"
						height="194"
						image={game.background_image}
						alt={game.slug}
					/>
					<CardContent>
						<GameCardRating rating={game.rating}></GameCardRating>
						<Typography color="secondary">{price} $</Typography>
					</CardContent>
					<CallToActionCard></CallToActionCard>
				</Card>
			</CSSTransition>
		</>
	);
};
export default GameCard;

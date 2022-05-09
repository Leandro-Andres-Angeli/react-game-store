import React, { useEffect, useRef, useState } from 'react';

import modalStyles from './modalStyles';
import parse from 'html-react-parser';
import {
	Backdrop,
	Box,
	Card,
	CardContent,
	CardMedia,
	Fade,
	Modal,
	Typography,
	Grid,
} from '@mui/material';
import { useTheme } from '@mui/styles';
import { useFetch } from '../../customHooks/useFetch';
import GameSlider from './GameSlider';
import GameModalCTA from './GameModalCTA';
import ModalCard from './ModalCard';
const GameModal = ({ modalState, gameID }) => {
	const URI = `${process.env.REACT_APP_API_BASE_URL}/games/${gameID}?key=${process.env.REACT_APP_API_KEY}`;
	const gameData = useFetch(URI)[0];
	const colRef = useRef();
	const modalStyle = modalStyles;
	const theme = useTheme();
	const price = 99.99;

	const [modal, setModal] = modalState;
	const closeModal = () => {
		setModal(false);
	};
	useEffect(() => {
		console.log(colRef);
	}, [colRef]);
	return (
		<Modal
			aria-labelledby="modal-game"
			aria-describedby="modal-game"
			open={modal}
			onClose={closeModal}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={modal}>
				{/* //important wrap into a div otherwise will fail */}
				<div>
					<ModalCard>
						<Grid container spacing={{ xs: 1, md: 2, lg: 3 }}>
							<Grid
								item
								sx={{ flex: 1, display: { sm: 'none', md: 'block' } }}
								xs={12}
								md={6}
							>
								<CardMedia
									component="img"
									sx={{ width: '100%', height: '70%' }}
									image={gameData?.background_image}
									alt={gameData?.name}
								/>
								{/* <GameSlider></GameSlider> */}
							</Grid>
							<Grid
								xs={12}
								md={6}
								sx={{
									flex: 1,
									display: 'grid',
									gridTemplateRows: '70% 30%',
								}}
							>
								<CardContent sx={{ pt: 0, h2: { fontWeight: 'bold' } }}>
									<Typography
										color="secondary"
										variant="h2"
										sx={{ fontSize: 30 }}
									>
										{gameData?.name}
									</Typography>
									<Typography variant="h5" sx={{ fontStyle: 'italic' }}>
										{price} $
									</Typography>
									<Typography
										paragraph
										sx={{ fontSize: 13, height: ' 95%', overflow: ' auto' }}
									>
										{parse(`${gameData?.description}`)}
									</Typography>
								</CardContent>
								<GameModalCTA></GameModalCTA>
							</Grid>
						</Grid>
					</ModalCard>
				</div>
			</Fade>
		</Modal>
	);
};

export default GameModal;

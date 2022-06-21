import React, { useEffect, useRef, useState } from 'react';

import parse from 'html-react-parser';
import {
	Backdrop,
	CardContent,
	CardMedia,
	Fade,
	Modal,
	Typography,
	Grid,
	IconButton,
} from '@mui/material';

import { useFetch } from '../../customHooks/useFetch';
import GameSlider from './GameSlider';
import GameModalCTA from './GameModalCTA';
import ModalCard from './ModalCard';
import CloseIcon from '@mui/icons-material/Close';
import SnackbarComponent from '../../snackbar/SnackbarComponent';
import CheckoutLink from '../shared/CheckoutLink';
import CheckoutButton from '../../snackbar/CheckoutButton';
import CloseButtonSnackbar from '../../snackbar/CloseButtonSnackbar';
import { filterGameModal } from '../../customHooks/filterFetch';

const GameModal = ({ modalState, gameID, gamePlatforms }) => {
	const URI = `${process.env.REACT_APP_API_BASE_URL}/games/${gameID}?key=${process.env.REACT_APP_API_KEY}`;
	const gameData = useFetch(URI, filterGameModal)[0];

	const colRef = useRef();

	const [add, setAdd] = useState(true);
	const [closeSnackbar, setCloseSnackbar] = useState(false);
	const [toggleSnackbarCart, setToggleSnackbarCart] = useState(false);
	const [failAddedToCart, setFailAddedtoCart] = useState(false);

	const price = 99.99;

	const [modal, setModal] = modalState;
	const closeModal = () => {
		setModal(false);
	};
	useEffect(() => {}, [colRef]);
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
			<Fade in={!!modal}>
				{/* //important wrap into a div otherwise will fail */}
				<div>
					<ModalCard
						sx={{
							marginTop: 'auto' > 10 ? 'auto' : 10,
							'.MuiPaper-root': { overflow: 'auto' },
						}}
					>
						<IconButton
							sx={{ position: 'absolute', top: 0, right: 0, color: 'white' }}
						>
							<CloseIcon onClick={closeModal} />
						</IconButton>
						<Grid container spacing={{ xs: 1, md: 2, lg: 3 }}>
							<Grid
								item
								sx={{
									flex: 1,
									display: {
										xs: 'none',
										sm: 'none',
										md: 'flex',
										justifyContent: ' space-evenly',
										flexDirection: 'column',
									},
								}}
								xs={12}
								md={6}
							>
								<CardMedia
									component="img"
									sx={{ width: '90%', height: '70%', m: `.5rem auto` }}
									image={gameData?.background_image}
									alt={gameData?.name}
								/>
								<GameSlider gameData={gameData}></GameSlider>
							</Grid>
							<Grid
								item
								xs={12}
								md={6}
								sx={{
									flex: 1,
									display: 'grid',
									gridTemplateRows: '70% 30%',
								}}
							>
								<CardContent sx={{ h2: { fontWeight: 'bold' } }}>
									<Typography
										color="secondary"
										variant="h2"
										sx={{
											fontSize: 30,
											textTransform: 'uppercase',
											mt: { xs: 6, md: 'none' },
										}}
									>
										{gameData?.name}
									</Typography>
									<Typography variant="h5" sx={{ fontStyle: 'italic' }}>
										{price} $
									</Typography>
									<Typography
										paragraph
										sx={{
											fontSize: 13,
											letterSpacing: 2,
											fontWeight: 'lighter',
											overflow: ' auto',
											py: { sm: 5, xs: 5, md: 10 },
										}}
									>
										{parse(`${gameData?.description}`)}
									</Typography>
									<GameModalCTA
										{...{
											setFailAddedtoCart,
											setToggleSnackbarCart,
											add,
											setAdd,
											setCloseSnackbar,
										}}
										price={price}
										gamePlatforms={gamePlatforms}
										game={gameData}
									></GameModalCTA>
								</CardContent>
							</Grid>
						</Grid>
					</ModalCard>
					<SnackbarComponent
						add={failAddedToCart}
						closeSnackbar={toggleSnackbarCart}
						setCloseSnackbar={setToggleSnackbarCart}
						positionY={'bottom'}
						msg={
							failAddedToCart ? 'added to cart' : 'required platform selection'
						}
						snackAction={
							<>
								{failAddedToCart && (
									<CheckoutLink>
										{' '}
										<CheckoutButton></CheckoutButton>
									</CheckoutLink>
								)}

								<CloseButtonSnackbar
									setCloseSnackbar={setToggleSnackbarCart}
								></CloseButtonSnackbar>
							</>
						}
					></SnackbarComponent>
					<SnackbarComponent
						add={add}
						closeSnackbar={closeSnackbar}
						setCloseSnackbar={setCloseSnackbar}
						positionY={'bottom'}
						msg={!add ? ' added to favorites' : 'removed from favorites'}
						snackAction={
							<CloseButtonSnackbar
								setCloseSnackbar={setCloseSnackbar}
							></CloseButtonSnackbar>
						}
					></SnackbarComponent>
				</div>
			</Fade>
		</Modal>
	);
};

export default GameModal;

import React from 'react';
import modalStyles from './modalStyles';
import {
	Backdrop,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Fade,
	Modal,
	Typography,
} from '@mui/material';
import { useTheme } from '@mui/styles';
const GameModal = ({ modalState, game }) => {
	console.log(game);
	const modalStyle = modalStyles;
	const theme = useTheme();
	console.log(modalStyle);
	const [modal, setModal] = modalState;
	const closeModal = () => {
		setModal(false);
	};
	return (
		<Modal
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
			open={modal}
			onClose={closeModal}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={modal}>
				<Box sx={modalStyle}>
					<Card
						sx={{
							bgcolor: theme.palette.bg_card_modal,
							display: 'flex',

							p: 2,
						}}
					>
						<Box>
							<CardMedia
								component="img"
								sx={{ flex: 1 }}
								image={game.background_image}
								alt={game.name}
							/>
						</Box>
						<Box sx={{ flex: 1 }}>
							<CardContent>
								<Typography color="secondary" variant="h2">
									{game.name}
								</Typography>
							</CardContent>
							<CardActions>
								<Button variant="contained" size="small">
									Learn More
								</Button>
							</CardActions>
						</Box>
					</Card>
				</Box>
			</Fade>
		</Modal>
	);
};

export default GameModal;

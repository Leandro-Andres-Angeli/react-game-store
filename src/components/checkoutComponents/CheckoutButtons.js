import { Button, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { AppContext } from '../../context/AppContext';
import CancelIcon from '@mui/icons-material/Cancel';
import { blue, red } from '@mui/material/colors';
import { ACTIONS } from '../reducers/actions';
import { useNavigate } from 'react-router-dom';
import SnackbarComponent from '../../snackbar/SnackbarComponent';
const CheckoutButtons = ({ handleStep, activeStep, steps }) => {
	const context = useContext(AppContext);
	let navigate = useNavigate();
	const [orderAction, setOrderAction] = useState({});
	const orderSubmit = (actionOrder) => {
		context.dispatchCart({ type: ACTIONS.RESET });
		context.setCardData([]);
		setOrderAction(actionOrder);
		setTimeout(() => {
			navigate('/', { replace: true });
		}, 3500);
	};
	useEffect(() => {
		localStorage.setItem('card', JSON.stringify(context.cardData));
	}, [context.cardData]);
	console.log(orderAction);
	return (
		<>
			<Stack
				direction="row"
				spacing={2}
				justifyContent={'end'}
				sx={{
					button: { color: 'white' },
					p: 3,
				}}
			>
				{activeStep !== 0 && (
					<Button
						variant="contained"
						color="secondary"
						size="small"
						startIcon={<ArrowLeftIcon />}
						onClick={() => {
							handleStep(activeStep > 0 ? -1 : 0);
						}}
					>
						prev
					</Button>
				)}
				{activeStep === steps.length && (
					<Button
						variant="contained"
						size="small"
						sx={{ bgcolor: red[500], '&:hover': { bgcolor: red[700] } }}
						endIcon={<CancelIcon />}
						onClick={() => {
							orderSubmit({ submit: true, msg: 'canceled order' });
						}}
					>
						cancel purchase
					</Button>
				)}

				{context.cart.items.length > 0 && activeStep < steps.length ? (
					<Button
						variant="contained"
						size="small"
						color="secondary"
						disabled={context.cardData.length === 0 && activeStep === 1}
						onClick={() => {
							handleStep(activeStep < steps.length ? +1 : 0);
						}}
						endIcon={<ArrowRightIcon />}
					>
						{activeStep !== steps.length ? 'next' : 'confirm purchase'}
					</Button>
				) : null}
				{activeStep === steps.length && (
					<Button
						variant="contained"
						size="small"
						sx={{ bgcolor: blue[500], '&:hover': { bgcolor: blue[700] } }}
						endIcon={<ThumbUpOffAltIcon />}
						onClick={() => {
							orderSubmit({ submit: true, msg: 'confirmed order' });
						}}
					>
						confirm purchase
					</Button>
				)}
			</Stack>
			<SnackbarComponent
				msg={orderAction.msg}
				positionY={'bottom'}
				closeSnackbar={orderAction.submit}
				// closeSnackbar={orderAction.submit}
				// setCloseSnackbar={true}
				setCloseSnackbar={() => {
					setOrderAction({ ...orderAction, submit: false });
				}}
			></SnackbarComponent>
		</>
	);
};

export default CheckoutButtons;

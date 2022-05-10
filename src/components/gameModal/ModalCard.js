import React from 'react';
import { Card, styled } from '@mui/material';

const ModalCard = styled(Card)(({ theme }) => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90%',
	maxHeight: '90vh',
	overflow: ' auto',
	padding: { md: 15, sx: 2 },
	border: '.5  solid #000',
	boxShadow: 24,
	backgroundColor: theme.palette.bg_card_modal,
}));

export default function StyledModalCard({ children }) {
	return <ModalCard>{children} </ModalCard>;
}

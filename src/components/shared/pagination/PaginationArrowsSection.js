import { Button, Stack } from '@mui/material';

import React from 'react';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const PaginationNumbersSection = ({
	initialPage,
	nextPage,
	prevPage,
	setPage,
	page,
}) => {
	return (
		<Stack
			spacing={1}
			sx={{
				my: 4,
				display: 'flex',
				fontSize: 16,
				button: {
					borderColor: '#ffffffd1 ',
					color: '#ffffffd1',
					'&:hover': { borderColor: 'inherit' },
				},
			}}
			direction={'row'}
			justifyContent="end"
		>
			<Button
				size="small"
				variant="outlined"
				onClick={() => {
					setPage(1);
				}}
				disabled={prevPage === null}
			>
				<FirstPageIcon></FirstPageIcon>
			</Button>
			<Button
				size="small"
				variant="outlined"
				onClick={() => {
					setPage(page - 1);
				}}
				disabled={prevPage === null}
			>
				<ArrowBackIosNewIcon></ArrowBackIosNewIcon>
			</Button>
			<Button
				size="small"
				variant="outlined"
				onClick={() => {
					setPage(page + 1);
				}}
				disabled={nextPage === null}
			>
				<ArrowForwardIosIcon></ArrowForwardIosIcon>
			</Button>
		</Stack>
	);
};

export default PaginationNumbersSection;

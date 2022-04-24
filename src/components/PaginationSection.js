import { Pagination, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/styles';
import React from 'react';

const PaginationSection = ({ pageNumber, setPage, total }) => {
	const theme = useTheme();
	console.log(pageNumber);
	return (
		<Stack spacing={2} sx={{ my: 4, display: 'flex' }}>
			<Pagination
				showFirstButton
				count={total}
				page={pageNumber}
				variant="outlined"
				shape="rounded"
				onChange={(e, v) => {
					setPage(v);
				}}
				sx={{
					alignSelf: 'end',
					' button': {
						borderColor: grey[500],
						'&[aria-current="true"]': {
							color: theme.palette.secondary.main,
							borderColor: theme.palette.secondary.main,
						},
					},
				}}
			/>
		</Stack>
	);
};

export default PaginationSection;

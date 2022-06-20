import { Pagination, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/styles';
import React from 'react';

const PaginationNumbersSection = ({ pageNumber, setPage, total }) => {
	const theme = useTheme();

	return (
		<Stack spacing={0} sx={{ my: 4, display: 'flex' }}>
			<Pagination
				showFirstButton
				showLastButton
				count={total}
				page={pageNumber}
				variant="outlined"
				shape="rounded"
				onChange={(e, v) => {
					setPage(v);
				}}
				sx={{
					alignSelf: 'end',
					'	ul': {
						flexWrap: { xs: 'nowrap', md: 'wrap' },
					},

					' button': {
						borderColor: grey[500],
						border: '.5px solid',
						fontSize: { xs: 10, md: 12 },
						minWidth: { xs: 20, md: 32 },
						height: { xs: 20, md: 32 },

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

export default PaginationNumbersSection;

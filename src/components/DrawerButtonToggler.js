import { Button } from '@mui/material';
import React from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const DrawerButtonToggler = ({ handleDrawerToggle }) => {
	return (
		<Button
			sx={{
				color: 'white',
				position: 'sticky',
				// position: 'fixed',
				// inset: '30% 5px auto auto',
				inset: '30% 99% auto',
				zIndex: 1201,
			}}
			variant="contained"
			color="secondary"
			startIcon={<KeyboardDoubleArrowLeftIcon />}
			aria-label="open drawer"
			edge="start"
			onClick={handleDrawerToggle}
		>
			Side Menu
		</Button>
	);
};

export default DrawerButtonToggler;

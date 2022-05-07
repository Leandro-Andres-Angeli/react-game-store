import {
	Menu,
	List,
	Typography,
	ListItem,
	Button,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	FormControl,
	Divider,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/styles';
import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../../context/AppContext';

const OrderMenuComponent = ({ handleClose, open, anchorEl, game }) => {
	const context = useContext(AppContext);

	const theme = useTheme();
	const handleAddProduct = (e) => {
		e.preventDefault();

		const { name, price, id } = game;
		const payload = { name, price, id, platform: labelValue.current };
		console.log(labelValue.current);
		context.dispatchCart({ type: 'add', payload });
	};
	let labelValue = useRef(null);
	return (
		<Menu
			sx={{
				top: -50,

				'.MuiPaper-root': { color: [theme.palette.primary.main], px: 3, py: 2 },
				'.css-ato29r-MuiButtonBase-root-MuiRadio-root.Mui-checked': {
					color: [theme.palette.secondary.main],
				},
			}}
			anchorEl={anchorEl}
			id="account-menu"
			open={open}
			transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			onClose={handleClose}
			// onClick={handleClose}
		>
			<List>
				<Typography
					sx={{
						color: [theme.palette.secondary.main],
						textTransform: 'uppercase',
						fontWeight: 'bolder',
					}}
				>
					order game
				</Typography>
				<Divider></Divider>
				<ListItem sx={{ fontWeight: 'bolder' }}>
					{' '}
					<Typography sx={{ textTransform: 'uppercase' }}>
						name :
					</Typography>{' '}
					{game.name}
				</ListItem>
				<ListItem sx={{ fontWeight: 'bolder' }}>
					{' '}
					<Typography sx={{ textTransform: 'uppercase' }}>
						price :
					</Typography>{' '}
					{game.price} $
				</ListItem>
			</List>
			<form>
				<FormControl
					sx={{
						'.MuiRadio-root': { color: [theme.palette.primary.main] },
					}}
				>
					<FormLabel
						id="demo-radio-buttons-group-label"
						sx={{
							textTransform: 'uppercase',
							fontWeight: 'bolder',
							display: 'block',
							color: [theme.palette.secondary.main],
						}}
						color="secondary"
					>
						select platform
					</FormLabel>
					<Divider></Divider>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						name="radio-buttons-group"
						ref={labelValue}
						// onChange={(e) => {
						// 	console.log(e.target.value);
						// }}
						onChange={(e) => {
							labelValue.current = {
								id: e.target.value,
								platform: e.target.parentElement.nextSibling.textContent,
							};
						}}
					>
						{game.platforms.map((platform) => {
							return (
								<FormControlLabel
									value={platform.platform.id}
									control={<Radio />}
									label={platform.platform.name}
								/>
							);
						})}
					</RadioGroup>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						onClick={handleAddProduct}
					>
						order
					</Button>
				</FormControl>
			</form>
		</Menu>
	);
};

export default OrderMenuComponent;

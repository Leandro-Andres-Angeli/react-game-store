import React, { useRef, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import {
	Button,
	CardActions,
	IconButton,
	TextField,
	Box,
	Stack,
	Divider,
	InputLabel,
	Select,
	MenuItem,
} from '@mui/material';
import { useTheme } from '@mui/styles';
import AddToFavoriteButton from '../shared/AddToFavoriteButton';
import SnackbarComponent from '../../snackbar/SnackbarComponent';
import FavoriteSnackAction from '../../snackbar/FavoriteSnackAction';

const GameModalCTA = ({ gamePlatforms, game }) => {
	const [add, setAdd] = useState(true);
	const [closeSnackbar, setCloseSnackbar] = useState(false);
	let qtyRef = useRef(1);
	// const toFavorite = () => {
	// 	setAdd(!add);
	// };
	const theme = useTheme();

	return (
		<>
			<CardActions
				sx={{
					flexDirection: 'column',
					rowGap: 3,
					alignItems: { sx: 'start', md: 'end' },
					marginBottom: { md: 7, sx: 'auto', sm: 'auto' },
				}}
			>
				<Box
					sx={{
						alignSelf: ' stretch',
						display: 'inline-grid',
						'.MuiOutlinedInput-root': { border: '1px solid white' },
						svg: { color: 'white' },
					}}
				>
					<InputLabel
						id="select-label"
						sx={{
							color: theme.palette.secondary.main,
							fontWeight: 'bolder',
							textTransform: 'uppercase',
							mb: 2,
						}}
					>
						Select Platform
					</InputLabel>
					<Select
						labelId="select-platform-label"
						id="select-platform-select"
						label="Platform"
						name="platforms-selection"
						defaultValue={0}
						onChange={(e) => {
							console.log(e.target.value);
						}}
					>
						<MenuItem disabled value={0} sx={{ color: 'black' }}>
							---selec platform---
						</MenuItem>
						;
						{gamePlatforms.map((gamePlatform, i) => {
							return (
								<MenuItem
									sx={{ color: 'black' }}
									// value={gamePlatform.platform.id}
									value={
										`${gamePlatform.platform.id}` +
										',' +
										`${gamePlatform.platform.name}`
									}
									key={i}
								>
									{gamePlatform.platform.name}
								</MenuItem>
							);
						})}
					</Select>
				</Box>
				<Stack
					direction="row"
					sx={{ width: '100%', px: { md: 5 } }}
					justifyContent="space-around"
					divider={
						<Divider
							orientation="vertical"
							flexItem
							sx={{
								background: '#f9f9f94f',
								display: { xs: 'none', sm: 'block', md: 'block' },
							}}
						/>
					}
					spacing={2}
				>
					<Box
						sx={{
							position: 'relative',
							flexBasis: { xs: '35%', sm: '20%', md: '20%' },
						}}
					>
						<TextField
							name="quantity-field"
							value={1}
							ref={qtyRef}
							min={1}
							sx={{
								button: {
									borderRadius: 0,
									minWidth: { md: '1em', sm: 'auto' },
									height: { md: '1em', sm: 'auto' },
									padding: 0,
								},

								'& label.Mui-focused': {
									color: 'white',
								},
								'& .MuiInput-underline:after': {
									borderBottomColor: 'white',
								},
								'& .MuiOutlinedInput-root': {
									'& fieldset': {
										borderColor: 'white',
									},

									'&.Mui-focused fieldset': {
										borderColor: 'white',
									},
								},
							}}
							aria-label="quantity-purchase"
							inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
						/>
						<Box
							component={'button'}
							sx={{ border: '1px solid white', position: 'absolute', right: 0 }}
						>
							<ArrowDropUpIcon
								onClick={() => {
									qtyRef.current.childNodes[0].childNodes[0].value++;
								}}
							></ArrowDropUpIcon>
						</Box>
						<Box
							component={'button'}
							sx={{
								border: '1px solid white',
								position: 'absolute',
								right: 0,
								bottom: 0,
							}}
						>
							<ArrowDropDownIcon
								onClick={() => {
									return qtyRef.current.childNodes[0].childNodes[0].value > 1
										? qtyRef.current.childNodes[0].childNodes[0].value--
										: 0;
								}}
							></ArrowDropDownIcon>
						</Box>
					</Box>
					<Button
						type="submit"
						variant="outlined"
						color="secondary"
						size="large"
						sx={{
							mt: { xs: 3, sm: 3, md: 'auto' },
							mr: { sx: 'auto', sm: 'auto' },
						}}
					>
						<Box sx={{ display: { xs: 'none', md: 'block', sm: 'block' } }}>
							{' '}
							add to cart
						</Box>
						<AddIcon
							sx={{
								marginBottom: 0.5,
								display: { xs: 'block', md: 'none', sm: 'none' },
							}}
						/>
					</Button>

					<AddToFavoriteButton
						game={game}
						addState={{ add, setAdd }}
						setCloseSnackbar={setCloseSnackbar}
					></AddToFavoriteButton>
				</Stack>
			</CardActions>
			<SnackbarComponent
				add={add}
				closeSnackbar={closeSnackbar}
				setCloseSnackbar={setCloseSnackbar}
				positionY={'bottom'}
				msg={`Favorites`}
				snackAction={
					<FavoriteSnackAction
						setCloseSnackbar={setCloseSnackbar}
					></FavoriteSnackAction>
				}
			></SnackbarComponent>
		</>
	);
};

export default GameModalCTA;

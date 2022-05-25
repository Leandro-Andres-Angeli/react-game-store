import { Badge, Box, Button, List, ListItem, Menu } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { grey, red } from '@mui/material/colors';
import FavoriteButtonNavbarItem from './FavoriteButtonNavbarItem';
import { ACTIONS } from '../reducers/actions';

const FavoriteButtonNavbar = () => {
	const context = useContext(AppContext);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = !!anchorEl;
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	return (
		<Box>
			<Button
				onClick={handleClick}
				id="positioned-favorite"
				aria-controls={open ? 'demo-positioned-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
			>
				<Badge badgeContent={context.favorite?.length} color="secondary">
					<FavoriteIcon></FavoriteIcon>
				</Badge>
			</Button>
			{context.favorite.length > 0 && (
				<Menu
					id="demo-positioned-menu"
					aria-labelledby="demo-positioned-button"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					transformOrigin={{ horizontal: 'right', vertical: 'top' }}
					anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
					PaperProps={{
						sx: {
							overflowY: 'visible',
							overflowX: 'visible',
							// '.MuiPaper-root ': { overflow: ' visible' },
							color: grey[700],
							'&::before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: 'background.paper',
								transform: 'translateY(-50%) rotate(45deg)',
								zIndex: 0,
							},
						},
					}}
				>
					<List sx={{ maxHeight: '60vh', overflow: ' scroll' }}>
						{context.favorite?.map((item) => {
							return (
								<FavoriteButtonNavbarItem
									item={item}
									key={item.id}
								></FavoriteButtonNavbarItem>
							);
						})}
						<ListItem>
							<Button
								variant="contained"
								sx={{
									marginLeft: 'auto',
									bgcolor: red[900],
									'&:hover': { bgcolor: red[400] },
								}}
								onClick={() => {
									context.dispatchFavorite({ type: ACTIONS.RESET });
								}}
							>
								Reset
							</Button>
						</ListItem>
					</List>
				</Menu>
			)}
		</Box>
	);
};

export default FavoriteButtonNavbar;

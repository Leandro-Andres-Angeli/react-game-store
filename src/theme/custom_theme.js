import { createTheme } from '@mui/material';

export const custom_theme = createTheme({
	palette: {
		primary: {
			main: '#1d1427',
			light: '#1d1427',
			dark: '#1d1427',
		},
		secondary: {
			main: '#f9aa01',
			light: '#f9aa01',
			dark: '#f9aa01',
		},
	},
	typography: {
		h1: {
			fontSize: '2.5rem',
		},
	},
});

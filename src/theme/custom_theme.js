import { createTheme } from '@mui/material';

export const custom_theme = createTheme({
	palette: {
		type: 'dark',
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
		background: {
			default: '#1d1427',
		},
		text: {
			default: '#f3f4f7',
			disabled: '#f3f4f7',
			primary: '#f3f4f7',
			secondary: '#f3f4f7',
		},
	},
	typography: {
		h1: {
			fontSize: '2.5rem',
		},
	},
	slider_height: '80vh',
});

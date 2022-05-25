import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { custom_theme } from './theme/custom_theme';
import { AppContext } from './context/AppContext';
//WRAP APP FIRST WITH CSSBASELINE COMPONENT AND THEN WITH CUSTOM THEME TO OVERRIDE GLOBAL STYLES

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={custom_theme}>
				<CssBaseline>
					<App />
				</CssBaseline>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,

	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

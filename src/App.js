import './App.css';
import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router-dom';

import { routes } from './utils/routes';
import { AppContext } from './context/AppContext';
import { GenresList } from './context_resources/GenresList';
import { useState } from 'react';
import { useTheme } from '@mui/styles';
import { GlobalStyles } from '@mui/material';

function App() {
	const routesComponents = routes;
	// const genres = useState(GenresList());
	// console.log(genres);
	const contextVar = GenresList();
	console.log('contextVar');
	console.log(contextVar);
	const theme = useTheme();
	console.log(theme.palette.background);
	return (
		<AppContext.Provider value={contextVar}>
			<Navbar></Navbar>
			<Routes>
				{routesComponents.map((route, i) =>
					route.name === 'home' ? (
						<Route key={i} path="/" element={route.component}></Route>
					) : route.name === 'notfound' ? (
						<Route key={i} path="*" element={route.component}></Route>
					) : (
						<Route key={i} path={route.name} element={route.component}></Route>
					)
				)}
			</Routes>
		</AppContext.Provider>
	);
}

export default App;

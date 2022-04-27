import './App.css';
import Navbar from './components/NavbarComponents/Navbar';

import { Route, Routes } from 'react-router-dom';

import { routes } from './utils/routes';
import { AppContext } from './context/AppContext';
import { GenresList } from './context_resources/GenresList';
import { useState } from 'react';
import { useTheme } from '@mui/styles';
import { GlobalStyles } from '@mui/material';
import CategoriesContainerComponent from './components/CategoriesContainerComponent';

function App() {
	const routesComponents = routes;
	// const genres = useState(GenresList());
	// console.log(genres);
	const contextVar = GenresList();

	const [page, setPage] = useState(1);
	const theme = useTheme();

	return (
		<AppContext.Provider value={{ contextVar, page, setPage }}>
			<Navbar></Navbar>

			<Routes>
				{routesComponents.map((route, i) =>
					route.name === 'home' ? (
						<Route key={i} path="/" element={route.component}></Route>
					) : route.name === 'notfound' ? (
						<Route key={i} path="*" element={route.component}></Route>
					) : route.name === 'genres' ? (
						<Route key={i} path={route.name} element={route.component}>
							<Route
								path=":genres"
								element={<CategoriesContainerComponent />}
							></Route>
						</Route>
					) : route.name === 'platforms' ? (
						<Route key={i} path={route.name} element={route.component}>
							<Route
								path=":path"
								element={<CategoriesContainerComponent />}
							></Route>
						</Route>
					) : (
						<Route key={i} path={route.name} element={route.component}></Route>
					)
				)}
			</Routes>
		</AppContext.Provider>
	);
}

export default App;

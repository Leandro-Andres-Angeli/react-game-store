import './App.css';
import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router-dom';

import { routes } from './utils/routes';
import { AppContext } from './context/AppContext';
import { GenresList } from './context_resources/GenresList';
import { useState } from 'react';
import { useTheme } from '@mui/styles';
import { GlobalStyles } from '@mui/material';
import GenreComponent from './components/GenreComponent';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import About from './pages/About';
import Platforms from './pages/Platforms';
import PopularGames from './pages/PopularGames';
import Genres from './pages/Genres';

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
				{/* { name: 'home', component: <Home /> },
	{ name: 'genres', component: <Genres /> },
	{ name: 'popular', component: <PopularGames /> },
	{ name: 'platforms', component: <Platforms /> },
	{ name: 'about', component: <About /> },
	{ name: 'contact', component: <Contact /> },

	{ name: 'notfound', component: <NotFound /> }, */}
				{/* <Route path="/" element={<Home />}></Route>
				<Route path="/genres/" element={<Genres />}>
					<Route path=":genre" element={<GenreComponent />}></Route>
				</Route>
				<Route path="/popular" element={<PopularGames />}></Route>
				<Route path="/platforms" element={<Platforms />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="*" element={<NotFound />}></Route> */}

				{routesComponents.map((route, i) =>
					route.name === 'home' ? (
						<Route key={i} path="/" element={route.component}></Route>
					) : route.name === 'notfound' ? (
						<Route key={i} path="*" element={route.component}></Route>
					) : route.name === 'genres' ? (
						<Route key={i} path={route.name} element={route.component}>
							<Route path=":genre" element={<GenreComponent />}></Route>
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

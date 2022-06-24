import './App.css';
import Navbar from './components/NavbarComponents/Navbar';

import { Route, Routes } from 'react-router-dom';

import { routes } from './utils/routes';
import { AppContext } from './context/AppContext';
import { GenresList } from './context_resources/GenresList';
import { lazy, Suspense, useState } from 'react';
import { useReducer } from 'react';

// import CategoriesContainerComponent from './components/CategoriesContainerComponent';
import initialStateCart from './components/reducers/initialStateCart';
import { cartReducer } from './components/reducers/cartReducer';
import { favoriteReducer } from './components/reducers/favoriteReducer';
import initialStateFavorite from './components/reducers/initialStateFavorite';
import Footer from './components/Footer';
import Container from '@mui/material/Container';
import FallbackComponent from './components/FallbackComponent';

const CategoriesContainerComponent = lazy(() =>
	import('./components/CategoriesContainerComponent')
);
function App() {
	const routesComponents = routes;
	// const genres = useState(GenresList());
	// console.log(genres);
	const contextVar = GenresList();

	const [page, setPage] = useState(1);

	let [cart, dispatchCart] = useReducer(cartReducer, initialStateCart);
	const [favorite, dispatchFavorite] = useReducer(
		favoriteReducer,
		initialStateFavorite
	);
	return (
		<AppContext.Provider
			value={{
				contextVar,
				page,
				setPage,
				cart,
				dispatchCart,
				favorite,
				dispatchFavorite,
			}}
		>
			<Navbar></Navbar>

			<Routes>
				{routesComponents.map((route, i) =>
					route.name === 'home' ? (
						<Route
							key={i}
							path="/"
							element={
								<Suspense fallback={<FallbackComponent></FallbackComponent>}>
									{route.component}
								</Suspense>
							}
						></Route>
					) : route.name === 'notfound' ? (
						<Route
							key={i}
							path="*"
							element={
								<Suspense fallback={<FallbackComponent />}>
									{' '}
									{route.component}
								</Suspense>
							}
						></Route>
					) : route.name === 'genres' ? (
						<Route
							key={i}
							path={route.name}
							element={
								<Suspense fallback={<FallbackComponent />}>
									{route.component}
								</Suspense>
							}
						>
							<Route
								path=":genres"
								element={
									<Suspense fallback={<FallbackComponent />}>
										<CategoriesContainerComponent />
									</Suspense>
								}
							></Route>
						</Route>
					) : route.name === 'platforms' ? (
						<Route
							key={i}
							path={route.name}
							element={
								<Suspense fallback={<FallbackComponent />}>
									{' '}
									{route.component}
								</Suspense>
							}
						>
							<Route
								path=":path"
								element={
									<Suspense fallback={<FallbackComponent />}>
										<CategoriesContainerComponent />
									</Suspense>
								}
							></Route>
						</Route>
					) : route.name === 'publishers' ? (
						<Route
							key={i}
							path={route.name}
							element={
								<Suspense fallback={<FallbackComponent />}>
									{' '}
									{route.component}
								</Suspense>
							}
						>
							<Route
								path=":path"
								element={
									<Suspense fallback={<FallbackComponent />}>
										<CategoriesContainerComponent />
									</Suspense>
								}
							></Route>
						</Route>
					) : (
						<Route
							key={i}
							path={route.name}
							element={
								<Suspense fallback={<FallbackComponent />}>
									{' '}
									{route.component}
								</Suspense>
							}
						></Route>
					)
				)}
			</Routes>
			<Footer></Footer>
		</AppContext.Provider>
	);
}

export default App;

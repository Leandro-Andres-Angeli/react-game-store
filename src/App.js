import './App.css';
import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router-dom';

import { routes } from './utils/routes';

function App() {
	const routesComponents = routes;
	console.log(routes);
	return (
		<>
			<Navbar></Navbar>
			<Routes>
				{routesComponents.map((route) =>
					route.name === 'home' ? (
						<Route path="/" element={route.component}></Route>
					) : route.name === 'notfound' ? (
						<Route path="*" element={route.component}></Route>
					) : (
						<Route path={route.name} element={route.component}></Route>
					)
				)}
			</Routes>
		</>
	);
}

export default App;

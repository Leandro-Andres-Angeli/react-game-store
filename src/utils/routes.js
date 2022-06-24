import { lazy } from 'react';
// import About from '../pages/About';
// import CheckoutStepper from '../pages/Checkout';
// import Contact from '../pages/Contact';
// import Genres from '../pages/Genres';
// import Home from '../pages/Home';
// import NotFound from '../pages/NotFound';
// import Platforms from '../pages/Platforms';
// import Publishers from '../pages/Publishers';

const About = lazy(() => import('../pages/About'));
const CheckoutStepper = lazy(() => import('../pages/Checkout'));
const Contact = lazy(() => import('../pages/Contact'));
const Genres = lazy(() => import('../pages/Genres'));
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Platforms = lazy(() => import('../pages/Platforms'));
const Publishers = lazy(() => import('../pages/Publishers'));
// export const routes = [
// 	{ name: 'home', component: home },
// 	{ name: 'genres', component: genres },

// 	{ name: 'platforms', component: platforms },
// 	{ name: 'publishers', component: publishers },
// 	{ name: 'about', component: about },
// 	{ name: 'contact', component: contact },
// 	{ name: 'checkout', component: checkout },

// 	{ name: 'notfound', component: notfound },
// ];
export const routes = [
	{ name: 'home', component: <Home/> },
	{ name: 'genres', component: <Genres /> },

	{ name: 'platforms', component: <Platforms /> },
	{ name: 'publishers', component: <Publishers /> },
	{ name: 'about', component: <About /> },
	{ name: 'contact', component: <Contact /> },
	{ name: 'checkout', component: <CheckoutStepper /> },

	{ name: 'notfound', component: <NotFound /> },
];

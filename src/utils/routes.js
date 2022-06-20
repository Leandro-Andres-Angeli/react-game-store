import About from '../pages/About';
import CheckoutStepper from '../pages/Checkout';
import Contact from '../pages/Contact';
import Genres from '../pages/Genres';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Platforms from '../pages/Platforms';

import Publishers from '../pages/Publishers';

export const routes = [
	{ name: 'home', component: <Home /> },
	{ name: 'genres', component: <Genres /> },

	{ name: 'platforms', component: <Platforms /> },
	{ name: 'publishers', component: <Publishers /> },
	{ name: 'about', component: <About /> },
	{ name: 'contact', component: <Contact /> },
	{ name: 'checkout', component: <CheckoutStepper /> },

	{ name: 'notfound', component: <NotFound /> },
];

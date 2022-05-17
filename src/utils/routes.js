import About from '../pages/About';
import CheckoutStepper from '../pages/CheckoutStepper';
import Contact from '../pages/Contact';
import Genres from '../pages/Genres';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Platforms from '../pages/Platforms';
import PopularGames from '../pages/PopularGames';

export const routes = [
	{ name: 'home', component: <Home /> },
	{ name: 'genres', component: <Genres /> },
	{ name: 'popular', component: <PopularGames /> },
	{ name: 'platforms', component: <Platforms /> },
	{ name: 'about', component: <About /> },
	{ name: 'contact', component: <Contact /> },
	{ name: 'checkout', component: <CheckoutStepper /> },

	{ name: 'notfound', component: <NotFound /> },
];

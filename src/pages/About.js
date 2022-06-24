import React from 'react';
import Container from '@mui/material/Container';
import {
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import { useTheme } from '@emotion/react';
const links = [
	{ URI: 'https://reactjs.org', desc: 'React' },
	{ URI: 'https://mui.com', desc: 'Material MUI' },

	{ URI: 'https://axios-http.com', desc: 'Axios' },
	{ URI: 'https://react-hook-form.com', desc: 'React Hook Form' },

	{ URI: 'https://imask.js.org', desc: 'IMask' },

	{ URI: 'https://www.npmjs.com/package/react-imask', desc: 'React IMask' },

	{ URI: 'https://www.npmjs.com/package/slick-slider', desc: 'Slick Slider' },

	{
		URI: 'https://www.npmjs.com/package/react-slick-slider',
		desc: 'React Slick Slider',
	},

	{
		URI: 'https://www.npmjs.com/package/react-router-dom',
		desc: 'React Router DOM',
	},

	{
		URI: 'https://www.npmjs.com/package/html-react-parser',
		desc: 'HTML React Parser',
	},
	{ URI: 'https://hamburger-react.netlify.app', desc: 'Hamburguer REACT' },

	{ URI: 'https://www.emailjs.com', desc: 'EmailJS' },
	{ URI: 'https://rawg.io/apidocs', desc: 'Data Fetched from RAWG DB' },
];
const About = () => {
	const theme = useTheme();
	return (
		<Container maxWidth="lg">
			<Typography
				variant="h1"
				sx={{ fontSize: 24, marginTop: 4, fontWeight: 'lighter' }}
			>
				{' '}
				Game Store App
			</Typography>
			<Typography
				variant="h2"
				sx={{
					fontSize: 32,
					textTransform: 'uppercase',
					fontWeight: 'bolder',
					marginTop: 3,
				}}
			>
				React game store made in React{' '}
			</Typography>
			<List sx={{ bgcolor: [theme.palette.bg_card_color], my: 4, p: 2 }}>
				<Typography
					variant="h3"
					sx={{ fontSize: 24, py: 2, textTransform: 'uppercase' }}
				>
					Resources I used
				</Typography>
				{links.map((item, i) => {
					return (
						<Link href={item.URI}>
							<ListItem
								key={i}
								sx={{
									background: '#361857',
									my: 1,
									color: [theme.palette.secondary.main],
									textDecoration: 'none',
								}}
							>
								<ListItemIcon sx={{ justifyContent: 'center' }}>
									<FiberManualRecordRoundedIcon
										sx={{ fontSize: 14 }}
										color="secondary"
									/>
								</ListItemIcon>
								<ListItemText
									sx={{
										a: {
											color: [theme.palette.secondary.main],
											textDecoration: 'none',
										},
									}}
								>
									{item.desc}
								</ListItemText>
							</ListItem>
						</Link>
					);
				})}
			</List>
		</Container>
	);
};

export default About;

import React from 'react';
import Container from '@mui/material/Container';
import ContactForm from '../components/contactForm/ContactForm';

const Contact = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				px: { xs: 3, sm: 10, md: 10, lg: 15, xl: 20 },
				py: { xs: 7, sm: 8, md: 9, lg: 10, xl: 14 },
			}}
		>
			<ContactForm></ContactForm>
		</Container>
	);
};

export default Contact;

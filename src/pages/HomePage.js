import React from 'react';
import {
	FeaturedProducts,
	Hero,
	Reviews,
	Contact,
	Benefits,
	ImageGrid,
	Reasons,
} from '../components/homepage';
import { ContactDetails } from '../components';

const HomePage = () => {
	return (
		<main>
			<Hero />
			<FeaturedProducts />
			<Benefits />

			<Reviews />

			<ImageGrid />
			<Reasons />
			<Contact />
			<ContactDetails />
		</main>
	);
};

export default HomePage;

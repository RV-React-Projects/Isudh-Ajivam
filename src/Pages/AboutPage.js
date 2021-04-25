import React from 'react';
import Footer from '../Components/Footer';
import AboutUs from './AboutUs';
import OurVision from './OurVision';

function AboutPage() {
	return (
		<div className="AboutPage">
			<AboutUs />
			<OurVision />
			<div className="Quote">
				<h1>
					“Always laugh when you can, it is cheap <span>medicine.</span> ” ― Lord Byron
				</h1>
			</div>
			<Footer />
		</div>
	);
}

export default AboutPage;

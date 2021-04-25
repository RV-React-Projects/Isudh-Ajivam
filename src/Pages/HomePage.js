import React from 'react';
import { Link } from 'react-router-dom';
import CarouselPage from '../Components/Carousel';
import Footer from '../Components/Footer';
import MyModal from '../Components/Model';

import AboutUs from './AboutUs';
import OurVision from './OurVision';
import Testmonial from './Testmonial';
import WhatWeDo from './WhatWeDo';

function HomePage({ props }) {
	return (
		<div>
			<MyModal />
			{/* <Navbar /> */}
			<div className="Homepage ">
				<div className=" imagehere container">
					<img src="http://www.visudhajivam.in/img/header.jpg" alt="mainImg" />
				</div>
				<div className="dataHere">
					<h1>
						Providing High <br /> Quaility <span>Services</span>
					</h1>
					<p>
						<strong>VISUDH AJIVAM PVT LTD</strong> is one of the best digital platform for health care services integrated
						with pharmacies, doctors, labtests, diagnosis centres across India to provide world class Healthcare facilities to
						individuals across the country.This platform is the fastest, cheapest, safestway for you and your loved ones for
						meeting your medical needs in terms of medicine, labtest and doctors availability at the right time at the best
						affordable price.We make sure that the quality of service you are getting is world class we give you this gurranty
						with every service you opt for online as well as offline.We are one stop solution for your problems.We are
						covering a wide range of products, test and doctors with speciality in different feilds to make the service wide
						and safest.
					</p>
					<Link>Read More..</Link>
				</div>
				<br />
			</div>
			<CarouselPage />
			<AboutUs />
			<WhatWeDo />
			<OurVision />
			<Testmonial />
			<div className="Quote">
				<h1>
					“Always laugh when you can, it is cheap <span>medicine.</span> ” ― Lord Byron
				</h1>
			</div>
			<Footer />
		</div>
	);
}

export default HomePage;

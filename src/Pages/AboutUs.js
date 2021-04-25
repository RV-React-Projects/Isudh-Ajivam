import React from 'react';

function AboutUs() {
	return (
		<div className="about-us " id="aboutus">
			<div className="aboutImg">
				<img src="http://www.visudhajivam.in/img/main1.jpg" alt=" aboutimg" />
			</div>
			<div className="about_data">
				<i
					style={{ borderBottom: '2px solid #33C4FF', fontSize: '34px', color: '#33C4FF' }}
					class="fas fa-question-circle mx-4 float-left mr-4 pr-4 my-4"
				>
					<span style={{ color: '#33C4FF' }} class="h1 font-weight-bold px-2  ">
						About Us
					</span>
				</i>
				<h2>Be Gentle With The Strongest!</h2>
				<p className="container">
					<strong>VISUDH AJIVAM PVT LTD</strong> is one of the best digital platform for health care services integrated with
					pharmacies, doctors, labtests, diagnosis centres across India to provide world class Healthcare facilities to
					individuals across the country.This platform is the fastest, cheapest, safestway for you and your loved ones for
					meeting your medical needs in terms of medicine, labtest and doctors availability at the right time at the best
					affordable price.We make sure that the quality of service you are getting is world class we give you this gurranty
					with every service you opt for online as well as offline.We are one stop solution for your problems.We are covering
					a wide range of products, test and doctors with speciality in different feilds to make the service wide and safest.
				</p>
			</div>
		</div>
	);
}

export default AboutUs;

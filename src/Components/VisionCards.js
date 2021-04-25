import React from 'react';

function VisionCards() {
	const items = [
		{
			id: 1,
			title: 'Our Vision',
			img: 'http://www.visudhajivam.in/img/v1.png',
			dis:
				'To revolutionise the Healthcare sector through this healthtech platform so that each and every citizen of India can get the best medical needs at there allowing budget.So that no one looses their lives just because of few bugs.We are making a family to save our public from the scarcity of services which is forced by their budget parameters.We are fastest, safest and cheapest one stop solution for your medical facilities.We value your lives,ur needs and ur money.We want to be your health guide as well as health care service provider.'
		},
		{
			id: 2,
			title: 'Our Mission',
			img: 'http://www.visudhajivam.in/img/v2.png',
			dis:
				'Visudh AJIVAM PVT LTD is on a mission to take hand in hand with public and help them across their medical needs with making the user friendly digital platform without any Hassel at right time right place and most important at affordable price making the standard of one of the best world class service provider in terms of e-pharma as well as e-consultancy sector across the country.'
		},
		{
			id: 3,
			title: 'Our Values',
			img: 'http://www.visudhajivam.in/img/v3.png',
			dis:
				'VISUDH AJIVAM PVT LTD is one of the best digital platform for health care services integrated with pharmacies, doctors, labtests, diagnosis centres across India to provide world class Healthcare facilities to individuals across the country.This platform is the fastest, cheapest, safestway for you and your loved ones for meeting your medical needs in terms of medicine, labtest and doctors availability at the right time at the best affordable price.We make sure that the quality of service you are getting is world class we give you this gurranty with every service you opt for online as well as offline.We are one stop solution for your problems.We are covering a wide range of products, test and doctors with speciality in different feilds to make the service wide and safest.'
		}
	];
	return (
		<div className="Vision-Cards">
			{items.map((card) => (
				<div key={card.id} className="cardData">
					<img src={card.img} alt="cardImg" />
					<h2>{card.title}</h2>
					<span>{card.dis}</span>
				</div>
			))}
		</div>
	);
}

export default VisionCards;

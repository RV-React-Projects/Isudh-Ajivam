import React from 'react';
import { Link } from 'react-router-dom';

function Cards() {
	const items = [
		{
			id: 1,
			title: 'BOOK APPOINTMENT',
			img: 'http://www.visudhajivam.in/img/s1.png',
			dis: 'Set up an appointment, Call or Mail us.'
		},
		{
			id: 2,
			title: 'BOOK LAB TEST',
			img: 'http://www.visudhajivam.in/img/s2.png',
			dis: 'Set up an appointment, Call or Mail us..'
		},
		{
			id: 3,
			title: 'DIAGNOSIS',
			img: 'http://www.visudhajivam.in/img/s3.png',
			dis: 'We are expert in the diagnosis and treatment, Set up an appointment, Call or Mail us.'
		},
		{
			id: 4,
			title: 'ORDER MEDICINE',
			img: 'http://www.visudhajivam.in/img/s4.png',
			dis:
				'All our medicines undergo a three-step quality check process to ensure they are of high quality, Call or Mail us..'
		},
		{
			id: 5,
			title: 'CUSTOMER SUPPORT',
			img: 'http://www.visudhajivam.in/img/s5.png',
			dis: 'We have 24*7 excellent customer support,Call or Mail us.'
		},
		{
			id: 6,
			title: 'MEDICAL STORE NEAR ME',
			img: 'http://www.visudhajivam.in/img/s6.png',
			dis:
				"Visudhajivam is India's Largest Online medical store where you can shop for quality online and offline medicines, wellness products."
		}
	];
	return (
		<div className="Cards">
			{items.map((card) => (
				<div key={card.id} className="cardData">
					<h2>{card.title}</h2>
					<img src={card.img} alt="cardImg" />
					<span>{card.dis}</span>
					<Link>Book Appointment</Link>
				</div>
			))}
		</div>
	);
}

export default Cards;

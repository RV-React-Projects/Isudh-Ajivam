import React from 'react';

function MedicinCard() {
	const items = [
		{
			id: 1,
			img: 'http://www.visudhajivam.in/img/m.jpg',
			title: 'Tetracycline',
			type: 'Antibiotic',
			price: '270',
			disc: '10 %',
			final: '243'
		},
		{
			id: 2,
			img: 'http://www.visudhajivam.in/img/m.jpg',
			title: 'Teramicine',
			type: 'Antibiotic',
			price: '180',
			disc: '20 %',
			final: '144'
		},
		{
			id: 3,
			img: 'http://www.visudhajivam.in/img/m.jpg',
			title: 'Abacavir',
			type: 'Antiretoviral Agents',
			price: '5000',
			disc: '23 %',
			final: '3850'
		},
		{
			id: 4,
			img: 'http://www.visudhajivam.in/img/m.jpg',
			title: 'Asprine',
			type: 'Paracitamol',
			price: '120',
			disc: '12 %',
			final: '105.6'
		},
		{
			id: 5,
			img: 'http://www.visudhajivam.in/img/m.jpg',
			title: 'Dexorange',
			type: 'Pain killer',
			price: '3500.55',
			disc: '12 %',
			final: '3080.48'
		},
		{
			id: 6,
			img: 'http://www.visudhajivam.in/img/m.jpg',
			title: 'D cold total',
			type: 'Paracitamol',
			price: '58',
			disc: '5 %',
			final: '55.1'
		}
	];
	return (
		<div className="medicinCard">
			{items.map((data) => (
				<div key={data.id} className="medCard">
					<img src={data.img} alt="MedImg" />
					<h2>{data.title}</h2>
					<h5>
						Type : <span className="Type">{data.type}</span>{' '}
					</h5>
					<h5>
						Price: <span className="Price">{data.price}</span>{' '}
					</h5>
					<h5>
						Discount : <span className="Discount">{data.disc}</span>{' '}
					</h5>
					<h4>
						Final Price : <span className="Final">{data.final}rs.</span>
					</h4>
					<button type="button">Bye Now</button>
				</div>
			))}
		</div>
	);
}

export default MedicinCard;

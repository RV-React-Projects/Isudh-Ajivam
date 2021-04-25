import React from 'react';

function TestmonialCards() {
	const items = [
		{
			id: 1,
			img: 'http://www.visudhajivam.in/img/doctor.png',
			name: 'Helen Brooke Taussig',
			cat: 'General Physician',
			dis:
				'General Practitioner is a medical doctor who treats all common medical conditions and refers patients to hospitals and other medical services for urgent and specialist treatment.'
		},
		{
			id: 2,
			img: 'http://www.visudhajivam.in/img/doctor2.png',
			name: 'Dr. Julio J. Hajdenberg',
			cat: 'Psychiatrist',
			dis:
				"A neurologist is a medical doctor with specialized training in diagnosing, treating, and managing disorders of the brain and nervous system including, but not limited to, Alzheimer's disease, amyotrophic lateral sclerosis (ALS), concussion, epilepsy, migr."
		},
		{
			id: 3,
			img: 'http://www.visudhajivam.in/img/doctor3.png',
			name: 'Dr. Jennifer E. Tseng',
			cat: 'Pharmacy',
			dis: 'We have a large variety of medicinal products. Easily available at your door step.'
		}
	];
	return (
		<div className="Testmonial-card">
			{items.map((data) => (
				<div key={data.id} className="card">
					<img src={data.img} alt="cardImg" />
					<h3>{data.name}</h3>
					<h5>
						Category : <span>{data.cat}</span>
					</h5>
					<p>{data.dis}</p>
				</div>
			))}
		</div>
	);
}

export default TestmonialCards;

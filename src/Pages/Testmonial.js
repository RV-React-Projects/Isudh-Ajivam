import React from 'react';
import TestmonialCards from '../Components/TestmonialCards';

function Testmonial() {
	return (
		<div className="Testmonial">
			<div className=" Testmonial-Heading">
				<p style={{ borderBottom: '3px solid #33C4FF', float: 'left', fontSize: '34px' }}>
					<span style={{ color: '#33C4FF' }}>TESTIMONIAL</span>
				</p>
			</div>
			<TestmonialCards />
		</div>
	);
}

export default Testmonial;

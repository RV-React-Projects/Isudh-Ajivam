import React from 'react';
import Cards from '../Components/Cards';

function WhatWeDo() {
	return (
		<div className="whatwedo">
			<div className="whatwedo-Heading">
				<i
					style={{ borderBottom: '3px solid #33C4FF', float: 'left', fontSize: '34px', color: '#33C4FF' }}
					className="fal fa-user-hard-hat  mx-auto pt-4 whatwedo"
				>
					<span style={{ color: '#33C4FF' }} class="  ">
						What We Do
					</span>
				</i>
			</div>
			<Cards />
		</div>
	);
}

export default WhatWeDo;

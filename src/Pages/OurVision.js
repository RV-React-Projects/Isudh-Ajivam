import React from 'react';
import VisionCards from '../Components/VisionCards';

function OurVision() {
	return (
		<div className="Our-Vision">
			<div className="Vision-Heading">
				<i
					style={{
						borderBottom: '3px solid #33C4FF',
						float: 'left',
						fontSize: '34px',
						color: '#33C4FF',
						display: 'block'
					}}
					className="fas fa-bullseye"
				>
					<span style={{ color: '#33C4FF' }} className="">
						OUR VISION
					</span>
				</i>
			</div>
			<VisionCards />
		</div>
	);
}

export default OurVision;

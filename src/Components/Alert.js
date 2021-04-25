import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

function Alert() {
	return (
		<UncontrolledAlert color="warning">
			<span style={{ fontWeight: 'bold' }}> Hey Visitor </span>Service is not avilable in your area !
		</UncontrolledAlert>
	);
}

export default Alert;

import React from 'react';
import Footer from '../Components/Footer';
import MedicinCard from '../Components/MedicinCard';

function ByeMedicinPage() {
	return (
		<div className="bye-Medicin">
			<form>
				<input type="text" name="SearchItem" id="SearchItem" placeholder="Search Here" />
				<button type="button">Search</button>
			</form>
			<MedicinCard />
			<Footer />
		</div>
	);
}

export default ByeMedicinPage;

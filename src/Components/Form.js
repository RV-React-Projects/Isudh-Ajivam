import React from 'react';

function Form() {
	return (
		<div className="form">
			<form>
				<input type="text" name="SearchItem" id="SearchItem" placeholder="Enter Pin Code" />
				<button type="button">Submit</button>
			</form>
		</div>
	);
}

export default Form;

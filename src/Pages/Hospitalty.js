import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import Footer from '../Components/Footer';
import Alert from '../Components/Alert';
import Form from '../Components/Form';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 300
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2)
		}
	}
}));

function Hospitalty({ props }) {
	const classes = useStyles();
	const [ age, setAge ] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<div className="mainHospital">
			<Form />
			<div className="FormController" >
				<FormControl variant="filled" className={classes.formControl}>
					<InputLabel id="demo-simple-select-filled-label">Choose a Category</InputLabel>
					<Select
						labelId="demo-simple-select-filled-label"
						id="demo-simple-select-filled"
						value={age}
						onChange={handleChange}
					>
						<MenuItem value="">
							<em>Choose a Category</em>
						</MenuItem>
						<MenuItem value="All">All</MenuItem>
						<MenuItem value="Clinic">Clinic</MenuItem>
						<MenuItem value="Hospital">Hospital</MenuItem>
						<MenuItem value="Doctors">Doctors</MenuItem>
						<MenuItem value="Nursing Home">Nursing Home</MenuItem>
						<MenuItem value="Physiotherapy">Physiotherapy</MenuItem>
					</Select>
				</FormControl>
			</div>

			<Alert />
			<Alert />
			<Alert />
			<Footer />
		</div>
	);
}

export default Hospitalty;

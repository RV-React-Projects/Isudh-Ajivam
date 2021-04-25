import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	modal: {
		marginTop: '20px',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		outline: 'none'
		// border: '1px solid #fff'
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		// border: '2px solid #000',
		borderRadius: '2px',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(1, 8, 3)
	}
	// title: {
	// 	display: 'flex',
	// 	padding: theme.spacing(2, 0, 1),
	// 	justifyContent: 'space-between',
	// 	borderBottom: '1px solid #fce'
	// }
}));

export default function MyModal() {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(true);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<div className={classes.title} style={{ display: 'flex', justifyContent: 'space-between' }}>
							<h2 style={{ color: '#33c4ff', fontWeight: '700', fontSize: 'x-large' }} id="transition-modal-title">
								Hey Visitor !
							</h2>
							<span style={{ color: 'red' }}>
								<i onClick={() => handleClose()} class="fas fa-times fa-2x" />
							</span>
						</div>
						<p style={{ marginTop: '20px', color: '#33c4ff' }} id="transition-modal-description">
							<Link>
								<span style={{ color: '#33c4ff', fontWeight: '700', fontSize: 'large' }}>Call us +91 93049 70109</span>{' '}
							</Link>
						</p>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

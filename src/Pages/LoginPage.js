import React from 'react';
import Footer from '../Components/Footer';
import Navbar2 from '../Components/Navbar-2';

function LoginPage({ img, title, linkto,forgot }) {
	return (
		<div className="login_page" style={{ backgroundImage: `url(${img})`, objectFit: 'cover' }}>
			<Navbar2 />
			<form>
				<div className="login-form">
					<i class="far fa-user fa-2x " style={{ fonSize: '30px', borderBottom: '3px solid #33C4FF', colors: '#33C4FF' }}>
						<span>{title}</span>
					</i>
				</div>
				<div className="inputitems">
					<label htmlFor="email">Email :</label>
					<input type="text" name="email" placeholder="Enter Your Email" />
					<label htmlFor="password">Password :</label>
					<input type="password" name="password" placeholder="Password" />
					<button type="button">Submit</button>
					<a href={linkto}>Create an Account</a>
					<a href={forgot}>Forgot Password</a>
				</div>
			</form>
			<div className="Quote">
				<h1>
					“Always laugh when you can, it is cheap <span>medicine.</span> ” ― Lord Byron
				</h1>
			</div>
			<Footer />
		</div>
	);
}

export default LoginPage;

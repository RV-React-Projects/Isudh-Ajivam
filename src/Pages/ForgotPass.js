import React from 'react';
import Footer from '../Components/Footer';
import Navbar2 from '../Components/Navbar-2';

function ForgotPass({ img, title, linkto }) {
	return (
		<div>
			<div className="login_page" style={{ backgroundImage: `url(${img})`, objectFit: 'cover' }}>
				<Navbar2 />
				<div class="container mt-4">
					<div class="row mt-4">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4">
							<div class="row">
								<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 mx-auto">
									<i class="far fa-user px-1 " style={{ fontSize: '20px', borderBottom: '3px solid #33C4FF' }}>
										<span class="text-center h4 font-weight-bold">{title}</span>
									</i>
								</div>
							</div>
							<form style={{ color: '#fff' }}>
								<div class="form-group">
									<label for="exampleInputEmail1">Email address</label>
									<input
										type="email"
										required=""
										name="email"
										class="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
									/>
									<small style={{ color: '#fff' }} id="emailHelp" class="form-text ">
										We'll never share your email with anyone else.
									</small>
								</div>
								<div class="form-group">
									<label for="exampleInputEmail1">Adhar Number</label>
									<input
										type="text"
										required=""
										name="adhar"
										class="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter adhar"
									/>
								</div>
								<button name="bpass" type="button" class="btn btn-primary">
									check
								</button>
								<a style={{ color: '#fff' }} class="mx-2" href={linkto}>
									Login
								</a>
							</form>
						</div>
					</div>
				</div>
				<div className="Quote">
					<h1>
						“Always laugh when you can, it is cheap <span>medicine.</span> ” ― Lord Byron
					</h1>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default ForgotPass;

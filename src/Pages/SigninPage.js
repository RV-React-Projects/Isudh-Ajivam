import React from 'react';
import Footer from '../Components/Footer';
import Navbar2 from '../Components/Navbar-2';

function SigninPage({ title,linkto }) {
	return (
		<div className="">
			<Navbar2 />
			<div className="row container signup-Page">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 my-4 py-4">
					<div className="row">
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 mx-auto">
							<i className="far fa-user px-1 " style={{ fontSize: '30px', borderBottom: '3px solid #33C4FF' }}>
								<span className="text-center h2 font-weight-bold">{title}</span>
							</i>
						</div>
					</div>

					<form action="customersigninauth.php" method="post">
						<div className="form-group">
							<label for="exampleInputEmail1">Name</label>
							<input
								type="text"
								required=""
								name="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter Name"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Sex</label>
							<input
								type="text"
								required=""
								name="sex"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter Sex"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Date of Birth</label>
							<input
								type="date"
								required=""
								name="dob"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter DOB"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Adhar Number</label>
							<input
								type="number"
								required=""
								name="adhar"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter Adhar"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Mobile Number</label>
							<input
								type="number"
								required=""
								name="mobile"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter Mobile"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Father/Husband Name</label>
							<input
								type="text"
								required=""
								name="father"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter Father/Husband"
							/>
						</div>

						<div className="form-group">
							<label for="exampleInputEmail1">Mother's Name</label>
							<input
								type="text"
								required=""
								name="mother"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter Mother's Name"
							/>
						</div>

						<div className="form-group">
							<label for="exampleInputEmail1">Address</label>
							<input
								type="text"
								required=""
								name="address"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter Address"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Pin Code</label>
							<input
								type="text"
								required=""
								name="pin"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter Pin Code"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">State</label>
							<input
								type="text"
								required=""
								name="state"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter state"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">District</label>
							<input
								type="text"
								required=""
								name="district"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter District"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Blood Group</label>
							<br />
							<select style={{ width: '20%', height: '30px' }} name="blood">
								<option value="A+">A+</option>
								<option value="B+">B+</option>
								<option value="O+">O+</option>
								<option value="AB+">AB+</option>
								<option value="A-">A-</option>
								<option value="B-">B-</option>
								<option value="O-">O-</option>
								<option value="AB-">AB-</option>
							</select>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">No. of Family Member</label>
							<input
								type="text"
								required=""
								name="family"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter Family Member"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Profession </label>
							<input
								type="text"
								required=""
								name="pro"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter Profession"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Annual Income</label>
							<input
								type="text"
								required=""
								name="annual"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter Annul Income"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Marital Status</label>
							<input
								type="text"
								required=""
								name="matrail"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter Matrial Status"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Disease</label>
							<input
								type="text"
								required=""
								name="diseas"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder=""
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input
								type="email"
								required=""
								name="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							/>
							<small id="emailHelp" className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input
								type="password"
								required=""
								name="pass"
								className="form-control pass1"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Re- Password</label>
							<input
								type="password"
								required=""
								onkeyup="password();"
								className="form-control pass2"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>

						<button type="submit" name="submit" className="btn btn-primary submit">
							Submit
						</button>
						<small className="mx-2">
							<a href={linkto}>Login</a>
						</small>
					</form>
				</div>
			</div>
			<div className="Quote">
				<h1>
					“Always laugh when you can, it is cheap <span>medicine.</span> ” ― Lord Byron
				</h1>
			</div>
			<Footer />
		</div>
	);
}

export default SigninPage;

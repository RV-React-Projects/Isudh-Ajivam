import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Label } from 'reactstrap';

function Footer() {
	return (
		<div className="main-footer">
			<footer className="footer">
				<div className="qiuckLinks">
					<h3>Quick Links</h3>
					<ul>
						<li>
							<Link to="/aboutus">About Us</Link>
						</li>
						<li>
							<Link to="/services">Services</Link>
						</li>
						<li>
							<Link to="#feedback">FeedBack</Link>
						</li>
					</ul>
				</div>
				<div className="getinTouch">
					<div className="socialIcons">
						<h3>Get in Touch</h3>
						<span style={{ color: '#fea82f' }}>
							<i class="fas fa-envelope fa-2x" size="20px" />
						</span>
						<span style={{ color: '#845ec2' }}>
							<i class="fab fa-facebook-square fa-2x" />
						</span>
						<span style={{ color: '#e84545' }}>
							<i class="fab fa-instagram fa-2x" />
						</span>
						<span style={{ color: '#98ded9' }}>
							<i class="fab fa-linkedin fa-2x" />
						</span>
						<span style={{ color: '#e40017' }}>
							<i class="fab fa-youtube fa-2x" />
						</span>
					</div>
					<div className="address">
						<h2>Address</h2>
						<div>
							<span style={{ color: '#e40017' }}>
								<i class="fas fa-map-marker-alt fa-2x" />
							</span>
							<span> Surya nagar road no-3 Bijulia talab road ward no -8 Ramgarh canttRamgarh Jharkhand 829122</span>
						</div>
					</div>
					<div className="email">
						<span style={{ color: '#fea82f' }}>
							<i class="fas fa-envelope-open fa-2x" />
						</span>
						<span> vishudhajivam@gmail.com</span>
					</div>
				</div>
				<div className="recentNews">
					<h1>Recent News</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, magni esse obcaecati perferendis natus debitis.
						Quam itaque, sapiente dignissimos mollitia laborum perferendis cupiditate ut officia. Officia reprehenderit eius
						natus magni.
					</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, magni esse obcaecati perferendis natus debitis.
						Quam itaque, sapiente dignissimos mollitia laborum perferendis cupiditate ut officia. Officia reprehenderit eius
						natus magni.
					</p>
				</div>
				<div className="Feedback" id="feedback">
					<h1>Send US a Message</h1>
					<form>
						<Label for="exampleEmail">Email</Label>

						<Input type="email" name="email" className="TextEmail" placeholder="Enter Your Email" />

						<Label for="Message">Message</Label>

						<Input type="textarea" name="text" className="TextArea" />
						<a href="#feedback"> Submit Message</a>
					</form>
				</div>
			</footer>
			<div className="copyright">
				<h4>COPYRIGHT 2020 © | All Rights Reserved</h4>
			</div>
		</div>
	);
}

export default Footer;

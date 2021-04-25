import './Navbar.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar2() {
	const [ click, setClick ] = useState(false);
	const [ button, setButton ] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileView = () => setClick(false);

	const ShowButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		ShowButton();
	}, []);

	window.addEventListener('resize', ShowButton);
	return (
		<nav className="navbar">
			<div className="logoImage">
				<Link to="/" onClick={closeMobileView}>
					<img class="LogoImg" src="http://www.visudhajivam.in/img/logo.jpeg" alt="LogoImg" height="50px" width="180px" />
				</Link>
			</div>
			<div className="menu-icon" onClick={handleClick}>
				<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
			</div>
			<div className="Nav-List">
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileView}>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-links" onClick={closeMobileView}>
							About
						</Link>
					</li>
					<li className="nav-item">
						<a href="#feedback" className="nav-links" onClick={closeMobileView}>
							Contact
						</a>
					</li>
					<li className="nav-item">
						<a href="#feedback" className="nav-links" onClick={closeMobileView}>
							Feedback
						</a>
					</li>

					<div className="loginbuttoninside">
						<li className="nav-item butlog">
							<Link className="nav-links-mobile">Login</Link>
						</li>
						<div className="loginMenu1">
							<li className="loginList">
								<Link className="loginButtons" to="/customerlogin" onClick={closeMobileView}>
									Customer Login
								</Link>
							</li>
							<li className="loginList">
								<Link className="loginButtons" to="/employeelogin" onClick={closeMobileView}>
									Employee Login
								</Link>
							</li>
							<li className="loginList">
								<Link className="loginButtons" to="/businesslogin" onClick={closeMobileView}>
									Business Login
								</Link>
							</li>
						</div>
					</div>
				</ul>
			</div>
			<div className="loginButton">
				<li className="nav-item ">
					<Link className="nav-links-mobile">login</Link>
				</li>
				<div className="loginMenu">
					<li className="loginList">
						<Link className="loginButtons" to="/customerlogin" onClick={closeMobileView}>
							Customer Login
						</Link>
					</li>
					<li className="loginList">
						<Link className="loginButtons" to="/employeelogin" onClick={closeMobileView}>
							Employee Login
						</Link>
					</li>
					<li className="loginList">
						<Link className="loginButtons" to="/businesslogin" onClick={closeMobileView}>
							Business Login
						</Link>
					</li>
				</div>
			</div>
		</nav>
	);
}

export default Navbar2;

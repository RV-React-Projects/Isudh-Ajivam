import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar-2';
import AboutPage from './Pages/AboutPage';
import ByeMedicinPage from './Pages/ByeMedicinPage';
import Diagnosis from './Pages/Diagnosis';
import ForgotPass from './Pages/ForgotPass';
import HomePage from './Pages/HomePage';
import Hospitalty from './Pages/Hospitalty';
import Labs from './Pages/Labs';
import LoginPage from './Pages/LoginPage';
import SigninPage from './Pages/SigninPage';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Navbar />
					<HomePage />
				</Route>
				<Route path="/about">
					<Navbar2 />
					<AboutPage />
				</Route>
				<Route path="/byemedicin">
					<Navbar2 />
					<ByeMedicinPage />
				</Route>
				<Route path="/hospitality">
					<Navbar2 />
					<Hospitalty />
				</Route>
				<Route path="/diagnosis">
					<Navbar2 />
					<Diagnosis />
				</Route>
				<Route path="/labs">
					<Navbar2 />
					<Labs />
				</Route>
				<Route path="/customerlogin">
					<LoginPage
						forgot="/customerforgot"
						linkto="/customersignin"
						title="Customer Login"
						img="https://source.unsplash.com/2000x900/?water,nature"
					/>
				</Route>
				<Route path="/customerforgot">
					<ForgotPass
						linkto="/customerlogin"
						title="Forgot Customer Password"
						img="https://source.unsplash.com/2000x900/?water,nature"
					/>
				</Route>
				<Route path="/employeelogin">
					<LoginPage
						forgot="/employeeforgot"
						linkto="/employeesignin"
						title="Employee Login"
						img="https://source.unsplash.com/2000x900/?nature,water"
					/>
				</Route>
				<Route path="/employeeforgot">
					<ForgotPass
						linkto="/employeelogin"
						title="Forgot Employee Password"
						img="https://source.unsplash.com/2000x900/?nature,water"
					/>
				</Route>
				<Route path="/businesslogin">
					<LoginPage
						forgot="/businessforgot"
						linkto="/businesssignin"
						title="Business Login"
						img="https://source.unsplash.com/2000x900/?business,water"
					/>
				</Route>
				<Route path="/businessforgot">
					<ForgotPass
						linkto="/businesslogin"
						title="Forgot Business Password"
						img="https://source.unsplash.com/2000x900/?business,water"
					/>
				</Route>
				<Route path="/customersignin">
					<SigninPage title="Customer Sign-In" linkto="/customerlogin" />
				</Route>
				<Route path="/employeesignin">
					<SigninPage title="Employee Sign-In" linkto="/Employeelogin" />
				</Route>
				<Route path="/businesssignin">
					<SigninPage title="Business Sign-In" linkto="/businesslogin" />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

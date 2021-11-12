import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<Navbar bg="dark" variant="dark">
					<Container>
						<div>
							<ul>
								<li>{user.name}</li>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/favorites">Favorites</Link>
								</li>
								<li>
									<Link to="/users">Users</Link>
								</li>
								<li><Link to='' onClick={handleLogout}>Log Out</Link></li>
							</ul>
						</div>
					</Container>
				</Navbar>
			) : (
				<Navbar>
					<div>
						<ul>
							<li>
								<Link to="/login">Log In</Link>
							</li>
							<li>
								<Link to="/signup">Sign Up</Link>
							</li>
						</ul>
					</div>
				</Navbar>
			)}
		</>
	)
}

export default NavBar
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="/">Anime City</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/favorites">Favorites</Nav.Link>
							<Nav.Link href="/users">Users</Nav.Link>
							<Nav.Link href="" onClick={handleLogout}>Log Out</Nav.Link>
						</Nav>
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
import React from 'react'
import { Link } from 'react-router-dom'
import AnimeResults from '../../pages/AnimeResults/AnimeResults'
import AnimeDetails from '../../pages/AnimeDetails/AnimeDetails'
import { Route } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			<header className="header">
				<div className="container">
					<div className="row">
						<div className="col-lg-2">
							<div className="header__logo">
							</div>
						</div>
						{user ? (
							<div className="col-lg-8">
								<div className="header__nav">
									<li>Welcome, {user.name}</li>
									<nav className="header__menu mobile-menu">
										<ul>
											<li className="active"><Link to="/">Home</Link></li>
											<li><a href="./categories.html">Categories <span className="arrow_carrot-down"></span></a>
												<ul className="dropdown">
													<li><a href="./anime-details.html">Anime Details</a></li>
													<li><a href="./anime-watching.html">Anime Watching</a></li>
													<li><Link to="/favorites">Favorites</Link></li>
													<li><Link to="/users">Users</Link></li>
													<li><a href="./login.html">Login</a></li>
												</ul>
											</li>
											<li><a href="./blog.html">Our Blog</a></li>
											<li><Link to='' onClick={handleLogout}>Log Out</Link></li>
										</ul>
									</nav>
								</div>
							</div>
						) : (
							<div className="col-lg-2">
								<div className="header__right">
									<a href="#" className="search-switch"><span className="icon_search"></span></a>
									<a href="./login.html"><span className="icon_profile"></span></a>
									<nav>
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
									</nav>
								</div>
							</div>
						)}
					</div>
					<div id="mobile-menu-wrap"></div>
				</div>
			</header>
		</>
	)
}

export default NavBar

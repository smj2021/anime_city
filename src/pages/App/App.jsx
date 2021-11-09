import React, { Component } from 'react'
import AnimeResults from '../../pages/AnimeResults/AnimeResults'
import AnimeDetails from '../../pages/AnimeDetails/AnimeDetails'
import Favorites from '../../pages/Favorites/Favorites'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import * as authService from '../../services/authService'
import Users from '../Users/Users'

class App extends Component {
	constructor() {
		super()
		this.state = {
			baseURL: 'https://api.jikan.moe/v3/search/anime?',
			query: 'q=',
			animeTitle: '',
			limit: "&limit=6",
			searchURL: '',
			user: authService.getUser()
		}
	}

	// state = {
	// 	user: authService.getUser()
	// }

	handleLogout = () => {
		authService.logout()
		this.setState({ user: null })
		this.props.history.push('/')
	}

	handleSignupOrLogin = () => {
		this.setState({ user: authService.getUser() })
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		console.log('this.props is: ', this.props);
		e.preventDefault();
		this.setState({
			searchURL: this.state.baseURL + this.state.query + this.state.animeTitle + this.state.limit
		}, () => {
			fetch(this.state.searchURL)
				.then(res => res.json())
				.then(json => this.setState({
					animes: json,
					animeTitle: ''
				}))
				.catch(err => console.log(err))
		})
		// our results are only displayed on '/' so we'll only see our results if we're on '/'. If we're searching while we are on '/anime', we need to redirect to '/' after submitting so we can see our results
		if (this.props.history.location.pathname === '/') {
			console.log('home');
		} else {
			this.props.history.push('/')
		}
	}

	render() {
		const { user } = this.state
		return (
			<>
			<body>
				{/* <NavBar user={user} handleLogout={this.handleLogout} />
				
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="animeTitle">Title</label>
					<input
						id="animeTitle"
						type="text"
						value={this.state.animeTitle}
						onChange={this.handleChange}
					/>
					<input type="submit" value="Search" />
				</form>
				
				<Route exact path='/'>
					<Landing user={user} animes={this.state.animes} />
				</Route>

				<Route exact path='/signup'>
					<Signup history={this.props.history} handleSignupOrLogin={this.handleSignupOrLogin} />
				</Route>

				<Route exact path='/login'>
					<Login handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history} />
				</Route>

				<Route
					exact path="/users"
					render={() =>
						user ? <Users /> : <Redirect to='/login' />
					}
				/>

				<Route
					exact path='/anime-results'
					render={() =>
						<AnimeResults animes={this.state.animes}/>
					}
				/>

				<Route
					exact path='/anime'
					render={({ location }) =>
						<AnimeDetails
							location={location}
						/>
					}
				/>

				<Route
					exact path='/favorites'
					render={() =>
						<Favorites />
					}
				/> */}
    <div id="root"></div>

    <div id="preloder">
        <div className="loader"></div>
    </div>


    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="header__logo">
                        <a href="./index.html">
                            <img src="img/logo.png" alt=""/>
                        </a>
                    </div>
                </div>
				<div className="col-lg-8">
                    <div className="header__nav">
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li className="active"><a href="./index.html">Homepage</a></li>
                                <li><a href="./categories.html">Categories <span className="arrow_carrot-down"></span></a>
                                    <ul className="dropdown">
                                        <li><a href="./categories.html">Categories</a></li>
                                        <li><a href="./anime-details.html">Anime Details</a></li>
                                        <li><a href="./anime-watching.html">Anime Watching</a></li>
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                        <li><a href="./signup.html">Sign Up</a></li>
                                        <li><a href="./login.html">Login</a></li>
                                    </ul>
                                </li>
								<li><a href="./blog.html">Our Blog</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="header__right">
                        <a href="#" className="search-switch"><span className="icon_search"></span></a>
                        <a href="./login.html"><span className="icon_profile"></span></a>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>

	<section className="hero">
		<div className="container">
            <div className="hero__slider owl-carousel">
                <div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero__text">
                                <div className="label">Adventure</div>
                                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                <p>After 30 days of travel across the world...</p>
                                <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero__text">
                                <div className="label">Adventure</div>
                                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                <p>After 30 days of travel across the world...</p>
                                <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero__text">
                                <div className="label">Adventure</div>
                                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                <p>After 30 days of travel across the world...</p>
                                <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

	<section className="product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="trending__product">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="section-title">
                                    <h4>Trending Now</h4>
                                </div>
                            </div>
							<div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="btn__all">
                                    <a href="#" className="primary-btn">View All <span className="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
						<div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/trending/trend-1.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                    </div>
                                </div>
                            </div>
							<div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/trending/trend-2.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/trending/trend-3.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Shingeki no Kyojin Season 3 Part 2</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/trending/trend-4.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Fullmetal Alchemist: Brotherhood</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/trending/trend-5.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Shiratorizawa Gakuen Koukou</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/trending/trend-6.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Code Geass: Hangyaku no Lelouch R2</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popular__product">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="section-title">
                                    <h4>Popular Shows</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="btn__all">
                                    <a href="#" className="primary-btn">View All <span className="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/popular/popular-1.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Sen to Chihiro no Kamikakushi</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/popular/popular-2.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Kizumonogatari III: Reiket su-hen</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/popular/popular-3.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Shirogane Tamashii hen Kouhan sen</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/popular/popular-4.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Rurouni Kenshin: Meiji Kenkaku Romantan</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/popular/popular-5.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Mushishi Zoku Shou 2nd Season</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/popular/popular-6.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Monogatari Series: Second Season</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
					<div className="recent__product">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="section-title">
                                    <h4>Recently Added Shows</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="btn__all">
                                    <a href="#" className="primary-btn">View All <span className="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/recent/recent-1.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Great Teacher Onizuka</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/recent/recent-2.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Fate/stay night Movie: Heaven's Feel - II. Lost</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/recent/recent-3.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Mushishi Zoku Shou: Suzu no Shizuku</a></h5>
                                    </div>
                                </div>
                            </div>
							<div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/recent/recent-4.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Fate/Zero 2nd Season</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/recent/recent-5.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Kizumonogatari II: Nekket su-hen</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/recent/recent-6.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="live__product">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="section-title">
                                    <h4>Live Action</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="btn__all">
                                    <a href="#" className="primary-btn">View All <span className="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/live/live-1.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Shouwa Genroku Rakugo Shinjuu</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/live/live-2.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Mushishi Zoku Shou 2nd Season</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/live/live-3.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Mushishi Zoku Shou: Suzu no Shizuku</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/live/live-4.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/live/live-5.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Fate/stay night Movie: Heaven's Feel - II. Lost</a></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="img/live/live-6.jpg">
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5><a href="#">Kizumonogatari II: Nekketsu-hen</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="product__sidebar">
                        <div className="product__sidebar__view">
                            <div className="section-title">
                                <h5>Top Views</h5>
                            </div>
                            <ul className="filter__controls">
                                <li className="active" data-filter="*">Day</li>
                                <li data-filter=".week">Week</li>
                                <li data-filter=".month">Month</li>
                                <li data-filter=".years">Years</li>
                            </ul>
                            <div className="filter__gallery">
                                <div className="product__sidebar__view__item set-bg mix day years"
                                data-setbg="img/sidebar/tv-1.jpg">
                                <div className="ep">18 / ?</div>
                                <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                <h5><a href="#">Boruto: Naruto next generations</a></h5>
                            </div>
                            <div className="product__sidebar__view__item set-bg mix month week"
                            data-setbg="img/sidebar/tv-2.jpg">
                            <div className="ep">18 / ?</div>
                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                            <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                        </div>
                        <div className="product__sidebar__view__item set-bg mix week years"
                        data-setbg="img/sidebar/tv-3.jpg">
                        <div className="ep">18 / ?</div>
                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                        <h5><a href="#">Sword art online alicization war of underworld</a></h5>
                    </div>
                    <div className="product__sidebar__view__item set-bg mix years month"
                    data-setbg="img/sidebar/tv-4.jpg">
                    <div className="ep">18 / ?</div>
                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                    <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
                </div>
                <div className="product__sidebar__view__item set-bg mix day"
                data-setbg="img/sidebar/tv-5.jpg">
                <div className="ep">18 / ?</div>
                <div className="view"><i className="fa fa-eye"></i> 9141</div>
                <h5><a href="#">Fate stay night unlimited blade works</a></h5>
            </div>
        </div>
    </div>
    <div className="product__sidebar__comment">
        <div className="section-title">
            <h5>New Comment</h5>
        </div>
        <div className="product__sidebar__comment__item">
            <div className="product__sidebar__comment__item__pic">
                <img src="img/sidebar/comment-1.jpg" alt=""/>
            </div>
            <div className="product__sidebar__comment__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
            </div>
        </div>
        <div className="product__sidebar__comment__item">
            <div className="product__sidebar__comment__item__pic">
                <img src="img/sidebar/comment-2.jpg" alt=""/>
            </div>
            <div className="product__sidebar__comment__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5><a href="#">Shirogane Tamashii hen Kouhan sen</a></h5>
                <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
            </div>
        </div>
        <div className="product__sidebar__comment__item">
            <div className="product__sidebar__comment__item__pic">
                <img src="img/sidebar/comment-3.jpg" alt=""/>
            </div>
            <div className="product__sidebar__comment__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5><a href="#">Kizumonogatari III: Reiket su-hen</a></h5>
                <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
            </div>
        </div>
        <div className="product__sidebar__comment__item">
            <div className="product__sidebar__comment__item__pic">
                <img src="img/sidebar/comment-4.jpg" alt=""/>
            </div>
            <div className="product__sidebar__comment__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5><a href="#">Monogatari Series: Second Season</a></h5>
                <span><i className="fa fa-eye"></i> 19.141 Viewes</span>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</section>

<footer className="footer">
    <div className="page-up">
        <a href="#" id="scrollToTopButton"><span className="arrow_carrot-up"></span></a>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="footer__logo">
                    <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="footer__nav">
                    <ul>
                        <li className="active"><a href="./index.html">Homepage</a></li>
                        <li><a href="./categories.html">Categories</a></li>
                        <li><a href="./blog.html">Our Blog</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3">
                <p>
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>

              </div>
          </div>
      </div>
  </footer>

  <div className="search-model">
    <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="search-close-switch"><i className="icon_close"></i></div>
        <form className="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....."/>
        </form>
    </div>
</div>
</body>	
			</>
		)
	}
}

export default App
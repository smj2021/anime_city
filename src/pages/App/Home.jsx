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

class Home extends Component {
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
				<NavBar user={user} handleLogout={this.handleLogout} />

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
						<AnimeResults animes={this.state.animes} />
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
				/>
			</>
		)
	}

    render() {
        return (
            <>
                <body>
                    <div id="preloder">
                        <div class="loader"></div>
                    </div>

                    <header class="header">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-2">
                                    <div class="header__logo">
                                        <a href="./index.html">
                                            <img src="img/logo.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div class="header__nav">
                                        <nav class="header__menu mobile-menu">
                                            <ul>
                                                <li class="active"><a href="./index.html">Homepage</a></li>
                                                <li><a href="./categories.html">Categories <span class="arrow_carrot-down"></span></a>
                                                    <ul class="dropdown">
                                                        <li><a href="./categories.html">Categories</a></li>
                                                        <li><a href="./anime-details.html">Anime Details</a></li>
                                                        <li><a href="./anime-watching.html">Anime Watching</a></li>
                                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                                        <li><a href="./signup.html">Sign Up</a></li>
                                                        <li><a href="./login.html">Login</a></li>
                                                        <Route
                                                            exact path='/anime-results'
                                                            render={() =>
                                                                <AnimeResults animes={this.state.animes} />
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
                                                    </ul>
                                                </li>
                                                <li><a href="./blog.html">Our Blog</a></li>
                                                <li><a href="#">Contacts</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <div class="header__right">
                                        <a href="#" class="search-switch"><span class="icon_search"></span></a>
                                        <a href="./login.html"><span class="icon_profile"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div id="mobile-menu-wrap"></div>
                        </div>
                    </header>

                    <section class="hero">
                        <div class="container">
                            <div class="hero__slider owl-carousel">
                                <div class="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="hero__text">
                                                <div class="label">Adventure</div>
                                                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                                <p>After 30 days of travel across the world...</p>
                                                <a href="#"><span>Watch Now</span> <i class="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="hero__text">
                                                <div class="label">Adventure</div>
                                                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                                <p>After 30 days of travel across the world...</p>
                                                <a href="#"><span>Watch Now</span> <i class="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="hero__text">
                                                <div class="label">Adventure</div>
                                                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                                <p>After 30 days of travel across the world...</p>
                                                <a href="#"><span>Watch Now</span> <i class="fa fa-angle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="product spad">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="trending__product">
                                        <div class="row">
                                            <div class="col-lg-8 col-md-8 col-sm-8">
                                                <div class="section-title">
                                                    <h4>Trending Now</h4>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="btn__all">
                                                    <a href="#" class="primary-btn">View All <span class="arrow_right"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/trending/trend-1.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/trending/trend-2.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/trending/trend-3.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Shingeki no Kyojin Season 3 Part 2</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/trending/trend-4.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Fullmetal Alchemist: Brotherhood</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/trending/trend-5.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Shiratorizawa Gakuen Koukou</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/trending/trend-6.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
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
                                    <div class="popular__product">
                                        <div class="row">
                                            <div class="col-lg-8 col-md-8 col-sm-8">
                                                <div class="section-title">
                                                    <h4>Popular Shows</h4>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="btn__all">
                                                    <a href="#" class="primary-btn">View All <span class="arrow_right"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/popular/popular-1.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Sen to Chihiro no Kamikakushi</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/popular/popular-2.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Kizumonogatari III: Reiket su-hen</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/popular/popular-3.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Shirogane Tamashii hen Kouhan sen</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/popular/popular-4.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Rurouni Kenshin: Meiji Kenkaku Romantan</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/popular/popular-5.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Mushishi Zoku Shou 2nd Season</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/popular/popular-6.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
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
                                    <div class="recent__product">
                                        <div class="row">
                                            <div class="col-lg-8 col-md-8 col-sm-8">
                                                <div class="section-title">
                                                    <h4>Recently Added Shows</h4>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="btn__all">
                                                    <a href="#" class="primary-btn">View All <span class="arrow_right"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/recent/recent-1.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Great Teacher Onizuka</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/recent/recent-2.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Fate/stay night Movie: Heaven's Feel - II. Lost</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/recent/recent-3.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Mushishi Zoku Shou: Suzu no Shizuku</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/recent/recent-4.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Fate/Zero 2nd Season</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/recent/recent-5.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Kizumonogatari II: Nekket su-hen</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/recent/recent-6.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
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
                                    <div class="live__product">
                                        <div class="row">
                                            <div class="col-lg-8 col-md-8 col-sm-8">
                                                <div class="section-title">
                                                    <h4>Live Action</h4>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4">
                                                <div class="btn__all">
                                                    <a href="#" class="primary-btn">View All <span class="arrow_right"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/live/live-1.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Shouwa Genroku Rakugo Shinjuu</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/live/live-2.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Mushishi Zoku Shou 2nd Season</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/live/live-3.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Mushishi Zoku Shou: Suzu no Shizuku</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/live/live-4.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/live/live-5.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
                                                        <ul>
                                                            <li>Active</li>
                                                            <li>Movie</li>
                                                        </ul>
                                                        <h5><a href="#">Fate/stay night Movie: Heaven's Feel - II. Lost</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-6">
                                                <div class="product__item">
                                                    <div class="product__item__pic set-bg" data-setbg="img/live/live-6.jpg">
                                                        <div class="ep">18 / 18</div>
                                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    </div>
                                                    <div class="product__item__text">
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
                                <div class="col-lg-4 col-md-6 col-sm-8">
                                    <div class="product__sidebar">
                                        <div class="product__sidebar__view">
                                            <div class="section-title">
                                                <h5>Top Views</h5>
                                            </div>
                                            <ul class="filter__controls">
                                                <li class="active" data-filter="*">Day</li>
                                                <li data-filter=".week">Week</li>
                                                <li data-filter=".month">Month</li>
                                                <li data-filter=".years">Years</li>
                                            </ul>
                                            <div class="filter__gallery">
                                                <div class="product__sidebar__view__item set-bg mix day years"
                                                    data-setbg="img/sidebar/tv-1.jpg">
                                                    <div class="ep">18 / ?</div>
                                                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    <h5><a href="#">Boruto: Naruto next generations</a></h5>
                                                </div>
                                                <div class="product__sidebar__view__item set-bg mix month week"
                                                    data-setbg="img/sidebar/tv-2.jpg">
                                                    <div class="ep">18 / ?</div>
                                                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                                </div>
                                                <div class="product__sidebar__view__item set-bg mix week years"
                                                    data-setbg="img/sidebar/tv-3.jpg">
                                                    <div class="ep">18 / ?</div>
                                                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    <h5><a href="#">Sword art online alicization war of underworld</a></h5>
                                                </div>
                                                <div class="product__sidebar__view__item set-bg mix years month"
                                                    data-setbg="img/sidebar/tv-4.jpg">
                                                    <div class="ep">18 / ?</div>
                                                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    <h5><a href="#">Fate/stay night: Heaven's Feel I. presage flower</a></h5>
                                                </div>
                                                <div class="product__sidebar__view__item set-bg mix day"
                                                    data-setbg="img/sidebar/tv-5.jpg">
                                                    <div class="ep">18 / ?</div>
                                                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                                    <h5><a href="#">Fate stay night unlimited blade works</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product__sidebar__comment">
                                            <div class="section-title">
                                                <h5>New Comment</h5>
                                            </div>
                                            <div class="product__sidebar__comment__item">
                                                <div class="product__sidebar__comment__item__pic">
                                                    <img src="img/sidebar/comment-1.jpg" alt="" />
                                                </div>
                                                <div class="product__sidebar__comment__item__text">
                                                    <ul>
                                                        <li>Active</li>
                                                        <li>Movie</li>
                                                    </ul>
                                                    <h5><a href="#">The Seven Deadly Sins: Wrath of the Gods</a></h5>
                                                    <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
                                                </div>
                                            </div>
                                            <div class="product__sidebar__comment__item">
                                                <div class="product__sidebar__comment__item__pic">
                                                    <img src="img/sidebar/comment-2.jpg" alt="" />
                                                </div>
                                                <div class="product__sidebar__comment__item__text">
                                                    <ul>
                                                        <li>Active</li>
                                                        <li>Movie</li>
                                                    </ul>
                                                    <h5><a href="#">Shirogane Tamashii hen Kouhan sen</a></h5>
                                                    <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
                                                </div>
                                            </div>
                                            <div class="product__sidebar__comment__item">
                                                <div class="product__sidebar__comment__item__pic">
                                                    <img src="img/sidebar/comment-3.jpg" alt="" />
                                                </div>
                                                <div class="product__sidebar__comment__item__text">
                                                    <ul>
                                                        <li>Active</li>
                                                        <li>Movie</li>
                                                    </ul>
                                                    <h5><a href="#">Kizumonogatari III: Reiket su-hen</a></h5>
                                                    <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
                                                </div>
                                            </div>
                                            <div class="product__sidebar__comment__item">
                                                <div class="product__sidebar__comment__item__pic">
                                                    <img src="img/sidebar/comment-4.jpg" alt="" />
                                                </div>
                                                <div class="product__sidebar__comment__item__text">
                                                    <ul>
                                                        <li>Active</li>
                                                        <li>Movie</li>
                                                    </ul>
                                                    <h5><a href="#">Monogatari Series: Second Season</a></h5>
                                                    <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer class="footer">
                        <div class="page-up">
                            <a href="#" id="scrollToTopButton"><span class="arrow_carrot-up"></span></a>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="footer__logo">
                                        <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="footer__nav">
                                        <ul>
                                            <li class="active"><a href="./index.html">Homepage</a></li>
                                            <li><a href="./categories.html">Categories</a></li>
                                            <li><a href="./blog.html">Our Blog</a></li>
                                            <li><a href="#">Contacts</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                    <div class="search-model">
                        <div class="h-100 d-flex align-items-center justify-content-center">
                            <div class="search-close-switch"><i class="icon_close"></i></div>
                            <form class="search-model-form">
                                <input type="text" id="search-input" placeholder="Search here....." />
                            </form>
                        </div>
                    </div>
                </body>
            </>
        )
    }
}

export default Home
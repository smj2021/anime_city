import React, { Component } from 'react'
import AnimeResults from '../../pages/AnimeResults/AnimeResults'
import AnimeDetails from '../../pages/AnimeDetails/AnimeDetails'
import Favorites from '../../pages/Favorites/Favorites'
import ToWatch from '../ToWatch/ToWatch'
import UpdateReview from '../../pages/UpdateReview/UpdateReview'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import * as authService from '../../services/authService'
import Users from '../Users/Users'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import * as reviewsService from '../../services/reviews';


class App extends Component {
	constructor() {
		super()
		this.state = {
			baseURL: 'https://api.jikan.moe/v3/search/anime?',
			query: 'q=',
			animeTitle: '',
			limit: "&limit=6",
			searchURL: '',
			user: authService.getUser(),
			reviews: []
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

	handleUpdateReview = async updatedReviewData => {
		const updatedReview = await reviewsService.update(updatedReviewData);
		console.log(updatedReview);
		const newReviewsArray = this.state.reviews.map(review => review._id === updatedReview._id ? updatedReview : review);
        this.setState(
            { reviews: newReviewsArray},
            // () => this.props.history.push('/')
        );
	}

	render() {
		const { user } = this.state
		return (
			<>
				<NavBar user={user} handleLogout={this.handleLogout} />

				<Form.Group>
					<Form onSubmit={this.handleSubmit}>
						<br />
						<input
							id="animeTitle"
							type="text"
							value={this.state.animeTitle}
							onChange={this.handleChange}
							placeholder="Search for anime..."
						/>
						<Button type="submit">Search</Button>
					</Form>
				</Form.Group>

				<Route exact path='/update' render={({ location }) =>
					<UpdateReview 
						history = {this.props.history}
						handleUpdateReview={this.handleUpdateReview}
						location={location} 
					/>
				} />

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

				<Route
					exact path='/to-watch'
					render={() =>
						<ToWatch />
					}
				/>
			</>
		)
	}
}
export default App
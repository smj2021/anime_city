import React, { Component } from 'react'
import AnimeInfo from '../../pages/AnimeInfo/AnimeInfo'
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
		e.preventDefault();
		this.setState({
			searchURL: this.state.baseURL + this.state.query + this.state.animeTitle + this.state.limit
		}, () => {
			fetch(this.state.searchURL)
				.then(res => res.json())
				.then(json => this.setState({
					anime: json,
					animeTitle: ''
				}))
				.catch(err => console.log(err))
		})
	}

	render() {
		const { user } = this.state
		return (
			<>
				<NavBar user={user} handleLogout={this.handleLogout} />
				<Route exact path='/'>
					<Landing user={user} />
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
				<a href={this.state.searchURL}>{this.state.searchURL}</a>

				{(this.state.anime) ? <AnimeInfo anime={this.state.anime} /> : ''}
			</>
		)
	}
}

export default App

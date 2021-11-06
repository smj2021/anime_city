import React, { Component } from 'react'
// import AnimeInfo from './AnimeInfo'
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

	render() {
		const { user } = this.state
		return (
			<>
				<NavBar user={user} handleLogout={this.handleLogout} />
				<Route exact path='/'>
          <Landing user={user} />
        </Route>
				<Route exact path='/signup'>
          <Signup history={this.props.history} handleSignupOrLogin={this.handleSignupOrLogin}/>
        </Route>
				<Route exact path='/login'>
          <Login handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
        </Route>
				<Route 
					exact path="/users"
					render={()=> 
						user ? <Users /> : <Redirect to='/login'/>
				}/>

			</>
		)
	}
}

export default App

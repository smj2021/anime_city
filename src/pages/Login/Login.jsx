import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

class LoginPage extends Component {
  render() {
    return (
      <>
        <section className="login spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="login__form">
                  <h3>Login</h3>
                  <form action="#">
                  <LoginForm history={this.props.history} handleSignupOrLogin={this.props.handleSignupOrLogin} />
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login__register">
                  <h3>Dont’t Have An Account?</h3>
                  <a href="#" className="primary-btn"><Link to="/signup">Sign Up</Link></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default LoginPage

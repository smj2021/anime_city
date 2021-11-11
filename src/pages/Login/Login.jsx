import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

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
                    <div className="input__item">
                      <input type="text" placeholder="Email address" />
                      <span className="icon_mail"></span>
                    </div>
                    <div className="input__item">
                      <input type="text" placeholder="Password" />
                      <span className="icon_lock"></span>
                    </div>
                    <button type="submit" className="site-btn">Login Now</button>
                  </form>
                  <a href="#" className="forget_pass">Forgot Your Password?</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login__register">
                  <h3>Dont’t Have An Account?</h3>
                  <a href="#" className="primary-btn">Register Now</a>
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

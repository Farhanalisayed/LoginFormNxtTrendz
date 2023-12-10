import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showMsg: false,
    errorMsg: '',
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = err => {
    this.setState({
      showMsg: true,
      errorMsg: err,
    })
  }

  onSumission = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onNameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {showMsg, errorMsg, username, password} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="the-cont">
        <img
          className="image"
          alt="website login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />
        <form onSubmit={this.onSumission}>
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            value={username}
            type="text"
            placeholder="Username"
            className="input"
            onChange={this.onNameChange}
            id="username"
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            value={password}
            type="text"
            placeholder="Password"
            className="input"
            onChange={this.onPasswordChange}
            id="password"
          />

          <button className="btn" type="submit">
            Login
          </button>
          {showMsg && <p className="erronious">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm

import React from 'react'
import './index.css'

// The same component written as a Class component, for comparison
class LoginFormClass extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render () {
    const { username, password } = this.state

    return (
      <div className='loginForm'>
        <h3>Please login:</h3>
        <input
          placeholder='username'
          value={username}
          onChange={this.handleUsernameChange}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={this.handlePasswordChange}
        />
      </div>
    )
  }
}

export default LoginFormClass

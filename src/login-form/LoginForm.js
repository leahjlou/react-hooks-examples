import React, { useState } from 'react'
import './index.css'

function LoginForm () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUsernameChange (e) {
    setUsername(e.target.value)
  }

  function handlePasswordChange (e) {
    setPassword(e.target.value)
  }

  return (
    <div className='loginForm'>
      <h3>Please login:</h3>
      <input
        placeholder='username'
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={handlePasswordChange}
      />
    </div>
  )
}

export default LoginForm

import React from 'react'
import './App.css'

import LoginForm from './login-form/LoginForm'
import Timer from './timer/Timer'
import ArticleWrapper from './article/ArticleWrapper'

function App () {
  return (
    <div>
      <LoginForm />
      <Timer />
      <ArticleWrapper />
    </div>
  )
}

export default App

import React, { useState } from 'react'
import ThemeContext, { themes } from './ThemeContext'
import Article from './Article'
import ThemeSwitcher from './ThemeSwitcher'
import './index.css'

function ArticleWrapper () {
  const [theme, setTheme] = useState(themes[0])

  return (
    <ThemeContext.Provider value={{
      theme,
      changeTheme: setTheme
    }}>
      <ThemeSwitcher />
      <Article />
    </ThemeContext.Provider>
  )
}

export default ArticleWrapper


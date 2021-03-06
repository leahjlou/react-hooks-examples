import React, { useState } from 'react'
import './index.css'
import Article from './Article'
import ThemeSwitcher from './ThemeSwitcher'

import ThemeContext, { themes } from './ThemeContext'

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


import React, { useContext } from 'react'
import ThemeContext, { themes } from './ThemeContext'

function ThemeSwitcher () {
  const { theme, changeTheme } = useContext(ThemeContext)

  function handleThemeChange (e) {
    changeTheme(e.target.value)
  }

  return (
    <div className='themeSwitcher'>
      Select theme:
      <select value={theme} onChange={handleThemeChange}>
        {themes.map(themeOption =>
          <option key={themeOption} value={themeOption}>
            {themeOption}
          </option>
        )}
      </select>
    </div>
  )
}

export default ThemeSwitcher


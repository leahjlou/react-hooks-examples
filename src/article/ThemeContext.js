import React from 'react'

export const themes = ['light', 'dark', 'pink']

const ThemeContext = React.createContext({
  theme: themes[0],
  changeTheme: () => {}
})

export default ThemeContext

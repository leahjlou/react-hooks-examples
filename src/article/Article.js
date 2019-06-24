import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function Article () {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`article ${theme}`}>
      <h2>Fun facts about sloths</h2>
      <p>
        Sloths are tropical mammals that live in Central and South America. They use their long claws to hang onto branches while they feast on the leaves that other animals can't reach. The sloth's long claws — 3 to 4 inches (8 to 10 centimeters) — make walking on the ground difficult, so they spend most of their time in the tall trees they call home.
      </p>
      <p>
        There are six species of sloth, and they come in two varieties: two-toed and three-toed. Three-toed sloths are about the size of a medium-sized dog at around 23 to 27 inches (58 to 68 cm) and 17.5 to 18.75 lbs. (about 8 kilograms). The two-toed sloths are slightly bigger than the three-toed sloths, though they share many of the same features.
      </p>
      <small>source: <a href='https://www.livescience.com/27612-sloths.html'>LiveScience</a></small>
    </div>
  )
}

export default Article


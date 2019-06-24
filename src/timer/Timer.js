import React, { useEffect, useState } from 'react'
import useMousePressed from '../custom-hooks/mouse-pressed'
import './index.css'

function Timer () {
  const [milliseconds, setMilliseconds] = useState(0)
  const mousePressed = useMousePressed()

  // Timer
  useEffect(function () {
    const timerId = setInterval(function () {
      if (!mousePressed) {
        setMilliseconds(milliseconds + 1)
      }
    }, 1)

    return function cleanup () {
      clearInterval(timerId)
    }
  })

  return (
    <div className='timer'>
      {milliseconds}
    </div>
  )
}

export default Timer

import React, { useEffect, useState } from 'react'
import useMousePressed from '../custom-hooks/mouse-pressed'
import './index.css'

function Timer () {
  const [milliseconds, setMilliseconds] = useState(0)
  const mousePressed = useMousePressed()

  // Timer
  useEffect(function () {
    if (!mousePressed) {
      const timerId = setInterval(function () {
        setMilliseconds(m => m + 1)
      }, 1)

      return function cleanup () {
        clearInterval(timerId)
      }
    }
  }, [mousePressed])

  return (
    <div className='timer'>
      {milliseconds}
    </div>
  )
}

export default Timer

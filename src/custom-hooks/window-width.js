import { useState, useEffect } from 'react'

export default function useWindowWidth () {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function handleResize () {
    setWindowWidth(window.innerWidth)
  }

  useEffect(function () {
    window.addEventListener('resize', handleResize)

    return function () {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth
}


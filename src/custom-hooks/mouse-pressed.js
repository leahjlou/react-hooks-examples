import { useState, useEffect } from 'react'

export default function useMousePressed () {
  const [mousePressed, setMousePressed] = useState(false)

  function handleMouseDown () {
    setMousePressed(true)
  }

  function handleMouseUp () {
    setMousePressed(false)
  }

  useEffect(function () {
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return function cleanup () {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return mousePressed
}


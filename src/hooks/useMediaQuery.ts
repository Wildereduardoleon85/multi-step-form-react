import { useEffect, useState } from 'react'

export function useMediaQuery(){
  const [windowSize, setWindowSize] = useState([window.innerWidth])
  const isMobile = windowSize[0] < 900

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth])
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  return {
    isMobile
  }
}


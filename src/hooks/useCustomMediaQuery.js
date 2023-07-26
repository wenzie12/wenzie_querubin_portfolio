import { useMediaQuery } from 'react-responsive'

const useCustomMediaQuery = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return {
    isTabletOrMobile,
    isBigScreen,
    isPortrait,
    isRetina,
  }
}

export default useCustomMediaQuery
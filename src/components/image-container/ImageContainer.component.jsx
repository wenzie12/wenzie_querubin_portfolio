/* eslint-disable */
import { useState, useEffect } from 'react'

const ImageContainer = ({ src, motion = false, ...imgProps}) => {
	const [isImgLoaded, setImgLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.onload = () => setImgLoaded(true)
		img.src = src



	}, [src])

  return (
    <>
			{!isImgLoaded && <i className="text-center">loading...</i>}
			{motion ? <motion.img src={src} { ...imgProps }/> : <img src={src} { ...imgProps } />}
		</>
  )
}

export default ImageContainer

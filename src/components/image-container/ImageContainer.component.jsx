/* eslint-disable */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ImageContainer = ({ src, isMotion=false, ...imgProps}) => {
	const [isImgLoaded, setImgLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.onload = () => setImgLoaded(true)
		img.src = src
	}, [src])

  return (
    <>
			{!isImgLoaded && <i className=" animate-pulse">Loading...</i>}	
			{isMotion ? <motion.img src={src} { ...imgProps }/> : <img src={src} { ...imgProps } />}
		</>
  )
}

export default ImageContainer

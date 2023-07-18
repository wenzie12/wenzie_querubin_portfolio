/* eslint-disable */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { FileImage } from 'lucide-react'

const ImageContainer = ({
	src,
	isMotion=false,
	className="",
	...imgProps
}) => {
	const [isImgLoaded, setImgLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.onload = () => setImgLoaded(true)
		img.src = src
	}, [src])

  return (
    <>
			{!isImgLoaded && (
				<span className="z-10 absolute w-full min-w-[180px] min-h-[280px] md:min-w-[240px] md:min-h-[440px] mx-auto flex flex-col items-center justify-center animate-pulse">
					<FileImage className="text-secondary w-12 h-12 animate-bounce "/>
					<i className="text-sm my-1 mix-blend-difference">Loading</i>
				</span>)}

			{isMotion ? <motion.img src={src} className={`relative ${className}`} { ...imgProps } /> : <img src={src} className={`relative ${className}`} { ...imgProps } />}
		</>
  )
}

export default ImageContainer

/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { FileImage, ImageOff } from 'lucide-react'

const ImageContainer = ({
	src="",
	isMotion=false,
	className="",
	...imgProps
}) => {
	const [isImgLoaded, setImgLoaded] = useState(false)
	const [isError, setImgError] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.onload = () => setImgLoaded(true)
		img.onerror = () => setImgError(true)
		img.src = src
	}, [src])

	const isImgMotionComponent = (isMotion=false) => {
		if (isMotion) return (
			<motion.img
				src={src}
				className={`relative ${className}`}
				{ ...imgProps }
			/>
		)
		return <img src={src} className={`relative ${className}`} { ...imgProps } />
	}

	const imageRenderStatus = (onLoadStatus, imgSrc) => {
		if (!imgSrc || isError) return <BrokenImgComponent className={className} />
		
		return (
			<>
				{!onLoadStatus && <LoadingComponent className={className} />}
				{isImgMotionComponent(isMotion)}
			</>
		)
	}

  return imageRenderStatus(isImgLoaded, src)
}

const LoadingComponent = ({ className }) => (
	<span className={`${className} absolute z-10 flex flex-col items-center justify-center animate-pulse`}>
		<FileImage className="text-secondary w-10 h-10 animate-bounce"/>
		{/* <i className="text-xs my-1 mix-blend-difference text-white-100">Loading Asset</i> */}
	</span>
)

const BrokenImgComponent = ({ className }) => (
	<span className={`${className} z-10 flex items-center justify-center`}>
		<ImageOff className="text-secondary w-10 h-10"/>
	</span>
)

export default ImageContainer

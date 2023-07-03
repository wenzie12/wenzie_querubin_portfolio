
// TODO: no need for this, #delete this
/* eslint-disable */
import { motion } from 'framer-motion'
import { textVariant, fadeIn, raiseUp, perspectiveVariant, perspectiveVariantImage } from '../../utils/motion'

// context
import { useCursorContext } from '../../context/HOCContext'

/*
	props:
	imgJustify - bool | check position if left or right (true -> left | false -> right | 0,)
	cardStyleType - string | card custom style (hxw) based on section.
	onMouseEnterWeb - fx() | mouse enters component
	onMouseLeaveWeb - fx() | mouse leaves component
	onMouseEnterMobile - fx() |mouse enters component (mobile image)
	onMouseLeaveMobile - fx() | mouse leaves component (mobile image)
	perspective - image css perspective | degree or angle
	
	anchor:
	href - string | url,
	target - string | a tag target attribute

	image:
	src - url/string | image src,
	srcMobile - url/string | image src if mobile is available
	alt - string | image alternative name
*/

const Img = ({
	onMouseEnter, 
	onMouseLeave, 
	src, 
	alt, 
	cardStyleType, 
	imgJustify,
	perspective,
}) => (
	<motion.img
		onMouseEnter={onMouseEnter}
		onMouseLeave={onMouseLeave} 
		variants={
			perspectiveVariantImage(
				`${imgJustify ? '15deg' : '-15deg'}`, // rotateY
				`${imgJustify ? '15px' : '-15px'}`, // translateX
				'15px', // translateY
				perspective, // degree
		)}
		// whileHover="animate"
		// initial="initial"
		src={src}
		alt={alt}
		className={`
			${cardStyleType} z-10
			md:pt-0 lg:pb-0 mx-auto
			grayscale group-hover:grayscale-0 group-hover:bg-primary`
		}
	/>
)

const ImageCard = ({
	imgJustify=false,
	perspective="500px",
	cardStyleType="",
	onMouseEnter=()=>{},
	onMouseLeave=()=>{},
	
	onMouseEnterMobile=()=>{},
	onMouseLeaveMobile=()=>{},
	// anchor
	href="",
	target="_blank",
	// image
	src="",
	srcMobile="",
	alt="",
}) => {

	const {
    cursorTextState: { cursorText, setCursorText },
    cursorVariantState : { setCursorVariant },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()

  return (
    <>
			<motion.div
				variants={perspectiveVariant(`${imgJustify ? '-10deg' : '10deg'}`, perspective)}
				initial="initial"
				whileHover="animate"
				className={`${cardStyleType} group mb-8 md:mb-0 bg-blue-100`}
			>	
				{/* image */}
				{href ? (
					<a
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						href={href}
						hrefLang="en-us"
						target={target}
						rel="noreferrer"
					>
						<Img
							onMouseEnter={onMouseEnter}
							onMouseLeave={onMouseLeave} 
							imgJustify={imgJustify}
							perspective={perspective}
							cardStyleType={cardStyleType}
							src={src}
							alt={alt}
						/>
					</a>
				) : (
					<Img
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave} 
						imgJustify={imgJustify}
						perspective={perspective}
						cardStyleType={cardStyleType}
						src={src}
						alt={alt}
					/>
				)}

				{/* mobile */}
				{srcMobile && (
					// todo add anchor for mobile link (google play and appstore)
					<motion.img
						variants={perspectiveVariant(`${imgJustify ? '-15deg' : '15deg'}`, perspective)}
						onMouseEnter={onMouseEnterMobile}
						onMouseLeave={onMouseLeaveMobile}
						src={srcMobile}
						alt={alt}
						style={{ filter: "drop-shadow(-20px 15px 20px rgba(0, 0, 0, .30))"}}
						className={
							`${cardStyleType} ${imgJustify ? 'left-6' : 'right-6'}
							absolute -bottom-14 z-20 rounded-md md:pt-0 lg:pb-0 
							mx-auto grayscale group-hover:grayscale-0
						`}
					/>
				)}
			</motion.div>
		</>
  )
}

export default ImageCard

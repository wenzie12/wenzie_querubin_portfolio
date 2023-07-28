/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useCustomMediaQuery } from '../../hooks'

import { fadeIn, staggerContainer } from '../../utils/motion'
import SocialLinks from './SocialLinks.component'

const SocialMediaVerticalContainer = ({ loading }) => {
	const { isTabletOrMobile } = useCustomMediaQuery()

	const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

	const positionBottom = useTransform(scrollYProgress, [0, 1], ["0", "-2.5rem"])

  return (
		<motion.div
			ref={ targetRef }
			style={{ 
				...(!isTabletOrMobile ? { bottom: positionBottom } : { display: "none"}), 
				transition: "400ms ease-in-out 200ms"
			}}
			className="md:px-14 lg:px-16 px-6 fixed -right-4 max-w-7xl mx-auto flex flex-row items-start gap-5 z-40"
		>
			<div className="flex flex-col justify-center items-center">
				<motion.div
					variants={staggerContainer(.2)}
					initial="hidden"
					animate="show"
					className="flex flex-col justify-center w-9 h-52 dark:text-accent-1 text-accent-1-lt"
				>
				<SocialLinks />
				</motion.div>
				
				{/* vertical line */}
				<motion.div
					variants={fadeIn("up", "spring", .2, .8)}
					initial="hidden"
					animate={loading ? "hidden" : "show"}
					className="w-1 h-16 md:h-32 dark:bg-accent-1 bg-accent-1-lt"
				/>
			</div>
		</motion.div>
	)
}

export default SocialMediaVerticalContainer

/* eslint-disable */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { atIcon, linkedin, github, facebook, resume, resumeFile } from '../../assets'
import { styles } from '../../styles'
import { fadeIn, zoomIn, raiseUp, staggerContainer } from '../../utils/motion'
import { social_links } from '../../constants/index'
// context
import { useCursorContext } from '../../context/HOCContext'

const SocialMedia = ({ loading }) => {
	const {
    cursorTextState: { cursorText, setCursorText },
    hoverEvents: { enterHover, leaveHover },
		cursorVariantState: { cursorVariant },
  } = useCursorContext()

	const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

	const positionBottom = useTransform(scrollYProgress, [0, 1], ["0", "-2.5rem"])

	const hover = {
		y: -5,
    transition: {
      duration: .2,
      ease: "easeInOut"
    }
	}
	
  return (
    <motion.div
			ref={ targetRef }
			transition={{ type: "spring", delay: .5 }}
			style={{ bottom: positionBottom }}
			className={`md:px-14 lg:px-16 px-6 fixed right-0 max-w-7xl mx-auto flex flex-row items-start gap-5 z-40`}
		>
			<div className="flex flex-col justify-center items-center">
        <motion.div
					variants={staggerContainer(.2)}
					initial="hidden"
					animate="show"
					className="flex flex-col justify-center gap-y-6 w-7 h-52 text-blue-100"
				>

				{
					social_links?.map((item, index) => {
						const { name, icon, link  } = item
						return (
							<motion.a
								key={`name-${index}`}
								// variants={zoomIn(index * 0.2 ,0.5)}
								variants={fadeIn("up", "spring", .1 * index)}
								href={link}
								target="_blank"
								rel="noreferrer"
								hreflang="en-us"
								onMouseEnter={() => enterHover("anchor", {
									...cursorText,
									offset: 15,
									text: name,
								})}
								onMouseLeave={leaveHover}
								className="px-0 mx-auto"
							>
								<motion.img whileHover={hover} src={icon} alt={name} className="w-4 h-4" />
							</motion.a>
						)	
					})
				}
					{/* cv */}
					<motion.a
						variants={zoomIn(.5,.5)}
						href={resumeFile}
						target="_blank"
						rel="noreferrer"
						onMouseEnter={() => enterHover("anchor", {
							...cursorText,
							// offset: 65,
							offset: 15,
							text: "download me!",
						})}
						download
						onMouseLeave={leaveHover}
						className=""
					>
						<motion.div whileHover={hover} className="mx-auto border rounded border-secondary px-2 py-4 ">
							<img
								src={resume}
								alt="resume"
								className="w-3"
							/>
						</motion.div>
					</motion.a>
        </motion.div>
        <motion.div
					variants={fadeIn("up", "spring", .2, .8)}
					initial="hidden"
					animate={loading ? "hidden" : "show"}
					className="w-1 mt-2 sm:h-40 h-32 bg-blue-100"
				/>
			</div>
    </motion.div>
  )
}

export default SocialMedia

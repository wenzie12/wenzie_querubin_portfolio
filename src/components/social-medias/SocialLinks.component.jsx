// todo: separate mo nalng per social <a /> tapos gawa ka ng component para sa vertical social media links at horizontal social media links, need magkaiba ung animations
/* eslint-disable */
import { motion } from 'framer-motion'
import { resumeFile } from '../../assets'
import { fadeIn, zoomIn } from '../../utils/motion'
import { social_links } from '../../constants/index'

// context
import { useCursorContext } from '../../context/HOCContext'

const SocialLinks = ({ resumeLinkOrientation="vertical" }) => {
	const {
    cursorTextState: { cursorText },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()

	const hover = {
		y: -5,
    transition: {
      duration: .2,
      ease: "easeInOut"
    }
	}
	
  return (
    <>
			{social_links?.map((item, index) => {
				const { name, icon, link  } = item
				return (
					<motion.a
						key={`name-${index}`}
						variants={fadeIn("up", "spring", .1 * index)}
						href={link}
						target="_blank"
						rel="noreferrer"
						hrefLang="en-us"
						onMouseEnter={() => enterHover("anchor", {
							...cursorText,
							offset: 15,
							text: name,
						})}
						onMouseLeave={leaveHover}
						className="py-3 flex justify-center items-center"
					>
						<motion.img whileHover={hover} src={icon} alt={name} className="w-4 h-4" />
					</motion.a>)	
			})}
			{/* resume */}
			<motion.a
				variants={zoomIn(.5,.5)}
				href={resumeFile}
				target="_blank"
				rel="noreferrer"
				onMouseEnter={() => enterHover("anchor", {
					...cursorText,
					offset: 15,
					text: "download me!",
				})}
				onMouseLeave={leaveHover}
				download
				className="py-3"
			>
				<motion.div whileHover={hover} className={`${resumeLinkOrientation === "horizontal" ? "px-2 py-1" : "py-9"} flex justify-center items-center rounded border-secondary border `}>
					<span className={`${resumeLinkOrientation === "horizontal" ? "rotate-0" : "-rotate-90"}  block text-tertiary  text-center text-[16px] custom-pointer relative text-sm`}>
						Resume
					</span>
				</motion.div>
			</motion.a>
    </>
  )
}

export default SocialLinks

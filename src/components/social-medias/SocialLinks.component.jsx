/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import { social_links, downloadables } from '../../constants/index'
import { useMediaQuery } from 'react-responsive'

import { FileDown } from 'lucide-react'

// context
import { useCursorContext } from '../../context/HOCContext'

const SocialLinks = ({ resumeLinkOrientation="vertical", isResumeIcon=false }) => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
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
						variants={!isTabletOrMobile ? fadeIn("up", "spring", .1 * index) : fadeIn("", "", .1 * index)}
						href={link}
						aria-label={name}
						target="_blank"
						rel="noreferrer"
						hrefLang="en-us"
						onMouseEnter={() => enterHover("anchor", {
							...cursorText,
							offset: 15,
							text: name,
						})}
						onMouseLeave={leaveHover}
						className="py-3 w-10 flex justify-center items-center"
					>
						<motion.span
							whileHover={hover}
						>
							{icon({ className: "w-6 h-6 text-secondary", })}
						</motion.span>
					</motion.a>)	
			})}
			{/* resume */}
			<motion.a 
				variants={!isTabletOrMobile ? fadeIn("up", "spring", .3) : fadeIn("", "", .3)}
				href={downloadables?.resume}
				aria-label="resume"
				target="_blank"
				rel="noopener noreferrer"
				onMouseEnter={() => enterHover("anchor", {
					...cursorText,
					offset: 15,
					text: "download resume",
				})}
				onMouseLeave={leaveHover}
				download
				className={`${isResumeIcon ? 'flex flex-col gap-y-2 justify-center items-center py-0 w-10' : 'py-3'}`}
			>
				{
					isResumeIcon ? 
						<motion.span whileHover={hover}>
							<FileDown className="w-6 h-6 text-secondary"/>
						</motion.span> :
						<motion.div whileHover={hover} className={`${resumeLinkOrientation === "horizontal" ? "px-2 py-1" : "py-8 px-4"} flex justify-center items-center rounded-md border-secondary border-2`}>
							<span className={`${resumeLinkOrientation === "horizontal" ? "rotate-0" : "-rotate-90"}  block text-white-100  text-center custom-pointer relative text-xs`}>
								Resume
							</span>
						</motion.div>
					}

			</motion.a>
    </>
  )
}

export default SocialLinks

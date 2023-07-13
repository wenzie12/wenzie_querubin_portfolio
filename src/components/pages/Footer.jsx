import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { styles } from "../../styles"

import { fadeIn } from '../../utils/motion'
import { SECONDARY_COLOR } from '../../themes/constants'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

import HighlightedText from "../custom-text/HighlightedText.component"
import { ProfileLogo } from '../icons'

const Footer = () => {
	const { hoverEvents: { enterHover, leaveHover } } = useCursorContext()
	const { activeState: { setActive }, } = useGlobalStateContext()


  return (
    <footer className={`${styles.paddingX} flex flex-col gap-4 items-center justify-end pb-10 h-80 w-full`}>
			<motion.div
				variants={fadeIn("", "tween", .2 , .4)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="flex items-center justify-center gap-2 md:gap-4"
			>
				<Link 
					to="/"
					className='flex items-center gap-2 z-10'
					onMouseEnter={() => enterHover("anchor")}
					onMouseLeave={leaveHover}
					onClick={() => {
						window.scrollTo(0,0)
						setActive("")
					}}
				>
					<ProfileLogo
						classSVG="w-7 h-7"
						classPath=""
						fill={SECONDARY_COLOR}
						role="icon"
					/>
				</Link>
				<span className="flex flex-col xs:flex-row text-xs md:text-sm text-tertiary">
					Design & Developed by <HighlightedText className="text-tertiary xs:px-1" delay={0.6}>Wenzie Querubin</HighlightedText>
				</span>
			</motion.div>
    </footer>
  )
}

export default Footer

import { motion } from 'framer-motion'
import { logo, } from "../../assets"
import { Link } from 'react-router-dom'
// import { styles } from "../../styles"

import { fadeIn } from '../../utils/motion'

import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'
import HighlightedText from "../custom-text/HighlightedText.component"

const Footer = () => {
	const { hoverEvents: { enterHover, leaveHover } } = useCursorContext()
	const { activeState: { setActive }, } = useGlobalStateContext()


  return (
    <footer className="flex flex-col gap-4 items-center justify-end pb-10 h-80 w-full">
			<motion.div
				variants={fadeIn("", "tween", .2 , .4)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="flex flex-row items-center gap-4"
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
					<img src={logo} alt="logo" className=" w-7 h-7" />
				</Link>


				<p className="text-sm text-tertiary">
					Design & Developed by 
					<HighlightedText className="text-tertiary" delay={0.6}>
						Wenzie Querubin
					</HighlightedText>
				</p>
			</motion.div>
			<div className="flex flex-row items-center gap-4">
				{/* testing lang to */}
				{/* <img src={github} alt="logo" className=" w-5 h-5" /> */}
			</div>
    </footer>
  )
}

export default Footer

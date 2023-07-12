/* eslint-disable */
import { motion, AnimatePresence } from 'framer-motion'
import { zoomIn } from '../../utils/motion'

import { ProfileLogo } from '../icons'

import { SECONDARY_COLOR, TERTIARY_COLOR, BLUE_200_COLOR, } from '../../themes/constants'

// context
import { useCursorContext } from '../../context/HOCContext'

const LandingPageLoader = ({ loading }) => {
	const {
		cursorTextState: { cursorText, setCursorText },
		hoverEvents: { enterHover, leaveHover },
	} = useCursorContext()

	const logoData = [
		{ fill: BLUE_200_COLOR, class: "w-6 h-6", path: "opacity-60", delay: 1.2, duration: .3, },
		{ fill: TERTIARY_COLOR, class: "w-8 h-8", path: "opacity-75", delay: 1, duration: .3, },
		{ fill: SECONDARY_COLOR, class: "w-12 h-12", path: "opacity-100", delay: .5, duration: .3, },
		{ fill: TERTIARY_COLOR, class: "w-8 h-8", path: "opacity-75", delay: .8, duration: .3, },
		{ fill: BLUE_200_COLOR, class: "w-6 h-6", path: "opacity-60", delay: 1.2, duration: .3, },
	]

  return (
		<AnimatePresence>
			{loading && (
				<motion.div
					variants={zoomIn(0, 1)}
					exit="hidden"
					style={{ height: "100dvh", }}
					className="grid place-items-center absolute top-0 left-0 right-0 w-full scrollbar-hide"
					onMouseEnter={() => enterHover("anchor", {
						...cursorText,
						offset: 85,
						text: `Loading`,
					})}
					onMouseLeave={leaveHover}
				>
					<div className="flex gap-2 items-center">
						{
							logoData?.map((item, i) => (
								<ProfileLogo
									key={i}
									isMotion
									variants={zoomIn(item.delay, item.duration)}
									animate="show"
									initial="hidden"
									classSVG={item.class}
									classPath={item.path}
									fill={item.fill}
								/>
							))
						}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
  )
}


export default LandingPageLoader

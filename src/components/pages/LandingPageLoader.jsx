/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion'
import { zoomIn } from '../../utils/motion'

import { ProfileLogo } from '../icons'
import { LOGO_DATA } from '../../constants'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

import { colors } from '../../themes/constants'

const LandingPageLoader = ({ loading }) => {
	const { toggleThemeState: { toggleDarkMode } } = useGlobalStateContext()
	const {
		cursorTextState: { cursorText },
		hoverEvents: { enterHover, leaveHover },
	} = useCursorContext()

  return (
		<AnimatePresence>
			{loading && (
				<motion.div
					variants={zoomIn(0, 1)}
					exit="hidden"
					style={{ height: "100dvh", backgroundColor: `${toggleDarkMode ? colors['primary'] : colors['primary-lt']}` }}
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
							LOGO_DATA?.map((item, i) => (
								<ProfileLogo
									key={i}
									isMotion
									variants={zoomIn(item.delay, item.duration)}
									animate="show"
									initial="hidden"
									classSVG={item.class}
									classPath={item.path}
									fill={toggleDarkMode ? item.fill : item.fill_lt}
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

/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { colors } from '../../themes/constants'

// context
import { useGlobalStateContext } from '../../context/GlobalStateContext'

const HighlightedText = ({
	className="",
	children="sample text",
	delay=0.3,
	duration=0.5,
	color=`${colors['secondary']}`
}) => {
	const { toggleThemeState: { toggleDarkMode } } = useGlobalStateContext()
	const secondaryColor = colors[toggleDarkMode ? 'secondary' : 'secondary-lt']

	const highlightVariants = {
		initial: {
			backgroundImage: `linear-gradient(${secondaryColor}, ${secondaryColor})`,
			backgroundSize: "100% 100%",
			backgroundPosition: "100% 0px",
			transition: {
				backgroundPosition: { duration: duration, delay: delay },
			}
		},
		animate: {
			backgroundImage: `linear-gradient(${secondaryColor}, ${secondaryColor})`,
			backgroundRepeat: "no-repeat",
			backgroundSize: "4px 100%",
			backgroundPosition: "-10px 0px",
			color: color,
			transition: {
				delay: .3,
				backgroundSize: { duration: duration },
				backgroundPosition: { duration: duration, delay: delay },
			}
		},
	}

  return (
    <motion.i
			variants={highlightVariants}
			initial="initial"
			whileInView="animate"
			viewport={{ once: false, amount: 0.25 }}
			className={`${className} inline-block`}
    >
     {children}
    </motion.i>
  )
}

export default HighlightedText

/* eslint-disable */
import { motion } from 'framer-motion'
import { SECONDARY_COLOR } from '../../themes/constants'

const HighlightedText = ({
	className="",
	children="sample text",
	delay=0.3,
	duration=0.5,
	color=`${SECONDARY_COLOR}`
}) => {

	const highlightVariants = {
		initial: {
			// backgroundImage: 'linear-gradient(#D4494C, #D4494C)',
			backgroundImage: `linear-gradient(${SECONDARY_COLOR}, ${SECONDARY_COLOR})`,
			backgroundSize: "100% 100%",
			backgroundPosition: "100% 0px",
			transition: {
				backgroundPosition: { duration: duration, delay: delay },
			}
		},
		animate: {
			backgroundImage: `linear-gradient(${SECONDARY_COLOR}, ${SECONDARY_COLOR})`,
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
			// bg-gradient-to-r bg-no-repeat from-secondary-100 to-secondary
    >
     {children}
    </motion.i>
  )
}

export default HighlightedText

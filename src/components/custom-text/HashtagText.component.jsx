import { motion } from "framer-motion"

import { raiseUp, } from '../../utils/motion'

// eslint-disable-next-line react/prop-types
const HashtagText = ({ label }) => {
  return (
      <motion.div
        variants={raiseUp}
        whileHover="animate"  
        initial="initial"
      >
        <i className="dark:text-secondary text-secondary-lt mr-1">#</i>
        <span className="dark:text-accent-2 text-accent-2-lt">{label}</span>
      </motion.div>
  )
}

export default HashtagText

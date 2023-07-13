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
        <i className="text-secondary mr-1">#</i>
        <span className="text-blue-200">{label}</span>
      </motion.div>
  )
}

export default HashtagText

/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { useCustomMediaQuery } from '../../hooks'

import { raiseUp, } from '../../utils/motion'

const HashtagText = ({ label }) => {
  const { isTabletOrMobile } = useCustomMediaQuery()
  return (
      <motion.div
        {...(!isTabletOrMobile && {
          variants: raiseUp,
          whileHover:"animate",
          initial:"initial",
        })}

      >
        <i className="dark:text-secondary text-secondary-lt mr-1">#</i>
        <span className="dark:text-accent-2 text-accent-2-lt">{label}</span>
      </motion.div>
  )
}

export default HashtagText

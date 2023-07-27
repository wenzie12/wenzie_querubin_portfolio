/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { Hash } from "lucide-react"
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
        className="flex flex-row items-center"
      >
        {/* <i className="dark:text-secondary text-secondary-lt mr-1">#</i> */}
        <Hash className="dark:text-secondary text-secondary-lt w-4 h-4 mr-1" />
        <span className="dark:text-accent-2 text-accent-2-lt">{label}</span>
      </motion.div>
  )
}

export default HashtagText

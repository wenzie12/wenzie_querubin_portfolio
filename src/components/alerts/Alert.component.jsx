/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { twMerge } from "tailwind-merge"

import { styles } from '../../styles' 
import { textVariant } from '../../utils/motion'

const Alert = ({
  message="", 
  bgColor="dark:bg-secondary/95 bg-secondary-lt/95",
  icon="",
}) => {

  if (!message) return null

  return (
    <motion.div
      variants={textVariant(.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={twMerge(
        styles.dropShadowMd, bgColor,
        !icon && "text-center",
        `text-accent-3 rounded-md p-3 my-2 mx-auto
        absolute top-4 left-4 right-4 text-sm
        flex flex-row items-center gap-2 z-40`
      )}
    >
      {/* Opps something went wrong! */}
      {icon}
      {message}
    </motion.div>
  )
}

export default Alert

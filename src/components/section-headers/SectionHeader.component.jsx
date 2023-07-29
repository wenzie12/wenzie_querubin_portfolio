/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { twJoin, twMerge } from 'tailwind-merge'

import { textVariant } from '../../utils/motion'
import { styles } from '../../styles'

const SectionHeader = ({ header, sub, textJustify="" }) => {
  return (
    <motion.div variants={textVariant()} className={twJoin(textJustify, "")}>
      <p className={twMerge(styles.sectionSubText, "dark:text-tertiary text-tertiary-lt")}>{sub}</p>
      <h2 className={twMerge(styles.sectionHeadText, "dark:text-secondary text-secondary-lt")}>{header}</h2>
    </motion.div>
  )
}

export default SectionHeader
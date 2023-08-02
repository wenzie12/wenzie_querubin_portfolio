/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

import { textVariant } from '../../../utils/motion'
import { styles } from '../../../styles'

const ModalHeader = ({ header, sub, className=""}) => {
  return (
    <motion.div variants={textVariant()} className={twMerge(className, "")}>
      <p className={twMerge(styles.modalSubText, "dark:text-tertiary text-tertiary-lt")}>{sub}</p>
      <h2 className={twMerge(styles.modalHeadText, "dark:text-secondary text-secondary-lt")}>{header}</h2>
    </motion.div>
  )
}

export default ModalHeader
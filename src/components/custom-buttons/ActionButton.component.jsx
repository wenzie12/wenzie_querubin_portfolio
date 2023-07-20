/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { raiseUp } from '../../utils/motion'

const ActionButton = ({ label="", isDisabled=false, ...otherProps}) => {
  return (
    <motion.button
      { ...(!isDisabled && {
        variants: raiseUp,
        initial: "initial",
        whileHover: "animate",
      })}
      type="button"
      className={`${styles.borderBox} ${!isDisabled ? 'border-secondary' : 'border-accent-1 cursor-not-allowed'} flex items-center justify-center rounded-md h-[40px] text-xs`}
      { ...otherProps }
    >
      <span className={`${isDisabled ? 'text-accent-2' : 'text-white-100'}`}>
        {isDisabled && `// `}{label}
      </span>
    </motion.button>
  )
}

export default ActionButton
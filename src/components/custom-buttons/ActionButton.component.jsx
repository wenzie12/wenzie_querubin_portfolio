/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { twMerge, } from 'tailwind-merge'
import { styles } from '../../styles'
import { raiseUp } from '../../utils/motion'

import { useCustomMediaQuery } from '../../hooks'

const ActionButton = ({ label="", type="button", isDisabled=false, className="", ...otherProps}) => {
  const { isTabletOrMobile } = useCustomMediaQuery()

  return (
    <motion.button
      {...(!isDisabled && {
        variants: raiseUp,
        initial: "initial",
        ...(!isTabletOrMobile && { whileHover: "animate", })
      })}
      disabled={isDisabled}
      type={type}
      className={twMerge(
        styles.borderBox,
        ` ${!isDisabled ? 'dark:border-secondary border-secondary-lt' : 'dark:border-accent-2 border-accent-2-lt cursor-not-allowed'} flex items-center justify-center rounded-md h-[40px] text-xs`,
        className,
      )}
      { ...otherProps }
    >
      <span className={`${isDisabled ? 'dark:text-accent-2 text-accent-2-lt' : 'dark:text-accent-3 text-accent-3-lt'}`}>
        {isDisabled && `// `}{label}
      </span>
    </motion.button>
  )
}

export default ActionButton
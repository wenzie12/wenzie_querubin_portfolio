/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

import { styles } from '../../styles'
import { fadeIn } from '../../utils/motion'


const InputContainer = React.forwardRef((props, ref) => {
  const { errorMessage="", isTextArea=false, containerClassName="", label="", htmlFor="", labelClassName="", inputClassName="", ...otherProps } = props
  return (
    <div className={twMerge(
      containerClassName,
      "flex flex-col"
    )}>
      <label
        htmlFor={htmlFor}
        className={twMerge(
          labelClassName,
          styles.sectionText,
          `dark:text-accent-3 text-accent-3-lt
            pb-2 flex flex-row items-center gap-2
            overflow-y-hidden`
        )}
      >
        {label}
        <motion.i
          variants={fadeIn("up", "spring", .1, .4)}
          initial="hidden"
          animate={errorMessage ? "show" : "hidden"}
          className="text-secondary text-xs"
        >
          {errorMessage}
        </motion.i>
      </label>
      {!isTextArea ? (
        <input
          ref={ref}
          // default design
          className={twMerge(
            inputClassName,
            "dark:text-accent-3 text-accent-3-lt rounded-md dark:border-secondary border-secondary-lt dark:bg-accent-2/20 bg-accent-2-lt/20  h-10 p-4 placeholder:opacity-50 placeholder:italic placeholder:text-sm"
          )}
          { ...otherProps }
        />
      ) : (
        <textarea
          ref={ref}
          className={twMerge(
            inputClassName,
            "dark:text-accent-3 text-accent-3-lt rounded-md dark:border-secondary border-secondary-lt dark:bg-accent-2/20 bg-accent-2-lt/20 p-4 h-36 min-h-12 placeholder:opacity-50 placeholder:italic placeholder:text-sm"
          )}
          { ...otherProps }
        />
      )}
    </div>)
  }
)

export default InputContainer
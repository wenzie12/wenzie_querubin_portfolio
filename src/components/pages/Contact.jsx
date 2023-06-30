/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { useInView } from 'react-intersection-observer';

import { textVariant, fadeIn, raiseUp, swivelVariants } from '../../utils/motion'
import { styles } from '../../styles'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'


const Contact = ({ opacity, scale }) => {

  const {
    cursorTextState: { cursorText, setCursorText },
    cursorVariantState : { setCursorVariant },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()
  const { activeState: { setActive }, } = useGlobalStateContext()


  // intersection observer
  const { ref, inView } = useInView({
    // rootMargin: "-200px 0px",
    // threshold: [0, 1],
    threshold: 1,
  })

  useEffect(() => {
    if(inView) setActive("Contact")
    if(inView === false) setActive("")
  }, [inView])

  return (
    <>
      <motion.div inView={inView} ref={ref} className={`${styles.contentContainer}`} style={{ opacity, scale }}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-tertiary text-center`} >SEND ME A MESSAGE</p>
          <h2 className={`${styles.sectionHeadText} text-secondary text-center`}>Contact</h2>
        </motion.div>
        {/* left section */}
        <motion.div className="flex-col-reverse md:flex-row flex">
          <div  className="flex flex-col text-justify">
            <motion.p     
              // variants={fadeIn("", "", 0.2, 1)}
              variants={swivelVariants}
              className={`${styles.sectionText} ${styles.contentSpacing} text-tertiary text-center px-0 md:px-10 lg:px-20`}
            >
              {`Although I’m not currently looking for any new 
              opportunities, my inbox is always open. Whether you have a 
              question or just want to say hi, I’ll try my best to get back to you!`}
            </motion.p>
          </div>
        </motion.div>
          <motion.div
            whileHover="animate"
            initial="initial"
            className="flex justify-center w-full p-4 text-secondary"
          >
            {/* update later */}
            {/* TODO: make this custom-button later */}
            <motion.button
              variants={raiseUp}
              whileHover="animate"
              initial="initial"
              type="button"
              onClick={() => console.log("modal here!")}
              onMouseEnter={() => enterHover("hideHover")}
              onMouseLeave={leaveHover} 
              className={`${styles.borderBox} h-[30px] flex items-center justify-center rounded-md border-secondary px-3 text-[12px]`}
              // className={`h-[30px] flex items-center justify-center rounded-md border-secondary px-3 text-[12px]`}
            >
              {/* <i className="text-secondary text-bold mr-1">#</i> */}
              <span className="text-white-100">Say Hello!</span>
            </motion.button>
          </motion.div>
      </motion.div>
    </>
  )
}

const ContactHOC = SectionWrapper(Contact, "contact")

export default ContactHOC
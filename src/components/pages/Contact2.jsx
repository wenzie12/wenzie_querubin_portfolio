// note: wala na to, di ko na to gagamitin, (baka ireuse ko lang ung form)
// remove lottie, di ko na sya sinama, nakakabagal ng site...

/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
// import Lottie, { LottieRefCurrentProps } from "lottie-react"
import Lottie, { useLottie, useLottieInteractivity } from "lottie-react"
import { SectionWrapper } from '../../hoc'
import { useInView } from 'react-intersection-observer';

import { textVariant, fadeIn, raiseUp } from '../../utils/motion'
import { styles } from '../../styles'
import animatedEmail from '../../assets/contact-assets/animated-email-svg_original.json'
import animatedCheck from '../../assets/contact-assets/animated-check-svg_original.json'
import AnimatedEmail from '../../utils/lottie/AnimatedEmail'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

const options = {
  animationData: animatedEmail,
};

const Contact = ({ opacity, scale }) => {
  const {
    cursorTextState: { cursorText, setCursorText },
    cursorVariantState : { setCursorVariant },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()
  const { activeState: { setActive }, } = useGlobalStateContext()

  const [isSubmitted, setSubmit] = useState(false)
  const emailIconRef = useRef(null)
  const lottieObj = useLottie(options, {}); // 2nd params = styles


  // intersection observer
  const { ref, inView } = useInView({
    // rootMargin: "-200px 0px",
    // threshold: [0, 1],
    threshold: 1,
  })

  const handleSubmit = e => {
    e.preventDefault()

    setSubmit(true)
  }

  useEffect(() => {
    if(inView) setActive("Contact")
    if(inView === false) setActive("")
  }, [inView])

  return (
    <motion.div inView={inView} ref={ref} className={`${styles.contentContainer}`} style={{ opacity, scale }}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-tertiary`} >SEND ME A MESSAGE</p>
        <h2 className={`${styles.sectionHeadText} text-secondary`}>Contact</h2>
      </motion.div>
    {/* left section */}
      <motion.div className="flex-col-reverse md:flex-row flex">
        <div  className="flex flex-col text-justify">
          <motion.p     
            variants={fadeIn("", "", 0.2, 1)}
            className={`${styles.sectionText} ${styles.contentSpacing} text-tertiary text-center px-0 md:px-10 lg:px-20`}
          >
            {`Although I’m not currently looking for any new 
            opportunities, my inbox is always open. Whether you have a 
            question or just want to say hi, I’ll try my best to get back to you!`}
          </motion.p>
        </div>
      </motion.div>

      {/* forms */}
      <div className="flex items-start relative pt-8">
        {/* maybe move Lottie to a single container */}
        <Lottie
          className="w-32 h-32 lg:hidden absolute -top-8 right-0"
          lottieRef={emailIconRef}
          animationData={animatedEmail}
          // loop={false}
          // // autoplay={...add condition here}
          // onComplete={() => {
          //   emailIconRef.current?.goToAndPlay(45, true)
          //   // emailIconRef.current?.autoplay()
          //   // emailIconRef.current?.onEnterFrame()
          // }}
        />

        {/* form section */}
        <form onSubmit={() => handleSubmit()} className="z-10 bg-blue-100 w-full p-4 my-8 rounded-md lg:w-1/2"> 
          <label className="block">
            <span className="block text-sm font-medium text-tertiary">Name:</span>
            <input type="text" value="" onChange={() => {}}  placeholder="Your Name" className={`${styles.formInput} my-4`}/>
          </label>

          <label className="block text-tertiary">
            <span className="block text-sm font-medium text-tertiary">E-mail Address:</span>
            <input type="text" value="" onChange={() => {}} placeholder="youremail@email.com" className={`${styles.formInput} my-4`}/>
          </label>

          <label className="block">
            <span className={`${styles.sectionText} block  text-tertiary`}>Your Message:</span>
            <textarea type="text" value="" onChange={() => {}} placeholder="hello Wenzie!" rows="10" cols="50" className={`${styles.formInput} my-4`}/>
          </label>

          {/* submit button */}
          <span className="font-semibold">{`<`}</span>
          <button className="btn px-2 text-secondary font-semibold" type="submit">Submit</button>
          <span className="font-semibold">{`/>`}</span>
        </form>
        {/* image icon */}
        <div className="justify-center items-center my-auto hidden lg:flex lg:w-1/2 ">
         <AnimatedEmail />
          {/* {AnimatedMail} */}

          {/* <Lottie
            className="md:w-96 md:h-96 lg:w-auto lg:h-auto "
            lottieRef={emailIconRef}
            animationData={animatedEmail}
            loop={false}
            // autoplay={...add condition here}
            onComplete={() => {
              emailIconRef.current?.goToAndPlay(45, true)
              // emailIconRef.current?.autoplay()
              // emailIconRef.current?.onEnterFrame()
            }}
          /> */}
        </div>
      </div>
    </motion.div>
  )
}

const ContactHOC = SectionWrapper(Contact, "contact")

export default ContactHOC
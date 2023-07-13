import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { useInView } from 'react-intersection-observer' 

import { textVariant, raiseUp, fadeIn, swivelVariants, staggerContainer } from '../../utils/motion'
import { styles } from '../../styles'
import { contacts } from '../../constants'

import SocialLinks from '../social-medias/SocialLinks.component'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'


// eslint-disable-next-line react/prop-types
const Contact = ({ opacity, scale }) => {

  const {
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()
  const { activeState: { active, setActive }, } = useGlobalStateContext()

  // intersection observer
  const { ref, inView } = useInView({
    rootMargin: "-200px 0px",
    threshold: [0, 1],
    // threshold: 1,
  })

  useEffect(() => {
    if(inView) setActive("Contact")
    if (!inView && active === "Contact") setActive("")
  }, [inView, active, setActive])

  const handleContact = e => { 
    const {email, subject, body} = contacts
    window.location.href = `mailto:${email || ""}?subject=${subject || ""}&body=${body}`;
    e.preventDefault();
  }

  return (
    <>
      <motion.div ref={ref} inView={inView} className={`${styles.contentContainer}`} style={{ opacity, scale }}>
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
              {`While I'm not actively seeking new opportunities at the moment, 
              I'm always available in my inbox. Whether you have any inquiries or simply want to greet, 
              I'll make an effort to respond as promptly as possible.`}
            </motion.p>
          </div>
        </motion.div>
        {/* <hr className="border-blue-200 mx-auto w-[30%] border-1 rounded my-1 animate-pulse" /> */}
        {/* links */}
        <motion.div
          variants={staggerContainer(.2)}
          initial="hidden"
          whileInView="show"
          className="w-full text-blue-100">
					<motion.div className="flex flex-row justify-center w-full gap-x-4 -mt-2">
						<SocialLinks resumeLinkOrientation="horizontal" isResumeIcon />
					</motion.div>
				</motion.div>
        <motion.div
        // todo mali animation neto, lagyan mo ng fadein on view
          variants={fadeIn("", "", 0.2, 1)}
          className="flex justify-center w-full p-4 text-secondary"
        >
          {/* TODO: 
            - make this custom-button later same with 'Projects -> "view more" button 
            - convert to forms modal instead (of ease of use)
          */}
          <motion.button
            variants={raiseUp}
            whileHover="animate"
            initial="initial"
            type="button"
            onClick={handleContact}
            onMouseEnter={() => enterHover("hideHover")}
            onMouseLeave={leaveHover} 
            className={`${styles.borderBox} flex items-center justify-center rounded-md border-secondary h-[40px] text-xs`}
          >
            <span className="text-white-100">Say Hello!</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  )
}

const ContactHOC = SectionWrapper(Contact, "contact")

export default ContactHOC
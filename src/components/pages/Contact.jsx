import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { SectionWrapper } from '../../hoc'
import { useInView } from 'react-intersection-observer' 

import { textVariant, fadeIn, swivelVariants, staggerContainer } from '../../utils/motion'
import { styles } from '../../styles'
import { contacts } from '../../constants'
import { ActionButton } from '../custom-buttons'

import SocialLinks from '../social-medias/SocialLinks.component'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

const Contact = () => {
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
      <motion.div ref={ref} inView={inView} className={twMerge(styles.contentContainer, "")}>
        <motion.div variants={textVariant()}>
          <p className={twMerge(styles.sectionSubText, "dark:text-tertiary text-tertiary-lt text-center")}>GET IN TOUCH</p>
          <h2 className={twMerge(styles.sectionHeadText, "dark:text-secondary text-secondary-lt text-center")}>Contact</h2>
        </motion.div>
        {/* left section */}
        <motion.div className="flex-col-reverse md:flex-row flex">
          <div  className="flex flex-col text-justify">
            <motion.p
              variants={swivelVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={twMerge(styles.sectionText, styles.contentSpacing, "dark:text-tertiary text-tertiary-lt text-center px-0 md:px-10 lg:px-20")}
            >
              {`While I'm not actively seeking new opportunities at the moment, 
              I'm always available in my inbox. Whether you have any inquiries or simply want to greet, 
              I'll make an effort to respond as promptly as possible.`}
            </motion.p>
          </div>
        </motion.div>
        {/* links */}
        <motion.div
          variants={staggerContainer(.2)}
          initial="hidden"
          whileInView="show"
          className="w-full dark:text-accent-1 text-accent-1-lt">
					<motion.div className="flex flex-row justify-center w-full gap-x-4 -mt-2">
						<SocialLinks resumeLinkOrientation="horizontal" isResumeIcon />
					</motion.div>
				</motion.div>
        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className="flex justify-center w-full p-4 dark:text-secondary text-secondary-lt"
        >
          {/* TODO: - convert to forms modal instead (of ease of use) */}
          <ActionButton
            label="Say Hello!"
            name="contact"
            type="button"
            onClick={handleContact}
            onMouseEnter={() => enterHover("hideHover")}
            onMouseLeave={leaveHover} 
          />
        </motion.div>
      </motion.div>
    </>
  )
}

const ContactHOC = SectionWrapper(Contact, "contact")

export default ContactHOC
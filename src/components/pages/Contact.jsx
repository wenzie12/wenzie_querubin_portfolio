/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { SectionWrapper } from '../../hoc'
import { useInView } from 'react-intersection-observer'

import NiceModal from '@ebay/nice-modal-react';
// TODO: fix issue on lazy load error on prod
// const Modal = lazy(() => import('../modal/modal-components/ModalContainer.container'))
import Modal from "../modal/modal-components/ModalContainer.container"
import { ContactFormModal } from '../modal'

import SectionHeader from '../section-headers/SectionHeader.component'

import { fadeIn, swivelVariants, staggerContainer } from '../../utils/motion'
import { styles } from '../../styles'
import { ActionButton } from '../custom-buttons'

import SocialLinks from '../social-medias/SocialLinks.component'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

const Contact = () => {
  // const [isPending, startTransition] = useTransition()
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

  const toggleContactFormModal = () => {
    // startTransition(() => {
    //   NiceModal.show(Modal, {
    //     children: <ContactFormModal />,
    //     modalSize: styles.modalSm,
    //   })
    //   document.body.classList.add('modal-open')
    // }) 

    NiceModal.show(Modal, {
      children: <ContactFormModal />,
      modalSize: styles.modalSm,
    })
    document.body.classList.add('modal-open')
  }

  return (
    <>
      <motion.div ref={ref} inView={inView} className={twMerge(styles.contentContainer, "")}>
        <SectionHeader
          header="Contact"
          sub="GET IN TOUCH"
          textJustify='text-center'
        />
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
              {`Feel free to drop me a message! Whether you have a question, a project idea, or just want to say hi, my inbox is always open. 
               I’ll do my best to get back to you as soon as I can.`}
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
          <ActionButton
            label="Say Hello!"
            name="contact"
            type="button"
            onMouseEnter={() => enterHover("hideHover")}
            onMouseLeave={leaveHover}     
            onClick={toggleContactFormModal}
          />
        </motion.div>
      </motion.div>
    </>
  )
}

const ContactHOC = SectionWrapper(Contact, "contact")

export default ContactHOC
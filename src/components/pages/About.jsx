/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge';
import { SectionWrapper } from '../../hoc'
import SectionHeader from '../section-headers/SectionHeader.component'

import { fadeIn, raiseUp, zoomIn, swivelVariants, chevronVariant } from '../../utils/motion'
import { styles } from '../../styles'
import { HighlightedText, HashtagText } from '../custom-text';
import { ImageContainer } from '../image-container'
import { useCustomMediaQuery } from '../../hooks'

import { ChevronDown } from 'lucide-react';

import { profile, profileMobile } from '../../assets'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

import { interests } from '../../constants'

const About = () => {
  const { isTabletOrMobile } = useCustomMediaQuery()
  const { activeState: { active, setActive } } = useGlobalStateContext()
  const {
    cursorTextState: { cursorText, setCursorText },
    cursorVariantState : { setCursorVariant },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()

  // intersection observer
  const { ref, inView } = useInView({
    // rootMargin: "-200px 0px",
    // threshold: 1,
  })

  useEffect(() => {
    if(inView) setActive("About")
    if (!inView && active === "About") setActive("")
  }, [inView, active, setActive])

  return (
    <motion.div
      inView={inView}
      className={twMerge(styles.contentContainer, "")}
    >
      <SectionHeader
        header="About Me"
        sub="Introduction"
      />
      <div ref={ref} className="flex-col-reverse md:flex-row flex gap-x-10">
        {/* left section */}
        <div className="flex flex-col md:w-1/2 text-justify">
          <motion.p
            variants={swivelVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={twMerge(styles.sectionText, styles.contentSpacing, "dark:text-tertiary text-tertiary-lt")}
          >
            <motion.span className="inline-block mb-3" variants={swivelVariants}>
              I&apos;m Wenzie, a Frontend Software Developer currently working at
              <i className='dark:text-secondary text-secondary-lt'> Multisys Technologies Corporation</i>.
            </motion.span>
            <motion.span className="inline-block mb-3" variants={swivelVariants}>
              As a frontend developer, I thrive on blending creativity and functionality 
              to craft seamless, visually appealing interfaces. With expertise in
              <HighlightedText className="text-accent-3 px-1" delay={0.6}>ReactJS</HighlightedText>,
              <HighlightedText className="text-accent-3 px-1" delay={0.8}>Javascript</HighlightedText> and&nbsp;
              <HighlightedText className="text-accent-3" delay={1}>TypeScript</HighlightedText>, 
              I bring innovative and intuitive designs to life.
            </motion.span>
            
            <motion.span className="inline-block mb-3" variants={swivelVariants}> 
              My goal is to create seamless and captivating experiences that leave a lasting impression on users.
            </motion.span>
            <motion.span className="inline-block" variants={swivelVariants}>
            Outside of work, I find joy in Woodworking as a creative outlet. Additionally, Aquascaping is another passion of mine.
            </motion.span>
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.2, 1)}
            className={twMerge(
              styles.sectionText,
              styles.contentSpacing,
              // "hidden lg:flex flex-row gap-2 text-normal dark:text-tertiary text-tertiary-lt"
              "flex flex-row gap-2 text-normal dark:text-tertiary text-tertiary-lt"
            )}
          >
            <motion.span
              variants={chevronVariant}
              initial="initial"
              whileInView="animate"
            >
              <ChevronDown className="w-6 h-6 dark:text-secondary text-secondary-lt" />
            </motion.span>
            HOBBIES & INTERESTS
          </motion.p>
          <InterestsGroup
            data={interests}
            cursorText={cursorText}
            setCursorText={setCursorText}
            setCursorVariant={setCursorVariant}
            enterHover={enterHover}
            leaveHover={leaveHover}
            className="hidden lg:flex flex-wrap gap-4"
          />
        </div>
        
        {/* right section */}
        <motion.div className="flex justify-center md:w-1/2 pt-8 pb-4 md:py-0">
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group"
          >
          <motion.div
            {...(!isTabletOrMobile && {
              variants: raiseUp,
              initial: "initial",
              whileHover: "animate",
            })}
            className={twMerge(
              styles.dropShadow2xl,
              "overflow-hidden flex justify-center mx-auto"
            )}
          >
            <ImageContainer
              onMouseEnter={() => enterHover("hideHover")}
              onMouseLeave={leaveHover}
              src={isTabletOrMobile ? profileMobile : profile}
              alt="profile"
              className={twMerge(
                isTabletOrMobile ? styles.profileImageMobile : styles.profileImage,
                isTabletOrMobile ? 'rounded-full' : 'rounded-sm',
                "aspect-auto dark:bg-accent-2 bg-accent-2-lt/80 grayscale-0 md:grayscale group-hover:grayscale-0"
              )}
            />
          </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <InterestsGroup
        data={interests}
        enterHover={enterHover}
        leaveHover={leaveHover}
        className="lg:hidden flex flex-wrap gap-4"
      />
    </motion.div>
  )
}

const InterestsGroup = ({ className,  enterHover, leaveHover, data }) => {
  return (
    <motion.div className={className}>
      {
        data?.map((item, i) => {
          return (
            <motion.div
              key={i}
              variants={zoomIn(0.1 * i,)}
              onMouseEnter={() => enterHover("hideHover")}
              onMouseLeave={leaveHover}
              className="inline-block"
            >
              <HashtagText label={item}/>
            </motion.div>
          )
        })
      }
    </motion.div>
  )
}

const AboutHOC = SectionWrapper(About, "about")
export default AboutHOC
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionWrapper } from '../../hoc'

import { textVariant, fadeIn, raiseUp, zoomIn, swivelVariants, scaleImageVariant, chevronVariant } from '../../utils/motion'
import { styles } from '../../styles'
import { HighlightedText, HashtagText } from '../custom-text';
import { ImageContainer } from '../image-container'

import { ChevronDown } from 'lucide-react';

import { profile } from '../../assets'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

import { interests } from '../../constants'

const About = () => {
  const {
    cursorTextState: { cursorText, setCursorText },
    cursorVariantState : { setCursorVariant },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()
  const { activeState: { active, setActive }, } = useGlobalStateContext()

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
      className={`${styles.contentContainer}`}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-tertiary`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-secondary`}>About Me</h2>
      </motion.div>
      
      <div ref={ref} className="flex-col-reverse md:flex-row flex gap-x-10">
        {/* left section */}
        <div className="flex flex-col md:w-1/2 text-justify">
          <motion.p
            variants={swivelVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`${styles.sectionText} ${styles.contentSpacing} text-tertiary`}
          >
            <motion.span className="inline-block mb-3" variants={swivelVariants}>
              I&apos;m Wenzie, a Frontend Software Developer currently working at
              <i className='text-secondary'> Multisys Technologies Corporation</i>.
            </motion.span>
            <motion.span className="inline-block mb-3" variants={swivelVariants}>
              {/* With a passion for crafting exceptional user experiences, 
              I thrive in the world of frontend web development. */}
              As a frontend developer, I find joy in blending creativity and functionality. 
              My expertise lies in creating seamless interactions and visually appealing interfaces 
              through UI/UX design. My expertise lies in 
              <HighlightedText className="text-white-100 px-1" delay={0.6}>ReactJS</HighlightedText>,
              <HighlightedText className="text-white-100 px-1" delay={0.8}>Javascript</HighlightedText> and&nbsp;
              <HighlightedText className="text-white-100" delay={1}>TypeScript</HighlightedText>, 
              enabling me to bring innovative and intuitive designs to life.
            </motion.span>
            <motion.span className="inline-block mb-3" variants={swivelVariants}>
            Outside of work, I enjoy Wood Working as a creative outlet where I craft tangible objects from scratch.
            Another passion of mine is Aquascaping, which brings serenity and inspiration through the creation of stunning underwater landscapes.
            </motion.span>
            <motion.span className="inline-block" variants={swivelVariants}>
              I am always eager to take on new challenges, collaborate with like-minded individuals,
              and push the boundaries of what is possible in frontend development. 
              {/* Let&apos;s connect and bring your ideas to life! */}
            </motion.span>
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.2, 1)}
            className={`${styles.sectionText} ${styles.contentSpacing} flex flex-row gap-2 text-normal text-tertiary`}
          >
            <motion.span
              variants={chevronVariant}
              initial="initial"
              whileInView="animate"
            >
              <ChevronDown className="w-6 h-6 text-secondary" />
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
        <motion.div className="flex justify-center md:w-1/2 py-8 md:py-0">
          <motion.div
            variants={fadeIn("up", "tween",0.2, .4)}
            initial="hidden"
            whileInView="show"
            className="group relative"
          >
          <motion.span
            variants={fadeIn("up", "spring",0.4, .8)}
            className="absolute top-3 -right-3 md:-top-6 md:-right-6 rounded-sm w-full h-full max-h-[24rem] lg:max-h-[28rem] bg-accent-1"
          />
          <motion.div
            variants={raiseUp}
            initial="initial"
            whileHover="animate"
            className={`${styles.profileImage} overflow-hidden flex justify-center`}
          >
            <ImageContainer
              isMotion
              variants={scaleImageVariant}
              onMouseEnter={() => enterHover("hideHover")}
              onMouseLeave={leaveHover}
              src={profile}
              alt="profile"
              className={`${styles.profileImage} bg-accent-2/80 aspect-auto rounded-sm grayscale-0 md:grayscale group-hover:grayscale-0`}
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
        // className="md:hidden flex flex-wrap gap-4"
      />
    </motion.div>
  )
}

// type InterestsGroup = {
//   className: string
//   enterHover: () => any
//   leaveHover: () => any
//   data: string[]
// }

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
/* eslint-disable */

import { motion } from 'framer-motion'

import { zoomIn, raiseUp, fadeIn } from '../../utils/motion'
import { styles } from '../../styles'
import { appStore, playStore, link, github } from '../../assets'

// context
import { useCursorContext } from '../../context/HOCContext'

const ProjectLinks = ({
  isOdd,
  website,
  playstore,
  appstore,
  source_code_link,
}) => {
  const {
    cursorTextState: { cursorText },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()

  return (
    <motion.div
      variants={fadeIn("", "", 0.2, 0.4)}
      className={`${styles.cardSpacing} ${!isOdd ? 'flex-row' : 'md:flex-row-reverse'} flex justify-start text-sm leading-[25px] py-3 gap-x-8`}
    >
      <motion.a
        initial="initial"
        whileHover="animate"
        onMouseEnter={() => enterHover("", {
          ...cursorText,
          offset: 75,
          text: "live server",
          // color: "#D4494C",
        })}
        onMouseLeave={() => { 
          leaveHover()
          enterHover("hideHover")
        }}
        href={website}
        target="_blank"
        rel="noreferrer"
        hrefLang="en-us"
        clasName="px-2"
      >
        <motion.img variants={raiseUp} src={link} alt="live-server" className=""/>
      </motion.a>
      {playstore && (
        <motion.a
          initial="initial"
          whileHover="animate"
          onMouseEnter={() => enterHover("", {
            ...cursorText,
            offset: 75,
            text: "playstore",
            // color: "#D4494C",
          })}
          onMouseLeave={() => { 
            leaveHover()
            enterHover("hideHover")
          }}
          href={playstore}
          target="_blank"
          rel="noreferrer"
          hrefLang="en-us"
          clasName="px-2"
        >
          <motion.img variants={raiseUp} initial="initial" whileHover="animate" src={playStore} alt="live-server" className="" />
        </motion.a>
      )}
      {appstore && (
        <motion.a
          initial="initial"
          whileHover="animate"
          onMouseEnter={() => enterHover("", {
            ...cursorText,
            offset: 75,
            text: "appstore",
            // color: "#D4494C",
          })}
          onMouseLeave={() => { 
            leaveHover()
            enterHover("hideHover")
          }}
          href={appstore}
          target="_blank"
          rel="noreferrer"
          clasName="px-2"
        >
          <motion.img variants={raiseUp} initial="initial" whileHover="animate" src={appStore} alt="live-server" className=""/>
        </motion.a>
      )}
      {source_code_link && (
        <motion.a
          initial="initial"
          whileHover="animate"
          onMouseEnter={() => enterHover("", {
            ...cursorText,
            offset: 75,
            text: "source code",
            // color: "#D4494C",
          })}
          onMouseLeave={() => { 
            leaveHover()
            enterHover("hideHover")
          }}
          href={source_code_link}
          target="_blank"
          rel="noreferrer"
          hrefLang="en-us"
          clasName="px-2"
        >
          <motion.img variants={raiseUp} initial="initial" whileHover="animate" src={github} alt="source-code" className=""/>
        </motion.a>
      )}
    </motion.div>
  )
}

export default ProjectLinks

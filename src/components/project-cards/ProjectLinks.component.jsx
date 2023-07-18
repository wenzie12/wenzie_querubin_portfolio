/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

import { raiseUp, fadeIn } from '../../utils/motion'
import { ExternalLink, Play, Apple, Code2 } from 'lucide-react'

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
      className={`${!isOdd ? 'flex-row' : 'md:flex-row-reverse'} flex justify-start items-center text-sm leading-[25px] gap-x-2`}
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
        aria-label="Live Server"
        href={website}
        target="_blank"
        rel="noreferrer"
        hrefLang="en-us"
        className="p-3"
      >
        <motion.span variants={raiseUp} className="inline-block">
          <ExternalLink className='text-secondary' />
        </motion.span>
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
          aria-label="Playstore"
          href={playstore}
          target="_blank"
          rel="noreferrer"
          hrefLang="en-us"
          className="p-3"
        >
          <motion.span variants={raiseUp} className="inline-block">
            <Play className='text-secondary' />
          </motion.span>
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
          aria-label="Appstore"
          href={appstore}
          target="_blank"
          rel="noreferrer"
          className="p-3"
        >
          <motion.span variants={raiseUp} className="inline-block">
            <Apple className='text-secondary' />
          </motion.span>
        </motion.a>
      )}
      {/* for github links */}
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
          aria-label="Source Code"
          href={source_code_link}
          target="_blank"
          rel="noreferrer"
          hrefLang="en-us"
          className="p-3"
        >
          <motion.span variants={raiseUp}>
            <Code2 className='text-secondary' />
          </motion.span>
        </motion.a>
      )}
    </motion.div>
  )
}

export default ProjectLinks

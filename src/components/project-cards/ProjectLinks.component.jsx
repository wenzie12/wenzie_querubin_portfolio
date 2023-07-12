/* eslint-disable */
import { motion } from 'framer-motion'

import { raiseUp, fadeIn } from '../../utils/motion'
import { appStore, playStore, link, www, github } from '../../assets'

import { WwwIcon, AppStoreIcon, PlayStoreIcon, SourceCodeLink } from '../icons/'

import { SECONDARY_COLOR } from '../../themes/constants'

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
        href={website}
        target="_blank"
        rel="noreferrer"
        hrefLang="en-us"
        className="p-3"
      >
        <WwwIcon
          variants={raiseUp}
          title="live-server"
          role="icon"
          classSVG=""
          classPath=""
          fill={SECONDARY_COLOR}
        />
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
          className="p-3"
        >
        <PlayStoreIcon
          variants={raiseUp}
          title="playstore"
          classSVG=""
          classPath=""
          fill={SECONDARY_COLOR}
          role="icon"
        />
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
          className="p-3"
        >
        <AppStoreIcon
          variants={raiseUp}
          title="appstore"
          classSVG=""
          classPath=""
          fill={SECONDARY_COLOR}
          role="icon"
        />
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
          href={source_code_link}
          target="_blank"
          rel="noreferrer"
          hrefLang="en-us"
          className="p-3"
        >
          <SourceCodeLink
            variants={raiseUp}
            title="source-code"
            classSVG=""
            classPath=""
            fill={SECONDARY_COLOR}
            role="icon"
          />
        </motion.a>
      )}
    </motion.div>
  )
}

export default ProjectLinks

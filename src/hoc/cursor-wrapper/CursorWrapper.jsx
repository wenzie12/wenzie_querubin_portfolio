import { useRef } from 'react'
import { motion } from 'framer-motion'
import { spring, useVariants } from "./cursorSettings";
import ReactCurvedText from 'react-curved-text'
import { useMediaQuery } from 'react-responsive'


// context
import { useCursorContext } from '../../context/HOCContext' 

const CursorWrapper = (Component) => 
function HOC() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const {
    cursorVariantState : { cursorVariant },
    cursorTextState : { cursorText }
  } = useCursorContext()  
  
  const ref = useRef(null);
  const variants = useVariants(ref);

  return (
    <div ref={ref} className="">
      {
        // isPortrait && (isBigScreen || isRetina) &&
        !isTabletOrMobile &&
        <motion.div
          variants={variants}
          initial="default"
          animate={cursorVariant}
          transition={spring}
          className="circle"
        >
          <div className="w-full h-full">
            {cursorText?.text ? (
              <ReactCurvedText
                startOffset={cursorText.offset}
                width={128} height={128} cx={64} cy={64} rx={34} ry={34}
                reversed
                text={cursorText.text}
                textProps={{"style": {
                  "fontSize": cursorText.fontSize,  
                  "fill": cursorText.color, 
                }}}
                textPathProps={null}
                tspanProps={{ "dy": -3 }}
                ellipseProps={null}
                svgProps={{ "className": "curved-text rotating-curved-text"}}
              />
            ) : ""}
          </div>
        </motion.div>
      }
      <Component />
    </div>
	)
}

export default CursorWrapper

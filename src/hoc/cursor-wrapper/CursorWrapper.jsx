/* eslint-disable */
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { spring, useVariants } from "./cursorSettings";
import ReactCurvedText from 'react-curved-text'

// context
import { useCursorContext } from '../../context/HOCContext' 

const CursorWrapper = (Component) => 
function HOC() {
  const {
    cursorVariantState : { cursorVariant },
    cursorTextState : { cursorText }
  } = useCursorContext()  
  
  const ref = useRef(null);
  const variants = useVariants(ref);

  return (
    <div ref={ref} className="">
      <motion.div
        variants={variants}
        initial="default"
        animate={cursorVariant}
        transition={spring}
        // className="circle shadow-2xl"
        className="circle" // removed shadow for optimization
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
      <Component />
    </div>
	)
}

export default CursorWrapper

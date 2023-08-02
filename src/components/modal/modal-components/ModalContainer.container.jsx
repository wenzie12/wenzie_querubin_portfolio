import { useEffect, Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NiceModal, { useModal } from "@ebay/nice-modal-react"
import { twMerge } from 'tailwind-merge'
import { X } from 'lucide-react'

import { fadeIn } from '../../../utils/motion'
import { styles } from '../../../styles'

const Modal = NiceModal.create(({
  children=<Fragment />,
  modalSize="w-10/12",
}) => {
  const modal = useModal()

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        modal.remove()
        document.body.classList.remove('modal-open')
      }
    }
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };

  },[modal])
  
  return (
    <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          className="fixed top-0 z-50 w-full h-full flex items-center justify-center dark:bg-primary/95 bg-primary-lt/75 overflow-y-auto scrollbar-hide m-auto"
        >
          {/* container */}
          <motion.div
            variants={fadeIn("up", "spring", 0, .4)}
            className={twMerge(
              styles.dropShadow2xl,
              modalSize,
              "dark:bg-accent-1 bg-accent-1-lt border-md relative rounded-md",
            )}
          >
            {/* toggle close */}
            <div className="absolute top-0 right-0 p-4 z-10 hover:animate-pulse">
              <button
                type="button"
                id="close"
                aria-label="close-modal"
                className="dark:border-secondary border-secondary-lt"
                onClick={() => {
                  // modal.remove()
                  modal.remove()
                  document.body.classList.remove('modal-open')
                }}
              >
                <X className="w-7 h-7 dark:text-accent-3 text-accent-3-lt" />
              </button>
            </div>
            { children }
          </motion.div>
        </motion.div>
    </AnimatePresence>
  )
})

// const LoadingModal = () => (
//   <div className="flex items-center justify-center w-full h-full">
//     <Loader2 className="w-10 h-10 dark:text-secondary text-secondary-lt "/>
//   </div>
// )

// eslint-disable-next-line react-refresh/only-export-components
export default Modal
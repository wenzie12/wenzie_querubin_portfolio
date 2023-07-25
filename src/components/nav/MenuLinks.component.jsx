// menu link component for mobile view
import { motion } from 'framer-motion'
import { fadeIn, tagVariants, } from '../../utils/motion'
import { navLinks } from '../../constants'

// context
import { useGlobalStateContext } from '../../context/GlobalStateContext'

import { colors } from '../../themes/constants'

const MenuLinks = () => {
  const { 
		activeState: { active, setActive },
		toggleState: { toggle, setToggle },
		toggleThemeState: { toggleDarkMode },
	} = useGlobalStateContext()

  return (
		<motion.ul
			className="flex flex-col gap-x-4 gap-y-6 list-none">
			{navLinks?.map((link, index) => {
				return (
					<motion.li
						variants={fadeIn("left", "spring", 0.1 * index, .50)}
						animate={toggle ? "show" : "hidden"}
						initial="hidden"
						key={link.id}
						onClick={() => {
							setToggle(!toggle)
							setActive(link.title)
						}}
						className="group dark:text-accent-3 text-accent-3-lt font-poppins text-end font-medium cursor-pointer text-[16px] sm:text-[24px]"
					>
						<motion.a
							href={`#${link.id}`}
							initial="initial"
							animate={active === link.title ? "selected": "initial"}
							className="relative text-xl"
						>
							{link.title}
							<motion.i
								variants={tagVariants("left", toggleDarkMode)}
								className="absolute top-1 -left-5 font-semibold">{`<`}
							</motion.i>
							<motion.i
								variants={tagVariants("right", toggleDarkMode)}
								className="absolute top-1 -right-6 font-semibold">{`/>`}
							</motion.i>
						</motion.a>
					</motion.li>
				)
			})}
	</motion.ul>
  )
}

export default MenuLinks
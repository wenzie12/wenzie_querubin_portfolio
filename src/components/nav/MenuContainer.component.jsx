/* eslint-disable react/prop-types */
// menu component for mobile view
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

import { styles } from '../../styles'
import { staggerContainer, menuContainerVariants, fadeIn } from '../../utils/motion'
import { useCustomMediaQuery } from '../../hooks'

import { MenuButton } from '../custom-buttons'
import MenuLinks from './MenuLinks.component'
import SocialLinks from '../social-medias/SocialLinks.component'
import { ThemesButton } from '../custom-buttons'
import { colors } from '../../themes/constants'

// context
import { useGlobalStateContext } from '../../context/GlobalStateContext'

const MenuContainer = ({ toggle, setToggle }) => {
	const { isTabletOrMobile } = useCustomMediaQuery()

	const { toggleThemeState: { toggleDarkMode } } = useGlobalStateContext()

	useEffect(() => {
		setToggle(false)
	}, [isTabletOrMobile, setToggle])

	return (
		<motion.div
			initial="hidden"
			animate={toggle ? "show" : "hidden"}
			className="md:hidden flex flex-1 justify-end items-center"
		>
			{isTabletOrMobile && (
				<>
					<motion.div
						variants={fadeIn("down", "spring", .1)}
						animate="show"
						initial="hidden"
						className="mr-4 mb-1 z-40"
					>
						<ThemesButton />
					</motion.div>
					<MenuButton
						isOpen={toggle}
						onClick={() => setToggle(!toggle)}
						color={colors[toggleDarkMode ? 'secondary' : 'secondary-lt']} // secondary
						transition={{ ease: "easeOut", duration: 0.2 }}
						className="z-40 cursor-pointer py-2"
					/>
				</>
			)}
			
			{/* menu */}
			<motion.div
				variants={menuContainerVariants}
				initial="hidden"
				animate={toggle ? "show" : "hidden"}
				className={twMerge(styles.padding, `
					bg-gradient-to-b dark:to-primary dark:from-accent-1/[.95] to-primary-lt from-accent-1-lt/[.95] 
					absolute top-0 right-0 bottom-0
					w-full h-screen
					z-10 
				`)}
			>
				<div className="mt-20 px-5">
					<MenuLinks />
				</div>
				<motion.div className="w-full py-6 dark:text-accent-1 text-accent-1-lt">
					<motion.div
						variants={staggerContainer(.2)}
						initial="hidden"
						whileInView="show"
						className="flex justify-end w-full gap-x-4 pr-2"
					>
						<SocialLinks resumeLinkOrientation="horizontal" isResumeIcon />
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>	
	)
}

export default MenuContainer

// menu component for mobile version
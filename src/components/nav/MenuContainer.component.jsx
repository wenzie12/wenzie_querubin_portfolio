/* eslint-disable react/prop-types */
// menu component for mobile view
import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../../styles'
import { staggerContainer, menuContainerVariants } from '../../utils/motion'
import { useMediaQuery } from 'react-responsive'

import { MenuButton } from '../custom-buttons'
import MenuLinks from './MenuLinks.component'
import SocialLinks from '../social-medias/SocialLinks.component'

import { SECONDARY_COLOR } from '../../themes/constants'

const MenuContainer = ({ toggle, setToggle }) => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

	useEffect(() => {
		setToggle(false)
	}, [isTabletOrMobile, setToggle])

	return (
		<motion.div
			initial={false}
			animate={toggle ? "show" : "hidden"}
			className="md:hidden flex flex-1 justify-end items-center"
		>
			{isTabletOrMobile && (
				<MenuButton
					isOpen={toggle}
					onClick={() => setToggle(!toggle)}
					color={SECONDARY_COLOR} // secondary
					transition={{ ease: "easeOut", duration: 0.2 }}
					className="z-40 cursor-pointer py-2"
				/>
			)}
			<motion.div
				variants={menuContainerVariants}
				initial="hidden"
				animate={toggle ? "show" : "hidden"}
				className={`${styles.padding} bg-gradient-to-b to-primary from-accent-1/[.95] absolute top-0 right-0 bottom-0 z-10 w-full h-screen`}
			>
				<div className="mt-20 px-5">
					<MenuLinks />
				</div>
				<motion.div className="w-full py-6 text-accent-1">
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
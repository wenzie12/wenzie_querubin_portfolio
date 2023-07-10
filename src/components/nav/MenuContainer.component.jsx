// menu component for mobile view

import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../../styles'
import { staggerContainer, menuContainerVariants } from '../../utils/motion'
import { useMediaQuery } from 'react-responsive'

import { MenuButton } from '../custom-buttons'
import MenuLinks from './MenuLinks.component'
import SocialLinks from '../social-medias/SocialLinks.component'

// eslint-disable-next-line react/prop-types
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
					color="#D4494C" // secondary
					transition={{ ease: "easeOut", duration: 0.2 }}
					className="z-40 cursor-pointer"
				/>
			)}
			<motion.div
				variants={menuContainerVariants}
				initial="hidden"
				animate={toggle ? "show" : "hidden"}
				// className="bg-gradient-to-b to-primary from-blue-100/[.7] absolute top-0 right-0 bottom-0 z-10  p-6 w-full h-screen" // apply gradient later
				className={`${styles.padding} bg-gradient-to-b to-primary from-blue-100/[.95] absolute top-0 right-0 bottom-0 z-10 w-full h-screen`}
			>
				<div className="mt-20 px-5">
					<MenuLinks />
				</div>
				{/* update social links component later */}
				<motion.div className="w-full py-6 text-blue-100">
					<motion.div
						variants={staggerContainer(.2)}
						initial="hidden"
						whileInView="show"
						className="flex justify-end w-full gap-x-4 pr-6"
					>
						<SocialLinks resumeLinkOrientation="horizontal" />
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>	
	)
}

export default MenuContainer

// menu component for mobile version
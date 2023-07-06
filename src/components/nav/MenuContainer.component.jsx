/* eslint-disable */
import { motion } from 'framer-motion'

import { styles } from '../../styles'
import { navLinks } from '../../constants'
import { fadeIn, staggerContainer } from '../../utils/motion'
import { useMediaQuery } from 'react-responsive'

import { MenuButton } from '../custom-buttons'
import SocialLinks from '../social-medias/SocialLinks.component'

const MenuContainer = ({
		toggle,
		setToggle,
		active,
		setActive,
		tagVariants,
	}) => {
		const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
	
	// menu (mobile) open/close animation
	const menuContainerVariants = {
		show: (height = 1000) => ({
			clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
			transition: {
				type: "spring",
				stiffness: 20,
				restDelta: 2,
			}
		}),
		hidden: {
			clipPath: "circle(0% at 95% 0)",
			transition: {
				delay: 0.3,
				type: "spring",
				stiffness: 400,
				damping: 40,
			}
		}
	};

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
					<ul className="list-none flex flex-col gap-x-4 gap-y-6">
						{navLinks?.map((link, index) => {
							return (
							<motion.li
								variants={fadeIn("left", "spring", 0.1 * index, .50)}
								animate={toggle ? "show" : "hidden"}
								initial="hidden"
								key={link.id}
								className={`${active === link.title ? "text-white-100" : "text-white"} font-poppins text-end font-medium cursor-pointer text-[16px] sm:text-[24px]`}
								onClick={() => {
									setToggle(!toggle)
									setActive(link.title)
								}}
							>
								<motion.a
									href={`#${link.id}`}
									initial="initial"
									animate={active === link.title ? "selected": "initial"}
									className="relative text-xl"
								>
									{link.title}
									<motion.i
										variants={tagVariants("left")}
										className="absolute top-1 -left-5 font-semibold">{`<`}
									</motion.i>
									<motion.i
										variants={tagVariants("right")}
										className="absolute top-1 -right-6 font-semibold">{`/>`}
									</motion.i>
								</motion.a>
							</motion.li>
							)}
						)}
					</ul>
				</div>
				{/* update social links component later */}
				<motion.div className="w-full py-2 text-blue-100">
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
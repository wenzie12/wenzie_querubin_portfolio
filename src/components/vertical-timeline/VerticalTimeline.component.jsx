/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { textVariant, raiseUp, fadeIn, zoomIn, scaleHeight, swivelVariants } from '../../utils/motion'
import { styles } from "../../styles"

import HighlightedText from '../custom-text/HighlightedText.component'
import { useCustomMediaQuery } from '../../hooks'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'
import { colors } from '../../themes/constants'

const VerticalTimeline = ({ data }) => {
	const { isTabletOrMobile } = useCustomMediaQuery()
	const { toggleThemeState: { toggleDarkMode } } = useGlobalStateContext()
	const {
		cursorTextState: { cursorText },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()

	return (
		<>
			{
				data?.map((item, i, row) => {
					const { date,  title, company_name, link, points, } = item || []
					const lastItem = i + 1 === row.length

					return (
						<div
							key={`${title}-${i}`}
							className={twMerge(styles.sectionText, "flex flex-row dark:text-tertiary text-tertiary-lt")}
						>
							{/* left */}
							<motion.div
								initial="hidden"
								whileInView="show"
								viewport={{ once: false }}
								className="hidden sm:flex flex-row justify-start"
							>
								<motion.div
									variants={fadeIn("right", "tween", .2, .3)}	
									className="hidden lg:block px-6 mb-10 w-[180px] lg:w-[240px] text-end"
								>
									{date}
								</motion.div>
								{/* lines */}
								<motion.div
									variants={scaleHeight("", .2, .2)}
									className="hidden md:block relative w-1 h-full dark:bg-accent-1 bg-accent-1-lt"
								>
									{/* circle */}
									<motion.div
										variants={zoomIn(.2, .4)}
										className="absolute mb-10 top-1 -right-2 h-5 w-5 dark:bg-accent-1 bg-accent-1-lt rounded-full"
									/>
									{lastItem && <div className="absolute bottom-0 -right-2 h-5 w-5 dark:bg-accent-1 bg-accent-1-lt rounded-full" />} 
								</motion.div>
							</motion.div>

							{/* right */}
							<motion.div
								initial="hidden"
								whileInView="show"
								viewport={{ once: false }}
								className="flex justify-start flex-col md:px-10 w-full"
							>
								<motion.div
									{...(!isTabletOrMobile && {
										variants: raiseUp,
										whileHover: "animate",
										initial: "initial",
									})}
									onMouseEnter={() => enterHover("hideHover")}
									onMouseLeave={leaveHover}
									className={twMerge(styles.dropShadowMd, "relative p-4 md:p-8 mb-10 dark:bg-accent-1/50 bg-accent-1-lt/80 rounded-md")}
								>
									{/* pointer */}
									<span
										className="hidden md:block absolute -left-5 top-2 dark:bg-accent-1/50 bg-accent-1-lt/80 w-10 h-4"
										style={{ clipPath: 'polygon(50% 0%, 50% 99%, 30% 50%)' }}
									/>

									{/* content-container card */}
									<motion.div
										initial="hidden"
										whileInView="show"
										className={twMerge(styles.sectionText, "p-2 overflow-hidden")}
									>
										<motion.h3
											variants={textVariant()}
											className="text-[1.25rem] lg:text-[1.5rem] dark:text-accent-3 text-accent-3-lt font-semibold uppercase pb-2 md:pb-0"
										>
											{title}
										</motion.h3>
										<motion.a
											variants={textVariant(.2)}
											onMouseEnter={() => enterHover("", {
												...cursorText,
												offset: 75,
												text: "Go to link!",
												// color: "#D4494C",
											})}
											onMouseLeave={() => { 
												leaveHover()
												enterHover("hideHover")
											}}
											href={link}
											target="_blank"
											rel="noreferrer"
											hrefLang="en-us"
											// className="text-[16px] dark:text-secondary text-secondary-lt italic font-normal m-0"
											className="text-[16px] dark:text-secondary text-secondary-lt italic font-normal m-0"
										>
											<i className="dark:text-accent-2 text-accent-2-lt">@</i>{company_name}
										</motion.a>
										<motion.p
											variants={swivelVariants}
											initial="hidden"
											whileInView="show"
											viewport={{ once: true }}
											className="lg:hidden font-normal"
										>
											<HighlightedText className="px-1 text-accent-3" color={colors[toggleDarkMode ? 'tertiary' : 'tertiary-lt']} delay={0.8} duration={0.4}>
												{date}
											</HighlightedText>
										</motion.p>
									
										<div className="ml-4 mt-4 space-y-3">
											{points?.map((point, i) => (
												<motion.div
													key={i}
													variants={swivelVariants}
													initial="hidden"
													whileInView="show"
													viewport={{ once: true }}
													className="relative dark:text-tertiary text-tertiary-lt pl-1 leading-[25px]"
												>
													<motion.span
														variants={scaleHeight("spring", i * 0.3, 0.5)}
														className="absolute top-0 -left-3 rounded-tl-sm rounded-bl-sm w-1 h-full dark:bg-secondary/80 bg-secondary-lt/80"
													/>
													{point}
												</motion.div>
											))}
										</div>
									</motion.div>
								</motion.div>
							</motion.div>
						</div>
					)
				})
			}
		</>
	)
}


export default VerticalTimeline
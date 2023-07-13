
/* eslint-disable */
import { motion } from 'framer-motion'
import { textVariant, raiseUp, fadeIn, zoomIn, scaleHeight, swivelVariants } from '../../utils/motion'
import { styles } from "../../styles"

import HighlightedText from '../custom-text/HighlightedText.component'

// context
import { useCursorContext } from '../../context/HOCContext'

const VerticalTimeline = ({ data }) => {
	const {
		cursorTextState: { cursorText },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()


	return (
		<>
			{
				data?.map((item, i, row) => {
					const { date,  title, company_name, img_bg="", link, points, } = item || []
					const lastItem = i + 1 === row.length

					return (
						<div
							key={`${title}-${i}`}
							className={`${styles.sectionText} flex flex-row text-tertiary`}
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
									className="hidden md:block relative w-1 h-full bg-blue-100"
								>
									{/* circle */}
									<motion.div
										variants={zoomIn(.2, .4)}
										// className={`absolute mb-10 top-1 -right-2 h-5 w-5 bg-blue-200 border-4 border-blue-200 rounded-full`}
										className={`absolute mb-10 top-1 -right-2 h-5 w-5 bg-blue-100 rounded-full`}
									/>
									{lastItem && <div className={`absolute bottom-0 -right-2 h-5 w-5 bg-blue-100 rounded-full`}/>} 
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
									variants={raiseUp}
									whileHover="animate"
									initial="initial"
									onMouseEnter={() => enterHover("hideHover")}
									onMouseLeave={leaveHover}
									className="relative p-4 md:p-8 mb-10 bg-blue-100/40 rounded-md"	
								>
									{/* pointer */}
									<span
										className="hidden md:block absolute -left-5 top-2 bg-blue-100/40 w-10 h-4"
										style={{
											clipPath: 'polygon(50% 0%, 50% 99%, 30% 50%)',
										}}
									/>

									{/* content-container */}
									<motion.div
										initial="hidden"
										whileInView="show"
										className={`${styles.sectionText} p-2 overflow-hidden`}
									>
										<motion.h3
											variants={textVariant()}
											className="text-[1.25rem] lg:text-[1.5rem] text-white-100 font-normal uppercase pb-2 md:pb-0"
										>
											{title}
										</motion.h3>
										<motion.a
											variants={textVariant(.2)}
											onMouseEnter={() => enterHover("", {
												...cursorText,
												offset: 75,
												text: "go to link!",
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
											className="text-[16px] text-secondary italic font-normal m-0"
										>
											<i className="text-blue-200">@</i>{company_name}
										</motion.a>
										<motion.p variants={swivelVariants} className="lg:hidden font-normal">
											<HighlightedText className="px-1" color="#7B8CA6" delay={.8} duration={0.4}>
												{date}
											</HighlightedText>
										</motion.p>
									
										<div className="ml-4 mt-4 space-y-3">
											{points?.map((point, i) => (
												<motion.div key={i} variants={swivelVariants} className="relative text-tertiary pl-1 leading-[25px]">
													<motion.span variants={scaleHeight("spring", .4 * i, .5)} className="absolute top-0 -left-3 rounded-tl-sm rounded-bl-sm w-1 h-full bg-secondary/40" />
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
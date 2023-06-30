/* eslint-disable */
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { logo } from '../../assets' 
import { fadeIn, zoomIn } from '../../utils/motion'

// context
import { useCursorContext } from '../../context/HOCContext'

const ProfileLogo = ({ classSVG, classPath, fill="#D4494C", ...props}) => (
	<motion.svg width="32" height="21" className={classSVG} viewBox="0 0 32 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			className={classPath}
			d="M4.37609 0.151057C4.39299 0.184845 6.16708 3.26807 8.32978 7.00173C10.4925 10.7354 12.7059 14.5535 13.2466 15.4827L14.2181 17.1722L13.8633 17.8479C12.9847 19.4867 12.1314 20.9312 12.03 20.9312C11.9709 20.9312 11.5063 20.1963 10.9994 19.3008C10.1715 17.8564 8.81132 15.4996 6.96965 12.315C2.33166 4.29863 0 0.218633 0 0.134161C0 -0.00944158 4.31696 0.00745434 4.37609 0.151057ZM31.1142 0.0412408C31.1818 0.108818 30.658 1.08869 29.6104 2.85416C29.1796 3.57217 28.5206 4.71254 28.132 5.38832C28.0923 5.45743 28.0477 5.53503 27.9989 5.61986C27.5708 6.36457 26.8219 7.66743 26.2228 8.69117C25.5554 9.83999 24.9725 10.8705 24.9302 10.9888C24.8542 11.1831 24.9894 11.4619 26.1214 13.43C26.8226 14.6549 27.5238 15.8459 27.6758 16.0909C27.8279 16.3274 28.0307 16.6738 28.1236 16.8596L28.2925 17.189L27.2196 19.0643C26.6367 20.0949 26.1129 20.9227 26.0623 20.9058C26.02 20.8889 25.5807 20.1709 25.0907 19.3093C23.3082 16.1585 22.683 15.1026 22.5986 15.1026C22.5479 15.1026 22.2944 15.4743 22.0325 15.922C20.4527 18.6673 20.0134 19.4444 19.6586 20.0949C19.2193 20.9143 19.0757 21.0748 18.9405 20.9143C18.8983 20.8551 18.4506 20.0611 17.9521 19.1572C17.8741 19.0181 17.7907 18.8692 17.7039 18.7142C17.2268 17.8625 16.6478 16.829 16.3047 16.243C16.207 16.0739 16.0561 15.8129 15.8665 15.4849C15.2699 14.453 14.29 12.7579 13.3733 11.1746C12.9312 10.4081 12.3931 9.47648 11.8324 8.50593C10.8608 6.82398 9.82174 5.0252 9.09856 3.76646C7.94962 1.78137 7.01189 0.13416 7.01189 0.108819C7.01189 0.0834772 7.99186 0.0665847 9.19149 0.0665847H11.3711L11.8864 0.970434C12.1305 1.41423 12.5431 2.13004 12.8574 2.67553C12.9021 2.75301 12.9447 2.82705 12.9847 2.89639C13.3141 3.45391 14.0238 4.6872 14.5729 5.64173C15.122 6.59627 15.8317 7.81266 16.1442 8.34484C16.3301 8.67013 16.6802 9.27314 17.0593 9.92626C17.3004 10.3416 17.5533 10.7773 17.7832 11.1746C18.9152 13.1259 18.9912 13.2442 19.0926 13.2442C19.194 13.2442 20.2753 11.3267 20.2753 11.1493C20.2753 11.0648 19.7009 9.99204 18.9997 8.77564C18.3069 7.5508 17.7578 6.52869 17.7832 6.4949C17.817 6.46956 18.7885 6.43577 19.9459 6.41887L22.0494 6.39353L22.2015 6.6554C22.3658 6.95899 22.4531 7.13875 22.554 7.14678C22.6918 7.15773 22.8551 6.8487 23.2744 6.09788C23.6461 5.45589 24.0685 4.72944 24.2206 4.48447C24.3726 4.2395 24.4994 4.00298 24.4994 3.95229C24.4994 3.89316 23.1815 3.86782 20.3345 3.86782H16.1696L15.0967 2.01789C14.5053 0.995775 14.0238 0.142608 14.0238 0.117267C14.0238 0.0919252 14.3532 0.0581352 14.7672 0.0412408C16.2118 -0.00944236 31.0635 -0.0178896 31.1142 0.0412408Z"
			fill={fill}
		/>
	</motion.svg>
)

const LandingPageLoader = ({ loading }) => {
	const {
		cursorTextState: { cursorText, setCursorText },
		hoverEvents: { enterHover, leaveHover },
	  } = useCursorContext()

	const logoData = [
		{
			fill: [
				"#3F4F69",
				"#D4494C",
				"#7B8CA6",
				"#7B8CA6",
				"#3F4F69",
			],
			class: [
				"w-6 h-6",
				"w-8 h-8",
				"w-12 h-12",
				"w-8 h-8",
				"w-6 h-6",
			],
		}
	]

	const loaderVariants = {
		hidden: {
			background: "radial-gradient(#3F4F69, #101B29)",
		},
		show: {
			background: "radial-gradient(#101B29, #101B29)",
			transition: {
				duration: 2,
				type: "tween",
				ease: "easeOut"
			},
		},
	}

  return (
		<AnimatePresence>
			{loading && (
				<motion.div
					variants={loaderVariants}
					initial="hidden"
					animate="show"
					exit="hidden"
					onMouseEnter={() => enterHover("anchor", {
						...cursorText,
						offset: 85,
						text: `Loading`,
					})}
					onMouseLeave={leaveHover}
					className="grid place-items-center w-full h-screen scrollbar-hide"
				>
					<motion.div
						variants={zoomIn(0, 1)}
						exit="hidden"
						className="flex gap-2 items-center"
					>
						<ProfileLogo
							variants={zoomIn(1.2, .3)}
							initial="hidden"
							animate="show"
							classSVG="w-6 h-6 inline-block"
							classPath="opacity-60"
							fill="#3F4F69"
						/>
						<ProfileLogo
							variants={zoomIn(1, .3)}
							initial="hidden"
							animate="show"
							classSVG="w-8 h-8 inline-block"
							classPath="opacity-75"
							fill="#7B8CA6"
						/>
						<ProfileLogo
							variants={zoomIn(.5, .3)}
							initial="hidden"
							animate="show"
							classSVG="w-12 h-12 inline-block"
							classPath="opacity-100"
							fill="#D4494C"
						/>
						<ProfileLogo
							variants={zoomIn(.8, .3)}
							initial="hidden"
							animate="show"
							classSVG="w-8 h-8 inline-block"
							classPath="opacity-75"
							fill="#7B8CA6"
						/>
						<ProfileLogo
							variants={zoomIn(1.2, .3)}
							initial="hidden"
							animate="show"
							classSVG="w-6 h-6 inline-block"
							classPath="opacity-60"
							fill="#3F4F69"
						/>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
  )
}



export default LandingPageLoader

/* eslint-disable */
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion"

const MenuButton = ({
	isOpen = false,
	width = 32,
	height = 21,
	strokeWidth = 3.1,
	color = "#000",
	transition = null,
	lineProps = null,
	className = "",
	...props
}) => {
		const variant = isOpen ? "opened" : "closed";
		const top = {
			closed: { rotate: 0, translateY: 0, transformorigin: "0px 0px"},
			opened: { rotate: 45, translateY: 2, transformorigin: "3.80952px 0px"}
		};
		const center = {
			closed: { opacity: 1 },
			opened: { opacity: 0 }
		};
		const bottom = {
			closed: { rotate: 0, translateY: 0,  transformorigin: "0px 0px"},
			opened: { rotate: -45, translateY: -2, transformorigin: "3.80952px 4px" }
		};

		lineProps = {
			stroke: color,
			strokeWidth: strokeWidth,
			vectorEffect: "non-scaling-stroke",
			initial: "closed",
			animate: variant,
			transition,
			...lineProps
		};
		const unitHeight = 5;
		const unitWidth = (unitHeight * (width)) / (height);

	return (
		<button
			type="button"
			id="menu"
			{...props}
			className={className}
		>
			<motion.svg
				variants={fadeIn("down", "spring", .1)}
				animate="show"
				initial="hidden"
				viewBox={`0 0 ${unitWidth} ${unitHeight}`}
				// viewBox="0 0 7.619047619047619 5"
				overflow="visible"
				preserveAspectRatio="none"
				width={width}
				height={height}
			>
				{/* <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} /> */}
				<motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
				<motion.line x1="2" x2={unitWidth} y1="2" y2="2" variants={center} {...lineProps} />
				<motion.line x1="0" x2={unitWidth} y1="4" y2="4" variants={bottom} {...lineProps} />
			</motion.svg>
		</button>
	)
}

export default MenuButton;



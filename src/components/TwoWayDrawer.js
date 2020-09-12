import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Drawer = ({ children }) => {
	const [isActive, setIsActive] = useState(false)

	return (
		<>
			<motion.div
				style={{ pointerEvents: isActive ? 'all' : 'none' }}
				drag="y"
				dragConstraints={{ top: 0, bottom: 0 }}
				onDragEnd={(_, info) => {
					if (info.offset.y > 100) setIsActive(false)
					if (info.offset.y < -100) setIsActive(true)
				}}
				className="drawer-wrapper"
			>
				<motion.div
					style={{ pointerEvents: 'all' }}
					animate={{ opacity: 1, y: isActive ? 0 : '80vh' }}
					transition={{ damping: 25, duration: 0.5 }}
				>
					<div className="drawer">
						<h2> Swipe
							{!isActive ? <span role="img" aria-label="swipe up">👆</span> : <span role="img" aria-label="swipe down">👇</span>}

						</h2>
						{children}
					</div>
				</motion.div>
			</motion.div>
			<motion.div
				style={{ pointerEvents: isActive ? 'all' : 'none' }}
				className="drawer--background"
				onClick={() => setIsActive(false)}
				animate={{ opacity: isActive ? 1 : 0 }}
			/>
		</>
	)
}

export default Drawer

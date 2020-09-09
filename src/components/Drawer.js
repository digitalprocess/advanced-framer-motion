import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Drawer = ({ isActive, setIsActive, children }) => {

	return (
		<AnimatePresence>
			{isActive &&
				<>
					<motion.div
						drag="y"
						dragConstraints={{ top: 0, bottom: 0 }}
						onDragEnd={(_, info) => {
							if (info.offset.y > 100) setIsActive(false)
						}}
						className="drawer-wrapper"
					>
						<motion.div
							exit={{ opacity: 0.5, y: '110%' }}
							initial={{ opacity: 0.5, y: '110%' }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ damping: 25, duration: 0.7 }}
						>
							<div className="drawer">
								<button
									className="drawer--close"
									onClick={() => setIsActive(!isActive)}
								>x</button>
								{children}
							</div>
						</motion.div>
					</motion.div>
					<motion.div
						className="drawer--background"
						exit={{ opacity: 0 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.7 }}
					/>
				</>
			}
		</AnimatePresence>
	)
}

export default Drawer

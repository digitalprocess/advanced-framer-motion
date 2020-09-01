import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Fade = ({ children, isActive }) => {
	return (
		<AnimatePresence>
			{isActive &&
				<motion.div
					initial={{opacity: 0}}
					exit={{opacity: 0}}
					animate={{opacity: 1}}
				>
					{children}
				</motion.div>
			}
		</AnimatePresence>
	)
}

export default Fade

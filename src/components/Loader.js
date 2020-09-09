import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const Loader = () => {
	const [isLoading, setIsLoading] = useState(false)

	return (
		<AnimatePresence>
			{isLoading &&
				<motion.div
					layoutId="header"
					className="loading"
					onClick={() => setIsLoading(!isLoading)}
				>
					<motion.h3 layoutId="logo">Title</motion.h3>
					<motion.div exit={{ opacity: 0 }}>
						<p>Is loading...</p>
						<motion.div
							initial={{ x: -100 }}
							animate={{ x: 100 }}
							transition={{
								flip: Infinity,
								duration: 1
							}}
							style={{
								background: 'var(--primary)',
								height: 6,
								width: 100,
							}}
						/>
						<motion.div
							initial={{ x: -180, y: -5 }}
							animate={{ x: 180, y: -5 }}
							transition={{
								flip: Infinity,
								duration: 1.2
							}}
							style={{
								background: 'var(--danger)',
								height: 8,
								width: 20,
							}}
						/>
						<motion.div
							initial={{ x: -100, y: -5 }}
							animate={{ x: 100, y: -5 }}
							transition={{
								flip: Infinity,
								duration: 1.5
							}}
							style={{
								background: 'var(--yellow)',
								height: 4,
								width: 200,
							}}
						/>
					</motion.div>
				</motion.div>
			}
		</AnimatePresence>
	)
}

export default Loader

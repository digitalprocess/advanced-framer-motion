import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
// import { useWindowScrollPosition } from './hooks/useWindowScrollPosition'

import './App.css'

import Fade from './Fade'
import Slide from './Slide'
import Gallery from './Gallery'

function App() {
	const [isToggled, setIsToggled] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	return (
		<div className="App">
			<AnimateSharedLayout>
				<main className="layout">
					<button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
					<motion.header layoutId="header" onClick={() => setIsLoading(true)}>
						<motion.h1 layoutId="logo" className="fake-logo">Logo</motion.h1>
					</motion.header>
					<AnimatePresence>
						{isLoading &&
							<motion.div
								layoutId="header"
								className="loading"
								onClick={() => setIsLoading(false)}
							>
								<motion.h3 layoutId="logo">Title</motion.h3>
								<motion.div exit={{opacity: 0}}>
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

					{/* {Fade Animation} */}
					<Fade isActive={isToggled}>
						<div className="card">
							<h4>Post Number one</h4>
							<p>this is inside the card</p>
						</div>
					</Fade>

					{/* {Simple Slide} */}
					<Slide isActive={isToggled}>
						<div className="card">
							<h4>Post Number one</h4>
							<p>this is inside the card</p>
						</div>
					</Slide>

					{/* {Complex Slide} */}
					<Slide direction={-1} distance={600} isActive={isToggled}>
						<div className="card">
							<h4>Post Number one</h4>
							<p>this is inside the card</p>
						</div>
					</Slide>
					<Gallery />
				</main>
			</AnimateSharedLayout>
		</div>
	)
}

export default App

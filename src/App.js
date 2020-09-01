import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useWindowScrollPosition } from './hooks/useWindowScrollPosition'

import './App.css'

import Fade from './Fade'
import Slide from './Slide'
import Gallery from './Gallery'

function App() {
	const [isToggled, setIsToggled] = useState(false)
	const { y } = useWindowScrollPosition({
		throttle: 500
	})
	return (
		<div className="App">
			<motion.header
				style={{
					justifyContent: y > 20 ? 'center' : 'flex-start'
				}}
				animate={{
					background: y > 20 ? 'var(--background)' : 'var(--headerBackground)',
					color: y > 20 ? '#00214d' : 'white',
					boxShadow: y > 20 ? 'var(--level-2)' : 'none'
				}}
			>
				<motion.h1 layout className="fake-logo">Level Up</motion.h1>
			</motion.header>
			<main className="layout">
				<button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
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
		</div>
	);
}

export default App;

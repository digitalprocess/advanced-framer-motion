import React, {useState} from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'

import './App.css'

import Blog from './components/Blog'
import Loader from './components/Loader'
import Gallery from './components/Gallery'
import Toggles from './components/Toggles'
import Drawer from './components/Drawer'

function App() {
	const [isDrawerActive, setIsDrawerActive] = useState(false)
	return (
		<div className="App">
			<AnimateSharedLayout>
				<main className="layout">
					<motion.header layoutId="header">
						<motion.h1 layoutId="logo" className="fake-logo">Logo</motion.h1>
					</motion.header>
					<Loader/>
					<button onClick={() => setIsDrawerActive(!isDrawerActive)}>Open Drawer</button>
					<Drawer isActive={isDrawerActive} setIsActive={setIsDrawerActive} >
						<h2>Hi, I'm in a drawer</h2>
						<p>Hello, what's up?!</p>
					</Drawer>
					<Blog />
					<Toggles />
					<Gallery />
				</main>
			</AnimateSharedLayout>
		</div>
	)
}

export default App

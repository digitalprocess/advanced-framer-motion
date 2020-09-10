import React, {useState} from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { usePositionReorder } from './hooks/usePositionReorder'

import './App.css'

import Blog from './components/Blog'
import Drawer from './components/Drawer'
import Loader from './components/Loader'
import Gallery from './components/Gallery'
import Toggles from './components/Toggles'
import DragItem from './components/DragItem'

function App() {
	const [isDrawerActive, setIsDrawerActive] = useState(false)
	const [loggedIn, setIsLoggedIn] = useState('')
	const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8]
	const [order, updatePosition, updateOrder] = usePositionReorder(posts)

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
					<button onClick={() => setIsLoggedIn("signin")}>Sign In</button>
					<AnimateSharedLayout>
						<AnimatePresence>
							{loggedIn && (
								<>
									<motion.div
										initial={{ opacity: 0, y: 100 }}
										exit={{ opacity: 0, y: 100 }}
										animate={{ opacity: 1, y: 0 }}
										className="modal">

										<motion.div layout className="card">
											<AnimatePresence exitBeforeEnter>
												{loggedIn === "signin" && (
													<SignIn key="signin" setIsLoggedIn={setIsLoggedIn} />
												)}
												{loggedIn === "signup" && (
													<SignUp key="signup" setIsLoggedIn={setIsLoggedIn} />
												)}
											</AnimatePresence>
										</motion.div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0 }}
										exit={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										onClick={() => setIsLoggedIn("")}
										className="overlay"
									/>
								</>
							)}
						</AnimatePresence>
					</AnimateSharedLayout>


					<h3>List of stuff</h3>
					{order.map((post, i) => (
						<DragItem
							i={i}
							post={post}
							key={post}
							updateOrder={updateOrder}
							updatePosition={updatePosition}
						/>
					))}
					<Blog />
					<Toggles />
					<Gallery />
				</main>
			</AnimateSharedLayout>
		</div>
	)
}

function SignUp({ setIsLoggedIn }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 0.3 } }}
		>
			<h3>Sign Up</h3>
			<label htmlFor="email">Email</label>
			<input id="email" type="text" />
			<label htmlFor="password">Password</label>
			<input id="password" type="text" />
			<br />
			<button>Sign Up</button>
			<p>
				Already have an account?{" "}
				<button onClick={() => setIsLoggedIn("signin")}>Sign In</button>
			</p>
		</motion.div>
	)
}

function SignIn({ setIsLoggedIn }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 0.3 } }}
		>
			<h3>Sign In</h3>
			<label htmlFor="email">Email</label>
			<input id="email" type="text" />
			<label htmlFor="password-new">Password</label>
			<input id="password-new" type="text" />
			<label htmlFor="password-confirm">Password Confirm</label>
			<input id="password-confirm" type="text" />
			<br />
			<button>Sign In</button>
			<p>
				Need an account? <button onClick={() => setIsLoggedIn("signup")}>Sign Up</button>
			</p>
		</motion.div>
	)
}

export default App

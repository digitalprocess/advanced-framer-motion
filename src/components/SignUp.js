import React from 'react'
import { motion } from 'framer-motion'

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

export default SignUp

import React from 'react'
import { motion } from 'framer-motion'

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

export default SignIn

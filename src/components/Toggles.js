import React, { useState } from 'react'

import Fade from './Fade'
import Slide from './Slide'

const Toggles = () => {
	const [isToggled, setIsToggled] = useState(false)
	return (
		<>
			<button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
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
		</>
	)
}

export default Toggles

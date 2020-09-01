import { useState, useEffect } from 'react'
import throttle from 'lodash/throttle'

let supportsPassive = false
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: () => supportsPassive = true
  })
  window.addEventListener('testPassive', null, opts)
  window.removeEventListener('testPassive', null, opts)
} catch (e) {}

let getPosition = () => ({
	x: window.pageXOffset,
	y: window.pageYOffset,
})

let defaultOptions = {
	throttle: 100,
}

export const useWindowScrollPosition = options => {
	let opts = Object.assign({}, defaultOptions, options)
	let [position, setPosition] = useState(getPosition())

	useEffect(() => {
		let handleScroll = throttle(() => {
			setPosition(getPosition())
		}, opts.throttle)

		window.addEventListener(
			'scroll',
			handleScroll,
			supportsPassive ? { passive: true } : false
		)

		return () => {
			handleScroll.cancel()
			window.removeEventListener('scroll', handleScroll)
		}
	}, [opts.throttle])

	return position
}

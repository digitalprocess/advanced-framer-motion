import React from 'react'

const images = ["1000", "1001", "1002", "1003", "1004", "1005", "1006", "1008"]

const Gallery = () => {
	return (
		<div>
			<h3>Grid Gallery</h3>
			<div className="grid gallery">
				{images.map((image, index) => (
					<img
						key={index}
						style={{
							cursor: "pointer"
						}}
						src={`https://picsum.photos/seed/${image}/500/300`}
						alt="placeholder"
					/>
				))}
			</div>
		</div>
	)
}

export default Gallery

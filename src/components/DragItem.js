import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useMeasurePosition } from '../hooks/useMeasurePosition'

function DragItem({ post, updateOrder, updatePosition, i }) {
	const [isDragging, setIsDragging] = useState(false);
	const ref = useMeasurePosition((pos) => updatePosition(i, pos))

	return (
		<motion.div
			layout
			ref={ref}
			key={post}
			drag="y"
			className="card"
			dragElastic={1}
			dragConstraints={{ top: 0, bottom: 0 }}
			onDragStart={() => setIsDragging(true)}
			onDragEnd={() => setIsDragging(false)}
			onViewportBoxUpdate={(_, delta) => {
				if (isDragging) {
					updateOrder(i, delta.y.translate);
				}
			}}
			animate={{
				scale: isDragging ? 1.05 : 1,
				cursor: isDragging ? "grabbing" : "grab"
			}}
		>
			<h4>List Item {post}</h4>
			<p>this is inside the card</p>
		</motion.div>
	);
}

export default DragItem

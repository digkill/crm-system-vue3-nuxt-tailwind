export const generateColumnStyle = (index: number, total: number = 1) => {
	const intensity = 70 - (index / (total - 1)) * 50
	return { backgroundColor: `hsla(21, 90%, ${intensity}%, 1)` }
}

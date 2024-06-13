const ThemeItem = ({ color, img, changeColor }) => {
	return (
		<img
			src={img}
			alt={` choose ${color} color`}
			className="style__theme-img"
			onClick={() => {
				changeColor(color)
			}}
		/>
	)
}

export default ThemeItem

const HeroBanner = props => {
	const { mobileSrc, desktopSrc, alt } = props
	return (
		<div className="slide-inner w-full h-full">
			<picture className="w-full h-full block">
				<source
					media="(max-width: 768px)"
					srcSet={mobileSrc}
				/>
				<img
					src={desktopSrc}
					alt={alt || ''}
					className="w-full h-full object-contain"
				/>
			</picture>
		</div>
	)
}

export default HeroBanner

import { flexBetween } from '@styles/ui'
import { cn } from '@lib/cn'

const SliderDots = props => {
	const { total, activeIndex } = props

	return (
		<div className={cn(flexBetween, 'w-10.75')}>
			{Array.from({ length: total }).map((_, index) => (
				<div
					key={index}
					className={`w-2.25 h-2.25 rounded-full bg-white transition-opacity ${
						activeIndex === index ? 'opacity-100' : 'opacity-40'
					}`}
				/>
			))}
		</div>
	)
}

export default SliderDots

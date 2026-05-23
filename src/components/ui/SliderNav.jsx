import LeftArrow from '@assets/icons/left.svg?react'
import RightArrow from '@assets/icons/right.svg?react'
import { cn } from '@lib/cn'
import { sliderButton } from '@styles/ui'

const SliderNav = props => {
	const { direction = 'prev', onClick, className = '' } = props

	const isPrev = direction === 'prev'
	return (
		<button
			className={cn(sliderButton, className)}
			type="button"
			aria-label={isPrev ? 'Previous slide' : 'Next slide'}
			onClick={onClick}
		>
			{isPrev ? <LeftArrow /> : <RightArrow />}
		</button>
	)
}

export default SliderNav

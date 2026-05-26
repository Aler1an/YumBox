import Minus from '@assets/icons/minus.svg?react'
import Plus from '@assets/icons/plus.svg?react'
import { cn } from '@lib/cn'
import { textSemibold, transitionColors, flexBetween } from '@styles/ui'

const QuantityControl = props => {
	const { quantity, onIncrease, onDecrease } = props

	return (
		<div className={cn(flexBetween, 'border rounded-full gap-5.5 px-3 mr-0.5')}>
			<button
				className="group cursor-pointer py-2"
				onClick={onDecrease}
			>
				<Minus
					className={cn(transitionColors, 'text-white group-hover:text-primary active:scale-90')}
				/>
			</button>
			<span className={cn(textSemibold, 'font-avenir text-sm text-center')}>{quantity}</span>
			<button
				className="group cursor-pointer py-2"
				onClick={onIncrease}
			>
				<Plus
					className={cn(transitionColors, 'text-white group-hover:text-primary active:scale-90')}
				/>
			</button>
		</div>
	)
}

export default QuantityControl

import { basketButton, flexCenter } from '@styles/ui'
import { cn } from '@lib/cn'

const BasketButton = props => {
	const { onBasketClick, basketItemsCount, totalPrice, className = '' } = props
	return (
		<button
			className={cn(basketButton, className)}
			aria-label={`Open basket with ${basketItemsCount} items`}
			onClick={onBasketClick}
		>
			<span
				className={cn(
					flexCenter,
					'bg-[#d71515] text-[13px] my-0.75 ml-1 px-1.5 py-0.75 font-bold rounded-full leading-none'
				)}
			>
				{basketItemsCount}
			</span>
			<span className="font-bold text-[13px] mr-4 leading-none">{totalPrice} грн</span>
		</button>
	)
}

export default BasketButton

import { memo } from 'react'
import Check from '@assets/icons/check.svg?react'
import { cn } from '@lib/cn'
import {
	flexCenter,
	textLgSemibold,
	transitionAll,
	smoothAnimation,
	absoluteFull,
	hiddenState,
	visibleState
} from '@styles/ui'

const ProductCardActions = props => {
	const { price, quantity, isInBasket, onAddToBasket } = props
	return (
		<div className={cn(flexCenter, 'w-full h-16.75 relative')}>
			<div
				className={cn(
					flexCenter,
					absoluteFull,
					smoothAnimation,
					isInBasket ? hiddenState : visibleState
				)}
			>
				<span
					className={cn(
						textLgSemibold,
						transitionAll,
						'w-full max-w-78.75 text-center py-2.5 px-5'
					)}
				>
					{price} грн
				</span>
				<div className={cn(transitionAll, 'w-full h-full absolute left-0 bottom-0 mt-1')}>
					<button
						className={cn(flexCenter, 'group relative w-full h-full rounded-full overflow-hidden cursor-pointer')}
						onClick={onAddToBasket}
					>
						<span
							className={cn(
								absoluteFull,
								'rounded-full bg-black scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100'
							)}
						/>
						<span
							className={cn(
								absoluteFull,
								'rounded-full border-2 border-white opacity-0 scale-95 transition-all duration-400 delay-200 ease-out group-hover:opacity-100 group-hover:scale-100'
							)}
						/>
						<span
							className={cn(
								transitionAll,
								'relative z-10 text-base font-medium ease-out translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-white'
							)}
						>
							Добавити в кошик
						</span>
					</button>
				</div>
			</div>
			<div
				className={cn(
					flexCenter,
					absoluteFull,
					smoothAnimation,
					'w-full h-full border-2 rounded-full font-normal',
					isInBasket ? visibleState : hiddenState
				)}
			>
				<Check className="p-0.5 mr-1" />
				<span className="text-base leading-none">
					В кошику <b>{quantity} шт</b> за <b>{price * quantity}грн</b>
				</span>
			</div>
		</div>
	)
}

export default memo(ProductCardActions)

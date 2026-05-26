import Close from '@assets/icons/close.svg?react'
import { calculateFinalPrice, deliveryPrice, calculateTotalPrice } from '@utils/basket'
import BasketItem from './BasketItem'
import BasketFooter from './BasketFooter'
import { cn } from '@lib/cn'
import {
	flexBetween,
	textSemibold,
	transitionColors,
	flexCol,
	transitionTransform,
	transitionOpacity
} from '@styles/ui'
import { useEscapeKey } from '@hooks/useEscapeKey'
import { useLockBodyScroll } from '@hooks/useLockBodyScroll'

const BasketMenu = props => {
	const { isOpen, onClose, basketItems, onUpdateQuantity, onRemoveFromBasket, onCheckout } = props

	useEscapeKey(onClose)
	useLockBodyScroll(isOpen)

	const totalPrice = calculateTotalPrice(basketItems)
	const finalPrice = calculateFinalPrice(totalPrice)

	return (
		<>
			<div
				className={cn(
					transitionOpacity,
					'fixed inset-0 backdrop-blur-[10px] bg-primary/11 z-50',
					isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
				)}
				onClick={onClose}
			/>
			<div
				className={cn(
					flexCol,
					transitionTransform,
					'justify-between fixed top-0 md:top-26 lg:top-32 right-0 bottom-0 w-full z-70 max-w-none md:max-w-117.25 bg-black transform ease-out',
					isOpen ? 'translate-x-0' : 'translate-x-full'
				)}
				role="dialog"
				aria-modal="true"
				aria-label="Basket menu"
			>
				<div className={cn(flexBetween, 'pt-8.25 px-7.5 mb-6.5')}>
					<h2 className={cn(textSemibold, 'font-avenir text-4xl')}>Корзина</h2>
					<button
						className="group cursor-pointer"
						onClick={onClose}
					>
						<Close className={cn(transitionColors, 'text-white group-hover:text-primary')} />
					</button>
				</div>

				<div className="flex-1 overflow-y-auto">
					{basketItems.length === 0 ? (
						<p className="text-center text-white/50 py-10">Корзина порожня</p>
					) : (
						<div>
							{basketItems.map(item => (
								<BasketItem
									key={item.id}
									item={item}
									onUpdateQuantity={onUpdateQuantity}
									onRemoveFromBasket={onRemoveFromBasket}
								/>
							))}
						</div>
					)}
				</div>

				{basketItems.length > 0 && (
					<BasketFooter
						deliveryPrice={deliveryPrice}
						finalPrice={finalPrice}
						onCheckout={onCheckout}
					/>
				)}
			</div>
		</>
	)
}

export default BasketMenu

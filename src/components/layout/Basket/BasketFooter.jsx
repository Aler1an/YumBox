import { cn } from '@lib/cn'
import {
	flexBetween,
	flexCol,
	textLgSemibold,
	textSemibold,
	transitionAll,
	transitionColors
} from '@styles/ui'

const BasketFooter = props => {
	const { deliveryPrice, finalPrice, onCheckout } = props

	return (
		<div className={cn(flexCol, 'bg-background rounded-t-[31px] px-7.25 py-5.5 pb-6.5')}>
			<div className={cn(flexBetween, 'mb-6.5 items-center')}>
				<span className={cn(textLgSemibold, 'font-avenir')}>Доставка</span>
				<span className={cn(textSemibold, 'font-avenir text-[26px]')}>{deliveryPrice} ₴</span>
			</div>
			<button
				className={cn(
					textLgSemibold,
					transitionAll,
					'group relative overflow-hidden text-center rounded-full font-avenir text-black py-6 cursor-pointer ease-out hover:-translate-y-0.5 active:translate-y-0'
				)}
				onClick={onCheckout}
			>
				<span className="absolute inset-0 rounded-full bg-primary" />
				<span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
				<span className="absolute inset-0 rounded-full border-2 border-primary pointer-events-none opacity-0 transition-opacity duration-500 delay-300 ease-out group-hover:opacity-100" />
				<span className={cn(transitionColors, 'relative z-10 group-hover:text-white')}>
					Оформити за {finalPrice.toFixed(0)} ₴
				</span>
			</button>
		</div>
	)
}

export default BasketFooter

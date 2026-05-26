import Trash from '@assets/icons/trash.svg?react'
import QuantityControl from '@ui/QuantityControl'
import { cn } from '@lib/cn'
import { flexCol, flexBetween, flexCenter, textLgSemibold, transitionAll } from '@styles/ui'

const BasketItem = props => {
	const { item, onUpdateQuantity, onRemoveFromBasket } = props

	return (
		<div className={cn('flex mx-7.25 px-4.5 mb-2 bg-background rounded-xl', flexCol)}>
			<div className="flex border-b border-black pt-4.5 pb-7.25 -mx-4.5 px-4.5">
				<div className={flexCenter}>
					<div className="bg-[#303030] p-2.5 rounded-sm">
						<img
							src={item.image}
							alt={item.title}
							className="min-w-6.25 h-6.25 object-contain"
						/>
					</div>

					<div className={cn(flexCol, 'pl-6 pr-3.25 gap-2')}>
						<h3 className={cn('font-avenir', textLgSemibold)}>{item.title}</h3>
						<p className="font-avenir font-[450] text-[13px] opacity-40 leading-none">
							{item.weight}
						</p>
					</div>
				</div>

				<button
					className="ml-auto self-start cursor-pointer group"
					onClick={() => onRemoveFromBasket(item.id)}
				>
					<Trash className={cn(transitionAll, 'text-primary group-hover:text-red-600')} />
				</button>
			</div>
			<div className={cn(flexBetween, 'pt-3.75 pb-4')}>
				<span className="font-avenir font-semibold text-[26px] leading-none">{item.price} ₴</span>
				<QuantityControl
					quantity={item.quantity}
					onDecrease={() => onUpdateQuantity(item.id, item.quantity - 1)}
					onIncrease={() => onUpdateQuantity(item.id, item.quantity + 1)}
				/>
			</div>
		</div>
	)
}

export default BasketItem

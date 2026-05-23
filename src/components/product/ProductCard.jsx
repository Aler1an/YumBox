import { memo } from 'react'
import { Box, BoxMobile } from '@assets'
import ProductCardActions from './ProductCardActions'
import { flexCenter, text2XlSemibold } from '@styles/ui'
import { cn } from '@lib/cn'

const ProductCard = props => {
	const {
		id,
		title,
		weight,
		price,
		image = Box,
		imageMobile = BoxMobile,
		onAddToBasket,
		isInBasket = false,
		quantity = 0
	} = props

	const handleAdd = () => {
		onAddToBasket?.({
			id,
			title,
			weight,
			price,
			image
		})
	}

	return (
		<div className={cn(flexCenter, 'flex-col px-3.75 mb-13')}>
			<div className={cn(flexCenter, 'flex-col')}>
				<div className="mb-8.5 md:mb-4.5 flex w-full">
					<picture>
						<source
							media="(max-width: 768px)"
							srcSet={imageMobile}
						/>
						<img
							src={image}
							alt={title}
						/>
					</picture>
				</div>
				<h3 className={cn(text2XlSemibold, 'text-center mb-5.25')}>{title}</h3>
				<p className="font-medium text-[13px] leading-none text-center opacity-40 mb-5.5">
					{weight}
				</p>
			</div>
			<ProductCardActions
				price={price}
				quantity={quantity}
				isInBasket={isInBasket}
				onAddToBasket={handleAdd}
			/>
		</div>
	)
}

export default memo(ProductCard)

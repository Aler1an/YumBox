import ProductCard from './ProductCard'
import { products } from '../../constants/products.js'

	const buildBasketMap = basketItems => {
		const map = {}
		basketItems.forEach(item => {
			map[item.id] = item
		})
		return map
	}

const ProductsSection = props => {
	const { onAddToBasket, basketItems = [] } = props
	const basketMap = buildBasketMap(basketItems)

	return (
		<section>
			<div className="max-w-350 mx-auto px-5 md:px-15">
				<h2 className="font-medium text-xl leading-none text-center mb-7.25 md:mb-18.75">
					Найчастіше замовляють
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 -mx-3.75">
					{products.map(product => {
						return (
							<ProductCard
								key={product.id}
								{...product}
								isInBasket={!!basketMap[product.id]}
								quantity={basketMap[product.id]?.quantity || 0}
								onAddToBasket={onAddToBasket}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default ProductsSection

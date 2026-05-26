import { useState } from 'react'
import { useBasket } from './hooks/useBasket'
import BasketMenu from './components/layout/Basket/BasketMenu'
import Header from './components/layout/Header/Header'
import HeroSection from './components/hero/HeroSection'
import ProductsSection from './components/product/ProductsSection'
import MobileMenu from './components/layout/MobileMenu/MobileMenu'
import Footer from './components/layout/Footer/Footer'

const App = () => {
	const [isBasketOpen, setIsBasketOpen] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const {
		basketItems,
		addToBasket,
		removeFromBasket,
		updateQuantity,
		totalBasketPrice,
		itemsCount,
		submitOrder
	} = useBasket()

	return (
		<div className="min-h-screen bg-black text-white font-montserrat antialiased">
			<Header
				basketItemsCount={itemsCount}
				totalPrice={totalBasketPrice}
				onBasketClick={setIsBasketOpen}
				isBasketOpen={isBasketOpen}
				onMobileMenuClose={setIsMobileMenuOpen}
				isMobileMenuOpen={isMobileMenuOpen}
			/>
			<MobileMenu 
				basketItemsCount={itemsCount}
				totalPrice={totalBasketPrice}
				isOpen={isMobileMenuOpen}
				onBasketClick={() => setIsBasketOpen(true)}
			/>
			<main>
				<HeroSection />
				<ProductsSection
					onAddToBasket={addToBasket}
					basketItems={basketItems}
				/>
			</main>

			<BasketMenu
				isOpen={isBasketOpen}
				onClose={() => setIsBasketOpen(false)}
				basketItems={basketItems}
				onUpdateQuantity={updateQuantity}
				onRemoveFromBasket={removeFromBasket}
				onCheckout={submitOrder}
			/>

			<Footer/>
		</div>
	)
}

export default App

import { useState, useCallback, useMemo } from 'react'
import { calculateItemsCount, calculateTotalPrice } from '../utils/basket.js'

export const useBasket = () => {
	const [basketItems, setBasketItems] = useState([])

	const addToBasket = useCallback(product => {
		setBasketItems(prev => {
			const existingItem = prev.find(item => item.id === product.id)

			if (existingItem) {
				return prev.map(item =>
					item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
				)
			}
			return [...prev, { ...product, quantity: 1 }]
		})
	}, [])

	const updateQuantity = useCallback((id, newQuantity) => {
		if (newQuantity < 1) {
			setBasketItems(prev => prev.filter(item => item.id !== id))
			return
		}

		setBasketItems(prev =>
			prev.map(item =>
				item.id === id ? { ...item, quantity: newQuantity } : item
			)
		)
	}, [])

	const removeFromBasket = useCallback(id => {
		setBasketItems(prev => prev.filter(item => item.id !== id))
	}, [])
	
	const totalBasketPrice = useMemo(() => {
		return calculateTotalPrice(basketItems)
	}, [basketItems])

	const itemsCount = useMemo(() => {
		return calculateItemsCount(basketItems)
	}, [basketItems])

	const submitOrder = useCallback(() => {
		const orderItems = basketItems.map(item => ({
			id: item.id,
			title: item.title,
			price: item.price,
			quantity: item.quantity
		}))
		setBasketItems([])
		console.log('Submitting order:', orderItems)
	}, [basketItems])

	return {
		basketItems,
		addToBasket,
		updateQuantity,
		removeFromBasket,
		totalBasketPrice,
		itemsCount,
		submitOrder
	}
}
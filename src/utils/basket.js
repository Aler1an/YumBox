export const calculateTotalPrice = basketItems => {
	return basketItems.reduce((total, item) => total + item.price * item.quantity, 0)
}

export const calculateItemsCount = basketItems => {
	return basketItems.reduce((total, item) => total + item.quantity, 0)
}

export const deliveryPrice = 50

export const calculateFinalPrice = totalPrice => {
	if (totalPrice >= 1000) {
		return totalPrice * 0.9
	}

	return totalPrice + deliveryPrice
}

export const mapOrderItems = items => {
	return items.map(item => ({
		id: item.id,
		title: item.title,
		price: item.price,
		quantity: item.quantity
	}))
}

export const buildBasketMap = basketItems => {
	Object.fromEntries(basketItems.map(item => [item.id, item]))
}

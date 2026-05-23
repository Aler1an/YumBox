import { useEffect } from 'react'

export const useEscapeKey = (callback, isEnabled = true) => {
	useEffect(() => {
		if (!isEnabled) return

		const handleEsc = event => {
			if (event.key === 'Escape') {
				callback()
			}
		}

		document.addEventListener('keydown', handleEsc)

		return () => {
			document.removeEventListener('keydown', handleEsc)
		}
	}, [callback, isEnabled])
}

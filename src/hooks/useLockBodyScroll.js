import { useEffect } from 'react'

export const useLockBodyScroll = isLocked => {
	useEffect(() => {
		document.body.style.overflow = isLocked ? 'hidden' : ''

		return () => {
			document.body.style.overflow = ''
		}
	}, [isLocked])
}

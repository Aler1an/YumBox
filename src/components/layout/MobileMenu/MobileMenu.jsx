import Navigation from '@ui/Navigation'
import BasketButton from '@ui/BasketButton'
import Socials from '@ui/Socials'
import Contacts from '@ui/Contacts'
import { useLockBodyScroll } from '@hooks/useLockBodyScroll'
import { cn } from '@lib/cn'
import { flexCol, transitionTransform, basketButton } from '@styles/ui'

const MobileMenu = props => {
	const { basketItemsCount = 0, totalPrice = 0, onBasketClick, isOpen } = props

	useLockBodyScroll(isOpen)

	return (
		<>
			<div
				className={cn(
					transitionTransform,
					'fixed top-20 left-0 right-0 bottom-0 bg-black z-50 md:hidden overflow-hidden transform',
					isOpen ? 'translate-x-0' : 'translate-x-full'
				)}
			>
				<BasketButton
					className={cn(basketButton, 'w-fit mx-16 mb-4.75 mt-11.75')}
					onBasketClick={onBasketClick}
					basketItemsCount={basketItemsCount}
					totalPrice={totalPrice}
				/>

				<nav className="px-16 mb-5.5">
					<Navigation linkClassName="text-white text-2xl font-medium leading-[246%]" />
				</nav>
				<Contacts className={cn(flexCol, 'justify-center px-16.5 gap-2.5 mb-18.75')} />
				<Socials className="flex gap-11 pl-17.75" />
			</div>
		</>
	)
}

export default MobileMenu

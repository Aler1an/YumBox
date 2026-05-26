import Logo from '@assets/icons/logo.svg?react'
import Navigation from '@ui/Navigation'
import BasketButton from '@ui/BasketButton'
import BurgerButton from '@ui/BurgerButton'
import { cn } from '@lib/cn'
import { flexBetween, transitionColors } from '@styles/ui'

const Header = props => {
	const {
		onBasketClick,
		isBasketOpen,
		basketItemsCount,
		totalPrice,
		isMobileMenuOpen,
		onMobileMenuClose,
	} = props

	return (
		<header className="fixed top-0 right-0 left-0 z-60 w-full bg-black">
			<div className="max-w-360 mx-auto grid grid-cols-2 md:grid-cols-3 items-center pt-5 px-5 mb-3.5 lg:pt-8.75 lg:mb-5 lg:pl-26.75 lg:pr-20.5">
				<a
					href="/"
					className="w-fit"
				>
					<Logo className="w-18.75 h-12 md:w-auto md:h-auto" />
				</a>
				<nav className="hidden md:block justify-self-center">
					<Navigation
						className={cn(flexBetween, 'text-white gap-7 ml-2 pt-0.5')}
						itemClassName={cn(transitionColors, 'whitespace-nowrap hover:text-primary active:scale-95')}
						linkClassName="font-medium text-[15px] leading-none"
					/>
				</nav>

				<div className="flex justify-self-end items-center gap-4">
					<BurgerButton
						className="md:hidden"
						isOpen={isMobileMenuOpen}
						onClose={onMobileMenuClose}
					/>
					<BasketButton
						onBasketClick={onBasketClick}
						isBasketOpen={isBasketOpen}
						basketItemsCount={basketItemsCount}
						totalPrice={totalPrice}
						className={cn(
							transitionColors,
							'fixed bottom-6 right-5 z-30 cursor-pointer hover:bg-red-500 active:scale-95',
							isMobileMenuOpen && 'hidden',
							'md:relative md:bottom-0 md:right-0 md:z-auto md:bg-transparent'
						)}
					/>
				</div>
			</div>
		</header>
	)
}

export default Header

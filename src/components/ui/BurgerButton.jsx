import { cn } from '@lib/cn'
import { burgerButtonLine, flexCol } from '@styles/ui'

const BurgerButton = props => {
	const { isOpen, onClose } = props

	return (
		<button
			className="flex items-center gap-2.25 md:hidden cursor-pointer"
			onClick={() => onClose(!isOpen)}
		>
			<span className="font-bold text-sm leading-[92%]">Меню</span>
			<div className={cn(flexCol, 'relative w-5.5 h-3.5')}>
				<span className={cn(burgerButtonLine, isOpen ? 'rotate-45 top-1.5' : 'top-0')}></span>
				<span
					className={cn('top-1.5', burgerButtonLine, isOpen ? 'opacity-0' : 'opacity-100')}
				></span>
				<span className={cn(burgerButtonLine, isOpen ? '-rotate-45 top-1.5' : 'bottom-0')}></span>
			</div>
		</button>
	)
}

export default BurgerButton

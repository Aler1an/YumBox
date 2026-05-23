import { cn } from '@lib/cn'
import { textLgSemibold, transitionColors } from '@styles/ui'

const Contacts = props => {
	const { className = '' } = props

	return (
		<div className={className}>
			<a
				className={cn(
					textLgSemibold,
					transitionColors,
					'text-[#f3ba4f] cursor-pointer hover:text-white'
				)}
				href="mailto:yumbox.lutsk@gmail.com"
			>
				yumbox.lutsk@gmail.com
			</a>
			<a
				className={cn(textLgSemibold, transitionColors, 'cursor-pointer hover:text-[#f3ba4f]')}
				href="tel:+380 93 823 92 93"
			>
				+380 93 823 92 93
			</a>
		</div>
	)
}

export default Contacts

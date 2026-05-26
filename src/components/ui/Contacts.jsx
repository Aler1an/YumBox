import { cn } from '@lib/cn'
import { textLgSemibold, underlineEffect, transitionOpacity } from '@styles/ui'

const Contacts = props => {
	const { className = '' } = props

	return (
		<div className={className}>
			<a
				className={cn(textLgSemibold, underlineEffect, transitionOpacity, 'text-secondary cursor-pointer md:opacity-85 hover:opacity-100')}
				href="mailto:yumbox.lutsk@gmail.com"
			>
				yumbox.lutsk@gmail.com
			</a>
			<a
				className={cn(textLgSemibold, underlineEffect,transitionOpacity, 'text-white cursor-pointer md:opacity-85 hover:opacity-100')}
				href="tel:+380 93 823 92 93"
			>
				+380 93 823 92 93
			</a>
		</div>
	)
}

export default Contacts

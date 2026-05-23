import Contacts from '@ui/Contacts'
import Socials from '@ui/Socials'
import { cn } from '@lib/cn'
import { flexCenter, flexBetween } from '@styles/ui'

const Footer = () => {
	return (
		<footer className="max-w-360 mx-auto px-5">
			<div
				className={cn(
					flexBetween,
					'flex-col md:flex-row gap-10 border-t border-white/50 py-10 px-5'
				)}
			>
				<Contacts className={cn(flexCenter, 'flex-col gap-4')} />
				<Socials className={cn(flexCenter, 'gap-11')} />
			</div>
		</footer>
	)
}

export default Footer

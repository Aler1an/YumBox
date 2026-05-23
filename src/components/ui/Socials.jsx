import Facebook from '@assets/icons/facebook.svg?react'
import Instagram from '@assets/icons/instagram.svg?react'
import Linkedin from '@assets/icons/linkedin.svg?react'
import { socialIcon } from '@styles/ui'

const socialIcons = [Linkedin, Instagram, Facebook]

const Socials = props => {
	const { className = '' } = props

	return (
		<div className={className}>
			{socialIcons.map((Icon, index) => (
				<Icon
					key={index}
					className={socialIcon}
				/>
			))}
		</div>
	)
}

export default Socials

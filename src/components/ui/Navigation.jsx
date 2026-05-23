import { navigationItems } from '../../constants/navigation'

const Navigation = (props) => {
	const { className = '', itemClassName = '', linkClassName = '' } = props

	return (
		<ul className={className}>
			{navigationItems.map((item, index) => (
				<li
					key={index}
					className={itemClassName}
				>
					<a
						href={item.href}
						className={linkClassName}
					>
						{item.label}
					</a>
				</li>
			))}
		</ul>
	)
}

export default Navigation

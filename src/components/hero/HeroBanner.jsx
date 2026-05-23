import { Set, SetMobile } from '@assets'
import Eyes from '@assets/icons/eyes.svg?react'
import Letters from '@assets/icons/letters.svg?react'
import Line from '@assets/icons/line.svg?react'
import Proposition from '@assets/icons/proposition.svg?react'
import PropositionMobile from '@assets/icons/propositionMobile.svg?react'
import YumBox from '@assets/icons/yumbox.svg?react'
import YumBoxMobile from '@assets/icons/yumboxMobile.svg?react'
import { cn } from '@lib/cn'
import { flexCenter } from '@styles/ui'

const HeroBanner = () => {
	return (
		<div
			className={cn(
				flexCenter,
				'relative max-h-125.75 w-full h-full flex-col gap-6 md:gap-0 pb-5 md:pb-11'
			)}
		>
			<div className="relative w-full h-full pr-3 md:pr-0 md:pt-2">
				<div className={cn(flexCenter, 'relative h-full w-full')}>
					<div className="hidden md:flex justify-center items-center mr-4 w-full">
						<Line className="w-full h-auto z-10 -ml-3" />
						<YumBox className="w-full absolute inset-0 top-5.5 m-auto object-contain" />
					</div>
					<div className="block md:hidden pt-4.25 w-[35%] min-w-46.75">
						<YumBoxMobile className="w-full h-auto" />
					</div>
				</div>
				<div className="hidden md:flex absolute top-[7.5%] left-[8.4%] z-30">
					<div
						className={cn(
							flexCenter,
							'h-32 w-32 lg:h-40 lg:w-40 xl:h-45.25 xl:w-45.25 bg-white rounded-full shadow-xl'
						)}
					>
						<div
							className={cn(
								flexCenter,
								'w-28 h-28 lg:w-36 lg:h-36 xl:w-39.5 xl:h-39.5 rounded-full flex-col border-12 border-[#fc6727] bg-[#ffca95]'
							)}
						>
							<Eyes className="w-14 h-14 lg:w-18 lg:h-18 xl:w-auto xl:h-auto translate-y-2 lg:translate-y-3 -translate-x-0.5" />
							<Letters className="w-20 h-20 lg:w-24 lg:h-24 xl:w-auto xl:h-auto translate-y-0.5 -translate-x-px scale-90 lg:scale-100" />
						</div>
					</div>
				</div>
				<div
					className={cn(
						flexCenter,
						'absolute inset-x-0 bottom-0 top-[14%] md:top-[11%] md:left-[-2%] z-20 pointer-events-none'
					)}
				>
					<picture className="w-[clamp(310px,55vw,744px)] block">
						<source
							media="(max-width: 768px)"
							srcSet={SetMobile}
						/>
						<img
							src={Set}
							alt="Food set"
							className="w-full h-auto object-contain"
						/>
					</picture>
				</div>
			</div>
			<div className="z-30 ml-2.25 md:ml-0 mb-1.5 -mt-1 md:-mt-6 lg:-mt-9">
				<Proposition className="hidden md:block w-full h-auto" />
				<PropositionMobile className="block md:hidden w-full h-auto" />
			</div>
		</div>
	)
}

export default HeroBanner

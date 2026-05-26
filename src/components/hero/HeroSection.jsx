import { useRef, useState } from 'react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import HeroBanner from './HeroBanner'
import SliderDots from '@ui/SliderDots'
import SliderNav from '@ui/SliderNav'
import { flexCol, flexBetween } from '@styles/ui'
import { cn } from '@lib/cn'
import { Banner, BannerMobile } from '@assets/index'

const slides = [
	{
		desktop: Banner,
		mobile: BannerMobile,
		alt: 'Delicious food banner'
	},
	{
		desktop: Banner,
		mobile: BannerMobile,
		alt: 'Delicious food banner'
	},
	{
		desktop: Banner,
		mobile: BannerMobile,
		alt: 'Delicious food banner'
	}
]

const HeroSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const swiperRef = useRef(null)

	const prev = () => swiperRef.current?.slidePrev()
	const next = () => swiperRef.current?.slideNext()

	return (
		<section
			aria-label="Hero banner"
			className={cn(flexCol, 'items-center px-5 pt-20.5 md:pt-32')}
		>
			<div className="relative w-full max-w-319 min-h-79 bg-background rounded-3xl overflow-hidden mx-auto mb-4.5 md:mb-5">
				<SliderNav
					direction="prev"
					className="hidden md:flex absolute left-2 -translate-y-1/2 top-[47.5%] z-10"
					onClick={prev}
				/>
				<Swiper
					modules={[Autoplay]}
					slidesPerView={1}
					loop
					speed={1200}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true
					}}
					onSwiper={swiper => (swiperRef.current = swiper)}
					onSlideChange={swiper => setCurrentSlide(swiper.realIndex)}
					className="overflow-hidden rounded-3xl min-h-79 w-full h-full aspect-video md:aspect-auto"
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index}>
							<HeroBanner
								desktopSrc={slide.desktop}
								mobileSrc={slide.mobile}
								alt={slide.alt}
							/>
						</SwiperSlide>
					))}
				</Swiper>

				<SliderNav
					direction="next"
					className="hidden md:flex absolute right-2 -translate-y-1/2 top-[47.5%] z-10"
					onClick={next}
				/>
			</div>

			<div className={cn(flexBetween, 'md:justify-center  w-full mb-9.75 md:mb-16')}>
				<SliderNav
					direction="prev"
					className="md:hidden"
					onClick={prev}
				/>
				<SliderDots
					total={slides.length}
					activeIndex={currentSlide}
				/>
				<SliderNav
					direction="next"
					className="md:hidden"
					onClick={next}
				/>
			</div>
		</section>
	)
}

export default HeroSection

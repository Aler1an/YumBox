import { useRef, useState } from 'react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import HeroBanner from './HeroBanner'
import SliderDots from '@ui/SliderDots'
import SliderNav from '@ui/SliderNav'
import { flexCol, flexBetween } from '@styles/ui'
import { cn } from '@lib/cn'

const slides = [0, 1, 2]

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
			<div
				className={cn(
					flexBetween,
					'relative w-full max-w-319 min-h-79 md:max-h-125.75 aspect-video md:aspect-auto bg-[#222] rounded-3xl overflow-hidden px-2.25 mx-auto mb-4.5 md:mb-5'
				)}
			>
				<SliderNav
					direction="prev"
					className="hidden md:flex z-50"
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
					className="overflow-hidden rounded-3xl w-full h-full"
				>
					{slides.map(slide => (
						<SwiperSlide key={slide}>
							<div className="slide-inner">
								<HeroBanner />
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<SliderNav
					direction="next"
					className="hidden md:flex"
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

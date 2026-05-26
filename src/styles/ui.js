// Layout
export const flexCenter = `flex items-center justify-center`
export const flexBetween = `flex items-center justify-between`
export const flexCol = `flex flex-col`

export const absoluteFull = `absolute inset-0`

// Transitions
export const transitionAll = `transition-all duration-300`
export const transitionColors = `transition-colors duration-300`
export const transitionTransform = `transition-transform duration-300`
export const transitionOpacity = `transition-opacity duration-300`

export const smoothAnimation = `transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`
export const underlineEffect = `relative after:absolute after:top-5 after:left-0 after:h-px after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100`

// Typography
export const textSemibold = `font-semibold leading-none`
export const textLgSemibold = `text-lg font-semibold leading-none`
export const text2XlSemibold = `text-2xl font-semibold leading-none`

// States
export const hiddenState = 'opacity-0 -translate-y-6 pointer-events-none'
export const visibleState = 'opacity-100 translate-y-0 pointer-events-auto'

// Components
export const socialIcon = `text-white cursor-pointer transition-colors duration-300 hover:text-secondary`
export const sliderButton = `border-2 rounded-full flex items-center justify-center cursor-pointer px-2.25 pt-2.25 pb-2.5 transition-color duration-300 hover:text-primary active:scale-90`
export const basketButton = `flex items-center border gap-2.75 rounded-full bg-black`
export const burgerButtonLine = `w-5.5 h-0.5 bg-white transition-all duration-300 absolute`

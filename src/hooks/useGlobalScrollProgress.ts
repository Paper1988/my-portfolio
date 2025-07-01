import { MotionValue, useScroll } from 'motion/react'

interface GlobalScrollProgress {
    scrollYProgress: MotionValue<number>
    scrollY: MotionValue<number>
}

export function useGlobalScrollProgress(): GlobalScrollProgress {
    const { scrollY, scrollYProgress } = useScroll()
    return { scrollYProgress, scrollY }
}

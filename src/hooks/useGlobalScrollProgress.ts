import { MotionValue, useScroll } from 'framer-motion'

interface GlobalScrollProgress {
    scrollYProgress: MotionValue<number>
    scrollY: MotionValue<number>
}

export function useGlobalScrollProgress(): GlobalScrollProgress {
    const { scrollY, scrollYProgress } = useScroll()
    return { scrollYProgress, scrollY }
}

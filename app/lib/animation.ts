const smoothEasing = [0.22, 1, 0.36, 1] as const

export const transitionSmooth = {
  duration: 0.6,
  ease: smoothEasing,
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: transitionSmooth,
  },
}

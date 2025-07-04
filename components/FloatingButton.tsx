"use client"

import { motion } from "framer-motion"

interface FloatingButtonProps {
  onClick: () => void
}

export default function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-full shadow-2xl z-50 font-bold text-lg hover:shadow-3xl"
      style={{ fontFamily: "Fredoka, cursive" }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        y: { repeat: Number.POSITIVE_INFINITY, duration: 2 },
        rotate: { repeat: Number.POSITIVE_INFINITY, duration: 4 },
      }}
    >
      💻 Feeling Down?
    </motion.button>
  )
}

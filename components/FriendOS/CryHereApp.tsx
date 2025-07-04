"use client"

import { motion } from "framer-motion"

export default function CryHereApp() {
  const hugMessages = [
    "U have my virtual hugs🤗 (just chill)",
    "Im always here for you! 💖",
    "This too shall pass, my Shrfyaaa! 🌈",
    "You're stronger than this I know (apart from the shembud)! 💪",
  ]

  const randomMessage = hugMessages[Math.floor(Math.random() * hugMessages.length)]

  return (
    <div className="text-center space-y-4">
      <div className="text-2xl font-bold text-blue-600 mb-4" style={{ fontFamily: "Fredoka, cursive" }}>
        😭 Cry Here (Please dont but if u have to)
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-100 p-4 rounded-lg border-2 border-dashed border-blue-300"
      >
        <div className="text-4xl mb-3">🤗</div>
        <div className="text-lg font-bold mb-2" style={{ fontFamily: "Comic Neue, cursive" }}>
          {randomMessage}
        </div>
        <div className="text-sm text-gray-600">
          Remember: U always have a very handsome , extremely smart and very very humble ,down to earth ,mindblowingly nice guy ,great looking, did i mention good looking guy , who is always there for you! 😉
        </div>
      </motion.div>

      <div className="flex justify-center space-x-2 text-2xl">
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          🌟
        </motion.span>
        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          💖
        </motion.span>
        <motion.span
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}
        >
          🌈
        </motion.span>
      </div>
    </div>
  )
}

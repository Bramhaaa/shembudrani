"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { messages } from "./messages"

export default function SelfEsteemApp() {
  const [currentMessage, setCurrentMessage] = useState(0)

  const nextMessage = () => {
    setCurrentMessage((prev) => (prev + 1) % messages.length)
  }

  return (
    <div className="text-center space-y-4">
      <div className="text-2xl font-bold text-purple-600 mb-4" style={{ fontFamily: "Fredoka, cursive" }}>
        💪 Self-Esteem Booster 3000
      </div>

      <motion.div
        key={currentMessage}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`p-4 rounded-lg ${messages[currentMessage].color} border-2 border-dashed border-gray-400`}
      >
        <div className="text-lg font-bold mb-2" style={{ fontFamily: "Comic Neue, cursive" }}>
          {/* {messages[currentMessage].type === "roast" ? "🔥 ROAST:" : "💖 COMPLIMENT:"} */}
        </div>
        <div className="text-sm">{messages[currentMessage].text}</div>
      </motion.div>

      <motion.button
        onClick={nextMessage}
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full font-bold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ fontFamily: "Fredoka, cursive" }}
      >
        Hit Me Again! 🎯
      </motion.button>
    </div>
  )
}

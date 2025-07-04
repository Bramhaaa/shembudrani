"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface MoodKillerAppProps {
  onClose: () => void
}

export default function MoodKillerApp({ onClose }: MoodKillerAppProps) {
  const [stage, setStage] = useState(0)

  const stages = [
    { text: "Scanning for sadness...", emoji: "🔍" },
    { text: "Sadness detected! Preparing deletion...", emoji: "⚠️" },
    { text: "Deleting sadness.exe...", emoji: "💀" },
    { text: "Installing happiness.exe...", emoji: "📥" },
    { text: "SUCCESS! Mood has been upgraded! 🎉", emoji: "✅" },
  ]

  const nextStage = () => {
    if (stage < stages.length - 1) {
      setStage(stage + 1)
    } else {
      setTimeout(onClose, 2000)
    }
  }

  return (
    <div className="text-center space-y-4">
      <div className="text-2xl font-bold text-red-600 mb-4" style={{ fontFamily: "Fredoka, cursive" }}>
        💀 MoodKiller.bat
      </div>

      <motion.div
        key={stage}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm"
      >
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{stages[stage].emoji}</span>
          <span>{stages[stage].text}</span>
        </div>

        {stage < stages.length - 1 && (
          <div className="mt-2">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-green-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((stage + 1) / stages.length) * 100}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        )}
      </motion.div>

      {stage < stages.length - 1 ? (
        <motion.button
          onClick={nextStage}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ fontFamily: "Fredoka, cursive" }}
        >
          Execute Command 💥
        </motion.button>
      ) : (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-4xl">
          🎉✨🌈
        </motion.div>
      )}
    </div>
  )
}

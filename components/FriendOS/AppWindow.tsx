"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface AppWindowProps {
  title: string
  children: React.ReactNode
  onClose: () => void
  initialPosition: { x: number; y: number }
}

export default function AppWindow({ title, children, onClose, initialPosition }: AppWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: initialPosition.x, y: initialPosition.y }}
      animate={{
        scale: isMinimized ? 0.1 : 1,
        opacity: isMinimized ? 0.5 : 1,
      }}
      exit={{ scale: 0, opacity: 0 }}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={{
        top: -50,
        left: -100,
        right: 200,
        bottom: 100,
      }}
      className="absolute bg-white rounded-lg shadow-2xl border-2 border-gray-300 min-w-[300px] max-w-[400px] z-10 cursor-move"
      whileDrag={{ scale: 1.05, rotate: 2 }}
    >
      {/* Title Bar */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-t-lg flex justify-between items-center cursor-move">
        <div className="font-bold text-sm" style={{ fontFamily: "Courier New, monospace" }}>
          {title}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-4 h-4 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors flex items-center justify-center text-xs font-bold"
          >
            −
          </button>
          <button
            onClick={onClose}
            className="w-4 h-4 bg-red-400 rounded-full hover:bg-red-500 transition-colors flex items-center justify-center text-xs font-bold"
          >
            ×
          </button>
        </div>
      </div>

      {/* Content */}
      {!isMinimized && (
        <motion.div className="p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          {children}
        </motion.div>
      )}
    </motion.div>
  )
}

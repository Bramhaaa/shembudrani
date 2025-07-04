"use client"

import { motion } from "framer-motion"
import { useDrag } from "react-dnd"

interface IconProps {
  id: string
  name: string
  onDoubleClick: () => void
  onDelete: (id: string) => void
}

export default function Icon({ id, name, onDoubleClick, onDelete }: IconProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "icon",
    item: { id, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  const getIcon = (name: string) => {
    if (name.includes("SelfEsteem")) return "💪"
    if (name.includes("CryHere")) return "😭"
    if (name.includes("MoodKiller")) return "💀"
    return "📁"
  }

  return (
    <motion.div
      ref={drag}
      className={`cursor-pointer select-none ${isDragging ? "opacity-50" : ""}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onDoubleClick={onDoubleClick}
    >
      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-3 text-center min-w-[80px] shadow-lg">
        <div className="text-3xl mb-1">{getIcon(name)}</div>
        <div className="text-xs text-white font-bold break-words" style={{ fontFamily: "Courier New, monospace" }}>
          {name}
        </div>
      </div>
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import { useDrop } from "react-dnd"
import { useState } from "react"

interface TrashBinProps {
  onDelete: (id: string) => void
}

export default function TrashBin({ onDelete }: TrashBinProps) {
  const [showPoof, setShowPoof] = useState(false)

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "icon",
    drop: (item: { id: string; name: string }) => {
      console.log("Dropping item:", item.id) // Debug log
      onDelete(item.id)
      setShowPoof(true)
      setTimeout(() => setShowPoof(false), 2000)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }))

  return (
    <div className="absolute bottom-4 right-4">
      <motion.div
        ref={drop}
        className={`relative bg-white bg-opacity-30 backdrop-blur-sm rounded-lg p-4 text-center border-2 border-dashed transition-all duration-200 ${
          isOver ? "bg-red-400 bg-opacity-60 border-red-500 scale-110" : "border-white border-opacity-50"
        }`}
        animate={{ scale: isOver ? 1.2 : 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="text-4xl">{isOver ? "🔥" : "🗑️"}</div>
        <div className="text-xs text-white font-bold mt-1" style={{ fontFamily: "Courier New, monospace" }}>
          {isOver ? "DROP HERE!" : "Trash"}
        </div>

        {showPoof && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-2xl"
          >
            💥
          </motion.div>
        )}
      </motion.div>

      {showPoof && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
        >
          Sadness Deleted Successfully! ✨
        </motion.div>
      )}
    </div>
  )
}

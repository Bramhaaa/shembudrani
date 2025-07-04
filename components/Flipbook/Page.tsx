"use client"

import { motion } from "framer-motion"
import type { RoastbookEntry } from "./roastbookData"

interface PageProps {
  data: RoastbookEntry
  pageNumber: number
}

export default function Page({ data, pageNumber }: PageProps) {
  const isRoast = data.type === "roast"

  return (
    <motion.div
      className="relative w-full h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Main Page */}
      <div
        className={`
        ${data.color} 
        w-full h-96 rounded-3xl shadow-2xl p-8 
        transform rotate-1 hover:rotate-0 transition-all duration-300
        border-4 border-white
        relative overflow-hidden
      `}
      >
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 text-6xl opacity-20">{data.emoji}</div>

        {/* Washi Tape Effect */}
        <div
          className={`
          absolute top-0 left-1/4 w-20 h-6 
          ${isRoast ? "bg-red-400" : "bg-green-400"} 
          opacity-70 transform -rotate-12 -translate-y-3
        `}
        ></div>

        {/* Page Number */}
        <div className="absolute top-4 left-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-purple-600">
          {pageNumber}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div
            className={`
            text-2xl mb-4 
            ${isRoast ? "text-red-700" : "text-green-700"}
            font-bold uppercase tracking-wide
          `}
            style={{ fontFamily: "Fredoka, cursive" }}
          >
            {/* {isRoast ? "🔥 ROAST ALERT 🔥" : "💖 COMPLIMENT TIME 💖"} */}
          </div>

          <div
            className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed max-w-md"
            style={{ fontFamily: "Comic Neue, cursive" }}
          >
            {data.text}
          </div>

          <div className="text-4xl mt-4 animate-pulse">{data.emoji}</div>
        </div>

        {/* Torn Corner Effect */}
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-white opacity-80"></div>

        {/* Doodle Stickers */}
        <div className="absolute bottom-4 left-4 text-2xl transform -rotate-12">{isRoast ? "😈" : "🥰"}</div>
      </div>
    </motion.div>
  )
}

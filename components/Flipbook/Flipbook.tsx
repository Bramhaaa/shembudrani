"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Page from "./Page"
import { roastbookData } from "./roastbookData"

export default function Flipbook() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextPage = () => {
    if (currentPage < roastbookData.length - 1) {
      setDirection(1)
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1)
      setCurrentPage(currentPage - 1)
    }
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 90 : -90,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 90 : -90,
    }),
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Desktop Flipbook */}
      <div className="hidden md:block">
        <div className="relative h-96 perspective-1000">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.6 },
              }}
              className="absolute inset-0"
            >
              <Page data={roastbookData[currentPage]} pageNumber={currentPage + 1} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-purple-500 hover:bg-purple-600 disabled:bg-gray-300 text-white px-6 py-3 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg disabled:cursor-not-allowed"
            style={{ fontFamily: "Fredoka, cursive" }}
          >
            ← Previous Chaos
          </button>

          <div className="text-center">
            <div className="text-2xl font-bold text-purple-700 mb-2" style={{ fontFamily: "Fredoka, cursive" }}>
              Page {currentPage + 1} of {roastbookData.length}
            </div>
            <div className="flex space-x-2">
              {roastbookData.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentPage ? "bg-purple-500 scale-125" : "bg-purple-200"
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === roastbookData.length - 1}
            className="bg-purple-500 hover:bg-purple-600 disabled:bg-gray-300 text-white px-6 py-3 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg disabled:cursor-not-allowed"
            style={{ fontFamily: "Fredoka, cursive" }}
          >
            Next Adventure →
          </button>
        </div>
      </div>

      {/* Mobile Scrollable Cards */}
      <div className="md:hidden space-y-6">
        {roastbookData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Page data={data} pageNumber={index + 1} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

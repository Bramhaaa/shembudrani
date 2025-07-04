"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import Icon from "./Icon"
import AppWindow from "./AppWindow"
import TrashBin from "./TrashBin"
import SelfEsteemApp from "./SelfEsteemApp"
import CryHereApp from "./CryHereApp"
import MoodKillerApp from "./MoodKillerApp"

interface FriendOSWidgetProps {
  onClose: () => void
}

interface AppState {
  id: string
  name: string
  isOpen: boolean
  position: { x: number; y: number }
}

export default function FriendOSWidget({ onClose }: FriendOSWidgetProps) {
  const [apps, setApps] = useState<AppState[]>([
    { id: "selfesteem", name: "SelfEsteem.exe", isOpen: false, position: { x: 100, y: 100 } },
    { id: "cryhere", name: "CryHere.txt", isOpen: false, position: { x: 200, y: 150 } },
    { id: "moodkiller", name: "MoodKiller.bat", isOpen: false, position: { x: 150, y: 200 } },
  ])

  const [deletedApps, setDeletedApps] = useState<string[]>([])

  const openApp = (appId: string) => {
    setApps(apps.map((app) => (app.id === appId ? { ...app, isOpen: true } : app)))
  }

  const closeApp = (appId: string) => {
    setApps(apps.map((app) => (app.id === appId ? { ...app, isOpen: false } : app)))
  }

  const deleteApp = (appId: string) => {
    setDeletedApps([...deletedApps, appId])
    closeApp(appId)
  }

  const renderAppContent = (appId: string) => {
    switch (appId) {
      case "selfesteem":
        return <SelfEsteemApp />
      case "cryhere":
        return <CryHereApp />
      case "moodkiller":
        return <MoodKillerApp onClose={() => closeApp(appId)} />
      default:
        return <div>App not found!</div>
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full h-[600px] relative border-8 border-gray-800"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        {/* Monitor Frame */}
        <div className="absolute inset-0 border-4 border-gray-700 rounded-2xl"></div>

        {/* Screen */}
        <div className="relative h-full p-6">
          {/* Title Bar */}
          <div className="bg-gray-800 text-white px-4 py-2 rounded-t-lg flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={onClose}
                className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                title="Close"
              ></button>
              <button
                onClick={() => {
                  /* Minimize functionality can be added later */
                }}
                className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"
                title="Minimize"
              ></button>
              <button
                onClick={() => {
                  /* Maximize functionality can be added later */
                }}
                className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
                title="Maximize"
              ></button>
            </div>
            <div className="font-bold" style={{ fontFamily: "Courier New, monospace" }}>
              FriendOS v2.0 - Desktop
            </div>
            <button onClick={onClose} className="text-white hover:text-red-400 font-bold text-xl">
              ×
            </button>
          </div>

          {/* Desktop */}
          <DndProvider backend={HTML5Backend}>
            <div className="relative h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg p-4 overflow-hidden">
              {/* Desktop Icons */}
              <div className="absolute inset-4 grid grid-cols-4 gap-4 content-start">
                {apps
                  .filter((app) => !deletedApps.includes(app.id))
                  .map((app, index) => (
                    <div key={app.id} style={{ gridColumn: (index % 4) + 1, gridRow: Math.floor(index / 4) + 1 }}>
                      <Icon id={app.id} name={app.name} onDoubleClick={() => openApp(app.id)} onDelete={deleteApp} />
                    </div>
                  ))}
              </div>

              {/* Trash Bin */}
              <TrashBin onDelete={deleteApp} />

              {/* App Windows */}
              <AnimatePresence>
                {apps
                  .filter((app) => app.isOpen)
                  .map((app) => (
                    <AppWindow
                      key={app.id}
                      title={app.name}
                      onClose={() => closeApp(app.id)}
                      initialPosition={app.position}
                    >
                      {renderAppContent(app.id)}
                    </AppWindow>
                  ))}
              </AnimatePresence>
            </div>
          </DndProvider>
        </div>
      </motion.div>
    </motion.div>
  )
}

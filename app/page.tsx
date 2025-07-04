"use client";

import { useState } from "react";
import Flipbook from "@/components/Flipbook/Flipbook";
import FloatingButton from "@/components/FloatingButton";
import FriendOSWidget from "@/components/FriendOS/FriendOSWidget";

export default function Home() {
  const [showFriendOS, setShowFriendOS] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 relative overflow-hidden">
      {/* Scrapbook Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full transform rotate-12"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-200 rounded-lg transform -rotate-6"></div>
        <div className="absolute bottom-20 left-20 w-24 h-12 bg-blue-200 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-green-200 rounded-lg transform -rotate-12"></div>
      </div>

      {/* Tape Effects */}
      <div className="absolute top-0 left-1/4 w-32 h-8 bg-yellow-300 opacity-60 transform -rotate-12 shadow-md"></div>
      <div className="absolute top-20 right-1/3 w-24 h-6 bg-pink-300 opacity-60 transform rotate-6 shadow-md"></div>
      <div className="absolute bottom-10 left-1/3 w-28 h-7 bg-blue-300 opacity-60 transform rotate-12 shadow-md"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1
            className="text-6xl font-bold text-purple-800 mb-4 transform -rotate-2 drop-shadow-lg"
            style={{ fontFamily: "Fredoka, cursive" }}
          >
            📚 Shreya
          </h1>
          <p
            className="text-xl text-purple-600 transform rotate-1"
            style={{ fontFamily: "Comic Neue, cursive" }}
          >
            a.k.a makeup minion! 🎭
          </p>

          {/* Cute decorative elements */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <span className="text-4xl animate-bounce">🐱</span>
            <span className="text-4xl animate-bounce delay-100">💖</span>
            <span className="text-4xl animate-bounce delay-200">🌈</span>
            <span className="text-4xl animate-bounce delay-300">✨</span>
          </div>
        </header>

        <Flipbook />
      </div>

      {/* Floating Button */}
      <FloatingButton onClick={() => setShowFriendOS(true)} />

      {/* FriendOS Modal */}
      {showFriendOS && (
        <FriendOSWidget onClose={() => setShowFriendOS(false)} />
      )}
    </div>
  );
}

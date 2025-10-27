"use client";

import MiniChatbot from "@/components/MiniChatbot";
import { useState } from "react";
import Image from "next/image";

const TechnoVITPage = () => {
  const [showChatbot, setShowChatbot] = useState(true);

  const handleCloseChatbot = () => {
    setShowChatbot(false);
  };

  const handleOpenChatbot = () => {
    setShowChatbot(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10">
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold font-mono text-white tracking-wider drop-shadow-2xl">
          TechnoVIT
        </h1>
        <div className="mt-4">
          <span className="text-6xl md:text-7xl lg:text-8xl font-bold font-mono text-purple-300 tracking-widest drop-shadow-xl">
            25
          </span>
        </div>
        <p className="mt-8 text-xl md:text-2xl text-purple-200 font-light tracking-wide">
          Healing with Intelligence
        </p>
        <div className="mt-12">
          <p className="text-lg text-gray-300 font-mono">
            India&apos;s Biggest Technical Fest
          </p>
          <p className="text-sm text-gray-400 font-mono mt-2">
            October 31st & November 2nd, 2025
          </p>
        </div>
      </div>

      {/* Mini Chatbot */}
      {showChatbot && <MiniChatbot onClose={handleCloseChatbot} />}

      {/* Floating Action Button to reopen chatbot */}
      {!showChatbot && (
        <button
          onClick={handleOpenChatbot}
          className="fixed bottom-6 right-6 z-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <Image
            src="/logo.png"
            alt="Chatbot"
            width={60}
            height={60}
            className="rounded-full group-hover:scale-110 transition-transform"
          />
        </button>
      )}
    </div>
  );
};

export default TechnoVITPage;

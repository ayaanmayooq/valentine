"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home(): JSX.Element {
  const [showQuestion, setShowQuestion] = useState<boolean>(false);
  const [escaped, setEscaped] = useState<boolean>(false);
  const [noButtonPos, setNoButtonPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const [noButtonText, setNoButtonText] = useState<string>("No");
  const router = useRouter();

  // Show the yes/no question after the invite animation (1 second for testing)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuestion(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Navigation handlers
  const handleYes = () => {
    router.push("/yes");
  };

  const handleNo = () => {
    router.push("/no");
  };

  // Handle hover: reposition the No button and update its text
  const handleNoHover = () => {
    if (typeof window !== "undefined") {
      // On the first hover, mark the button as escaped so that we show the fixed one
      if (!escaped) {
        setEscaped(true);
      }
      // Use approximate dimensions for the button (adjust if needed)
      // const approxButtonWidth = 120;
      // const approxButtonHeight = 40;
      // Calculate new random positions ensuring the button stays fully in view
      const newTop = Math.random() * (window.innerHeight - 50);
      const newLeft = Math.random() * (window.innerWidth - 100);
      setNoButtonPos({ top: newTop, left: newLeft });

      // List of playful messages for the No button
      const noTexts = [
        "cmonnnn...",
        "really? NO?!",
        "I thought we were closer :(",
        "Oh come on, don't be like that!",
        "Seriously? Is that your final answer?",
        "I thought you felt it too!",
        "Don't you want to be mine?",
        "This is a deal-breaker!",
        "Are you kidding me?!",
        "I'm pouring my heart out here!",
        "You're breaking my heart!"
      ];
      const randomText = noTexts[Math.floor(Math.random() * noTexts.length)];
      setNoButtonText(randomText);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-valentine-pink relative">
      {/* Animated Invitation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-valentine-red"
      >
        Will You Be My Valentine?
      </motion.div>

      {/* Buttons container with reserved space to prevent layout shifts */}
      <div className="mt-8 h-8 flex items-center justify-center space-x-4 relative">
        {showQuestion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-4"
          >
            <button
              onClick={handleYes}
              className="px-6 py-2 bg-valentine-red text-white rounded hover:bg-red-600 transition"
            >
              Yes
            </button>
            {/* Render the inline No button only if it hasn’t escaped */}
            {!escaped && (
              <button
                onMouseEnter={handleNoHover}
                onClick={handleNo}
                className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
              >
                {noButtonText}
              </button>
            )}
          </motion.div>
        )}
      </div>

      {/* Render the fixed-position No button only once it has escaped */}
      {escaped && showQuestion && (
        <motion.button
          onMouseEnter={handleNoHover}
          onClick={handleNo}
          style={{ position: "fixed", top: noButtonPos.top, left: noButtonPos.left }}
          className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
        >
          {noButtonText}
        </motion.button>
      )}
    </div>
  );
}

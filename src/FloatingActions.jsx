/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaRobot, FaChevronUp } from "react-icons/fa6";
import AIChatbot from "./AIChatbot";

import { useThemeStyles } from "./hook/useThemeStyles";


const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const themeStyles =  useThemeStyles();
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-[9999]">
      {/* AI Chatbot Button */}
      <button
        className={`p-3 rounded-full shadow-lg transitio
           ${themeStyles.aiChatbotBg} 
          ${themeStyles.aiChatbotHover} 
          ${themeStyles.aiChatbotText}`}
        onClick={() => setShowChat(true)}
      >
        <FaRobot size={24} />
      </button>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
        className={`p-3 rounded-full shadow-lg transition 
          ${themeStyles.floatingActionBg} 
          ${themeStyles.floatingActionHover} 
          ${themeStyles.floatingActionText}`}
      
          onClick={scrollToTop}
        >
          <FaChevronUp size={24} />
        </button>
      )}

      {/* Chatbot UI */}
      {showChat && <AIChatbot closeChat={() => setShowChat(false)} />}
    </div>
  );
};

export default FloatingActions;

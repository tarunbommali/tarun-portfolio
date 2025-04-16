import { useSelector } from "react-redux";

export const useThemeStyles = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  const themeStyles = {
    light: {
      textColor: "text-gray-900",
      headingColor: "text-blue-600",
      bgColor: "bg-gray-100",
      particleColor: "#000000",
      borderColor: "border-gray-300",
      cardBg: "bg-white",
      shadowColor: "shadow-lg",
      innerBg: "bg-white",
      contentText: "text-gray-800",

      btn: {
        primary: "bg-blue-500 hover:bg-blue-600 text-white",
        secondary: "bg-gray-700 hover:bg-gray-800 text-white",
      },

      linkColor: "text-blue-500 hover:underline",

      // Skill styles
      skillCardBg: "bg-gray-100",
      skillBorder: "border-gray-300",
      skillTextPrimary: "text-gray-800",
      skillTextSecondary: "text-gray-600",
      skillIconColor: "text-gray-700",
      skillTrail: "#E5E7EB",

      // Project styles
      projectcardBg: "bg-white border-gray-200",
      projecttextColor: "text-black",
      projectdescColor: "text-gray-700",
      projecticonColor: "text-gray-700 hover:text-black",

      // Footer/Social Icon Colors
      iconColors: {
        linkedin: "#0077b5",
        github: "#2b3137",
        instagram: "#bc5288",
        hackerrank: "#2EC866",
        leetcode: "#FFA116",
        text: "text-gray-900",
        footerBG: "bg-gray-200",
      },

      // Typewriter
      typeWriterTextColor: "text-gray-900",
      typeWriterCursorColor: "text-blue-500",

      // Floating Action Button
      floatingActionBg: "bg-gray-500",
      floatingActionHover: "hover:bg-gray-600",
      floatingActionText: "text-gray-100",

      // AI Chatbot Button
      AiChatbotBg: "bg-blue-500",
      AiChatbotHover: "hover:bg-blue-600",
      AiChatbotText: "text-white",
    },

    dark: {
      textColor: "text-white",
      headingColor: "text-blue-400",
      bgColor: "bg-gray-900",
      particleColor: "#ffffff",
      borderColor: "border-gray-600",
      cardBg: "bg-gray-800",
      shadowColor: "shadow-gray-700",
      innerBg: "bg-gray-800",
      contentText: "text-gray-300",

      btn: {
        primary: "bg-green-500 hover:bg-green-600 text-white",
        secondary: "bg-gray-500 hover:bg-gray-600 text-white",
      },

      linkColor: "text-cyan-400 hover:underline",

      // Skill styles
      skillCardBg: "bg-gray-700",
      skillBorder: "border-gray-600",
      skillTextPrimary: "text-white",
      skillTextSecondary: "text-gray-300",
      skillIconColor: "text-white",
      skillTrail: "#4B5563",

      // Project styles
      projectcardBg: "bg-[#1a1a1a] border-gray-700",
      projecttextColor: "text-white",
      projectdescColor: "text-neutral-400",
      projecticonColor: "text-white hover:text-teal-300",

      // Footer/Social Icon Colors
      iconColors: {
        linkedin: "#0077b5",
        github: "#f5f5f5",
        instagram: "#d16d8c",
        hackerrank: "#2EC866",
        leetcode: "#FFA116",
        text: "text-white",
        footerBG: "bg-[#1d232a]",
      },

      // Typewriter
      typeWriterTextColor: "text-gray-200",
      typeWriterCursorColor: "text-blue-400",

      // Floating Action Button
      floatingActionBg: "bg-gray-700",
      floatingActionHover: "hover:bg-gray-800",
      floatingActionText: "text-white",

      // AI Chatbot Button
      aiChatbotBg: "bg-blue-600",
      aiChatbotHover: "hover:bg-blue-700",
      aiChatbotText: "text-white",
    },
  };

  return themeStyles[theme];
};

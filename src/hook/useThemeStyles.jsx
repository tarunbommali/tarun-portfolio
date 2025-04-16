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
      skillActiveTab: "bg-blue-500 text-white",
      skillInactiveTab: "bg-gray-100 text-gray-600",

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

      // Section Bg
      skillSectionBg: "bg-[#ffffff]",
      aboutSectionBg: "bg-[#ffffff]",
      projectSectionBg: "bg-[#ffffff]",

      // About Section
      // --> Testimonial Light styles

      testimonial: {
        nameText: "text-black",
        designationText: "text-gray-500",
        quoteText: "text-gray-600",
        prevBtnBg: "bg-gray-100",
        nextBtnBg: "bg-gray-100",
        prevBtnText: "text-black",
        nextBtnText: "text-black",
        bgColor: "bg-white",
      },


      // Global styles
      // --> Header
      headerBGColor: "bg-white",

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

      // Skills Icon Colors
      skillsIconColors: {
        JavaScript: "text-yellow-400",
        Python: "text-blue-500",
        Java: "text-orange-600",
      
        HTML: "text-orange-500",
        CSS: "text-blue-600",
        React: "text-cyan-500",
        Node: "text-green-500",
        Express: "text-gray-600",
        Git: "text-orange-500",
        GitHub: "text-gray-900",
        VSCode: "text-blue-500",
        Postman: "text-orange-400",
        NPM: "text-red-600",
        Yarn: "text-blue-500",
      
        MySQL: "text-blue-700",
        PostgreSQL: "text-blue-800",
        SQLite: "text-gray-500",
        MongoDB: "text-green-700",
      
        Redux: "text-purple-500",
        Bootstrap: "text-purple-600",
        Tailwind: "text-sky-500",
        jQuery: "text-blue-600",
        Axios: "text-cyan-600",
      
        AWS: "text-orange-400",
      },
      
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

      // Section Bg
      skillSectionBg: "bg-[#000000]",
      aboutSectionBg: "bg-[#000000]",
      projectSectionBg: "bg-[#000000]",

      // About Section
      // --> Testimonial Dark styles

      testimonial: {
        nameText: "text-white",
        designationText: "text-gray-300",
        quoteText: "text-gray-200",
        prevBtnBg: "bg-gray-700",
        nextBtnBg: "bg-gray-700",
        prevBtnText: "text-white",
        nextBtnText: "text-white",
        bgColor: "[#181818]",
      },

      // Skill styles
      skillCardBg: "bg-gray-700",
      skillBorder: "border-gray-600",
      skillTextPrimary: "text-white",
      skillTextSecondary: "text-gray-300",
      skillIconColor: "text-white",
      skillTrail: "#4B5563",
      skillActiveTab: "bg-green-500 text-white",
      skillInactiveTab: "bg-gray-700 text-gray-300",

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

      // Skills icons colors
      skillsIconColors: {
        JavaScript: "text-yellow-400",
        Python: "text-blue-400",
        Java: "text-orange-500",
      
        HTML: "text-orange-400",
        CSS: "text-blue-500",
        React: "text-cyan-300",
        Node: "text-green-400",
        Express: "text-gray-400",
        Git: "text-orange-400",
        GitHub: "text-gray-100",
        VSCode: "text-blue-400",
        Postman: "text-orange-300",
        NPM: "text-red-500",
        Yarn: "text-blue-400",
      
        MySQL: "text-blue-500",
        PostgreSQL: "text-blue-600",
        SQLite: "text-gray-400",
        MongoDB: "text-green-400",
      
        Redux: "text-purple-400",
        Bootstrap: "text-purple-500",
        Tailwind: "text-sky-300",
        jQuery: "text-blue-400",
        Axios: "text-cyan-400",
      
        AWS: "text-orange-300",
      },
      

      // Global styles
      // --> Header
      headerBGColor: "bg-black",

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

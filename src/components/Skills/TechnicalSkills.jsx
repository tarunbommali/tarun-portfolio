/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { SkillCard } from "./SkillCard";
import { useSelector } from "react-redux";

const TechnicalSkills = ({ skills }) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  const themeStyles = {
    light: {
      container: "bg-white text-gray-900",
      border: "border-gray-300",
      categoryTitle: "text-blue-800",
    },
    dark: {
      container: "bg-gray-800 text-white",
      border: "border-gray-600",
      categoryTitle: "text-blue-400",
    },
  };

  const renderCategory = (category, index) => (
    <div
      key={index}
      className={`mb-6 rounded-lg p-4 transition-colors duration-300 
        ${themeStyles[theme].container} ${themeStyles[theme].border} border`}
    >
      <div
        className={`text-lg font-semibold p-2 rounded-md mb-2 transition-colors duration-300 ${themeStyles[theme].categoryTitle}`}
      >
        {category.category}
      </div>

      <SkillCard skillsArray={category.skills} theme={theme} />
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      {skills && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="md:p-6 rounded-xl min-h-[60vh] transition-all duration-300"
        >
          {skills.map(renderCategory)}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TechnicalSkills;

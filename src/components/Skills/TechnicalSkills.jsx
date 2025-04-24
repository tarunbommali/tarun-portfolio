/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { SkillCard } from "./SkillCard";
import { useThemeStyles } from "../../hook/useThemeStyles";

const TechnicalSkills = ({ skills }) => {
  const themeStyles = useThemeStyles();

  const renderCategory = (category, index) => (
    <div
      key={index}
      className={`mb-6 rounded-lg p-4 transition-colors duration-300 
        ${themeStyles.container} ${themeStyles.border} border-2 `} // Apply theme styles directly
    >
      <div
        className={`text-lg font-semibold p-2 rounded-md mb-2 transition-colors border-red-800 rounded-none duration-300 ${themeStyles.categoryTitle}`} // Apply categoryTitle style
      >
        {category.category}
      </div>

      <SkillCard skillsArray={category.skills} theme={themeStyles} /> {/* Pass themeStyles to SkillCard */}
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

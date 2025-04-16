import { motion } from "framer-motion";
import { MechineCoding } from "../components/Project/MechineCoding";
import { ProjectAnimation } from "../components/Project/ProjectAnimation";
import { useThemeStyles } from "../hook/useThemeStyles";

export const Project = () => {
  const themeStyles = useThemeStyles(); 

  return (
    <>
      <div
        className={`min-h-full px-4 sm:px-6 md:px-8 py-2 transition-colors duration-300 ${themeStyles.bgColor} ${themeStyles.textColor}`}
      >
        {/* Header */}
        <div className="flex flex-col my-4 md:flex-row md:justify-between md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`text-xl md:text-3xl md:text-left font-light my-3 md:my-5 capitalize ${themeStyles.headingColor}`}
          >
            Projects
          </motion.div>

          {/* Search Input */}
          <div className="mt-2 md:mt-0">
            <input
              type="search"
              placeholder="Search projects..."
              className={`w-full sm:w-72 px-4 py-2 rounded-md border outline-none transition-colors duration-300 
                ${themeStyles.cardBg} 
                ${themeStyles.textColor} 
                ${themeStyles.borderColor} 
                placeholder-gray-500 focus:ring-2 focus:ring-blue-500`}
            />
          </div>
        </div>

        {/* Animation Section */}
        <div className={`rounded-xl border p-4 transition-all ${themeStyles.borderColor}`}>
          <ProjectAnimation />
        </div>
      </div>

      {/* Machine Coding Section */}
      <div className={`py-6 px-4 transition-colors ${themeStyles.bgColor} ${themeStyles.textColor}`}>
        <MechineCoding />
      </div>
    </>
  );
};

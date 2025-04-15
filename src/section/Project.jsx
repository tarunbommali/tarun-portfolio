import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { MechineCoding } from "../components/Project/MechineCoding";
import { ProjectAnimation } from "../components/Project/ProjectAnimation";

export const Project = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
 
  return (
    <>
    <div className={`min-h-full px-4 sm:px-6 md:px-8  transition-colors duration-300 ${isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
         {/* Page Title */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`text-xl md:text-3xl text-center md:text-left font-bold my-3 md:my-5 py-4 capitalize transition-colors ${
            isDarkTheme ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Projects
        </motion.p>

        {/* Animation Section */}
        <div className={`${isDarkTheme ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"} rounded-xl shadow-md p-4 transition-all`}>
          <ProjectAnimation />
        </div>
      </div>

      {/* Machine Coding Section */}
      <div className={`${isDarkTheme ? "bg-gray-950 text-gray-200" : "bg-gray-50 text-gray-800"} py-6 px-4 transition-colors`}>
        <MechineCoding />
      </div></>
   );
};

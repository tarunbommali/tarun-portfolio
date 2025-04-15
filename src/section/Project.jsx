import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { MechineCoding } from "../components/Project/MechineCoding";
import { ProjectAnimation } from "../components/Project/ProjectAnimation";

export const Project = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <>
      <div
        className={`min-h-full px-4 sm:px-6 md:px-8 transition-colors duration-300  py-2 ${
          isDarkTheme ? "bg-[#000000] text-gray-200" : "bg-white text-gray-800"
        }`}
      >
        <div className="flex flex-col my-4  md:flex-row md:justify-between md:items-center">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`text-xl md:text-3xl  md:text-left font-light my-3 md:my-5 capitalize transition-colors ${
              isDarkTheme ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Projects
          </motion.div>

          {/* Filters or Tabs */}
          <div className="mt-2 md:mt-0">
            <input
              type="search"
              placeholder="Search projects..."
              className={`w-full sm:w-72 px-4 py-2 rounded-md border transition-colors duration-300 outline-none
        ${
          isDarkTheme
            ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            : "bg-white text-gray-800 border-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-blue-600"
        }`}
            />
          </div>
        </div>

        {/* Animation Section */}
        <div
          className={`rounded-xl border ${
            isDarkTheme ? "border-[#4b5563]" : "border-[#d1d5db]"
          } p-4  transition-all`}
        >
          <ProjectAnimation />
        </div>
      </div>

      {/* Machine Coding Section */}
      <div
        className={`${
          isDarkTheme ? "bg-gray-950 text-gray-200" : "bg-gray-50 text-gray-800"
        } py-6 px-4 transition-colors`}
      >
        <MechineCoding />
      </div>
    </>
  );
};
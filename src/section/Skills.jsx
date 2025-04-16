import { useState } from "react";
import { technicalSkills, nonTechnicalSkills } from "../utils/skillList";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Users, Brain, Hammer } from "lucide-react";
import TechnicalSkills from "../components/Skills/TechnicalSkills";
import { useThemeStyles } from "../hook/useThemeStyles";
import { useSelector } from "react-redux";

const tabIcons = {
  1: <Code className="w-5 h-5 mr-2" />,
  2: <Users className="w-5 h-5 mr-2" />,
  3: <Brain className="w-5 h-5 mr-2" />,
  4: <Hammer className="w-5 h-5 mr-2" />,
};

const allTabs = [
  { tabId: 1, tabName: "Technical Skills" },
  { tabId: 2, tabName: "Soft Skills" },
  { tabId: 3, tabName: "Analytical & Logical Skills" },
  { tabId: 4, tabName: "Project Skills" },
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(1);
  const themeStyles = useThemeStyles();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

 

  const selectedTab =
    activeTab === 1
      ? { displayText: "Technical Skills", children: technicalSkills }
      : nonTechnicalSkills.find((tab) => tab.tabId === activeTab);

  return (
    <div
      className={`px-4 sm:px-6 md:px-8 py-2 transition-colors duration-300 ${theme == "dark" ? "#000000" : "#ffffff"} ${themeStyles.textColor}`}
    >
      <div className="flex flex-col pb-2 md:flex-row md:justify-between md:items-center">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`text-xl md:text-3xl font-light my-3 md:my-5 capitalize ${themeStyles.headingColor}`}
        >
          Skills
        </motion.div>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-3 mr-3 my-2">
          <div className="flex flex-nowrap gap-3">
            {allTabs.map((tab) => (
              <button
                key={tab.tabId}
                onClick={() => setActiveTab(tab.tabId)}
                className={`flex items-center px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.tabId
                    ? themeStyles.btnPrimary
                    : themeStyles.btnSecondary
                }`}
              >
                {tabIcons[tab.tabId]}
                {tab.tabName}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {selectedTab && (
          <motion.div
            key={selectedTab.tabId || selectedTab.displayText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className={`border p-2 rounded-xl min-h-[60vh] shadow-md transition-all duration-300 ${themeStyles.cardBg} ${themeStyles.borderColor} ${themeStyles.textColor}`}
          >
            {activeTab === 1 ? (
              <TechnicalSkills skills={selectedTab.children} />
            ) : (
              selectedTab.children.map((category, index) => (
                <div key={index} className="mb-4 p-4">
                  <h3 className={`text-lg font-semibold mb-2 ${themeStyles.headingColor}`}>
                    {category.category}
                  </h3>
                  <ul className="list-disc list-inside ml-4">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

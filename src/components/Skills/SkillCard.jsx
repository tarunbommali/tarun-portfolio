/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import { Line } from "rc-progress";
import { motion } from "framer-motion";

// Helper to get label & color based on rating
const getRatingLabelAndColor = (percentage) => {
  if (percentage <= 25) return { label: "Newbie", color: "#F87171" }; // red-400
  if (percentage <= 50) return { label: "Intermediate", color: "#FBBF24" }; // yellow-400
  if (percentage <= 75) return { label: "Pro", color: "#34D399" }; // green-400
  return { label: "Expert", color: "#60A5FA" }; // blue-400
};

export const SkillCard = ({ skillsArray }) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  const themeStyles = {
    light: {
      cardBg: "bg-gray-100",
      border: "border-gray-300",
      textPrimary: "text-gray-800",
      textSecondary: "text-gray-600",
      iconColor: "text-gray-700",
      trail: "#E5E7EB", // gray-200
    },
    dark: {
      cardBg: "bg-gray-700",
      border: "border-gray-600",
      textPrimary: "text-white",
      textSecondary: "text-gray-300",
      iconColor: "text-white",
      trail: "#4B5563", // gray-600
    },
  };

  return (
    <div className="flex flex-wrap gap-4">
      {skillsArray.map((skill, index) => {
        const percentage = (skill.rating / 5) * 100;
        const { label, color } = getRatingLabelAndColor(percentage);

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`w-full sm:w-[250px] border rounded-md shadow-md p-3 transition-colors duration-300
              ${themeStyles[theme].cardBg} ${themeStyles[theme].border}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xl ${themeStyles[theme].iconColor}`}>
                {skill.icon && React.createElement(skill.icon)}
              </span>
              <span className={`font-medium ${themeStyles[theme].textPrimary}`}>
                {skill.technology}
              </span>
              <span className={`ml-auto text-sm font-semibold ${themeStyles[theme].textSecondary}`}>
                {label}
              </span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Line
                percent={percentage}
                strokeWidth={4}
                strokeColor={color}
                trailColor={themeStyles[theme].trail}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

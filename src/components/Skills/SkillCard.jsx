/* eslint-disable react/prop-types */
import React from "react";
import { Line } from "rc-progress";
import { motion } from "framer-motion";
import { useThemeStyles } from "../../hook/useThemeStyles"; // Import useThemeStyles hook

// Helper to get label & color based on rating
const getRatingLabelAndColor = (percentage) => {
  if (percentage <= 25) return { label: "Newbie", color: "#F87171" }; // red-400
  if (percentage <= 50) return { label: "Intermediate", color: "#FBBF24" }; // yellow-400
  if (percentage <= 75) return { label: "Pro", color: "#34D399" }; // green-400
  return { label: "Expert", color: "#60A5FA" }; // blue-400
};

export const SkillCard = ({ skillsArray }) => {
  const themeStyles = useThemeStyles();

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
              ${themeStyles.cardBg} ${themeStyles.borderColor}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xl ${themeStyles.skillIconColor}`}>
                {skill.icon && React.createElement(skill.icon)}
              </span>
              <span className={`font-medium ${themeStyles.skillTextPrimary}`}>
                {skill.technology}
              </span>
              <span
                className={`ml-auto text-sm font-semibold ${themeStyles.skillTextSecondary}`}
              >
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
                trailColor={themeStyles.skillTrail}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

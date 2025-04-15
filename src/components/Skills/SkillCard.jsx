/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";

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
    },
    dark: {
      cardBg: "bg-gray-700",
      border: "border-gray-600",
      textPrimary: "text-white",
      textSecondary: "text-gray-300",
      iconColor: "text-white",
    },
  };

  return (
    <div className="flex flex-wrap gap-4">
      {skillsArray.map((skill, index) => (
        <div
          key={index}
          className={`flex items-center gap-3 mb-2 ml-2 border rounded-md shadow-md p-2 transition-colors duration-300
            ${themeStyles[theme].cardBg} ${themeStyles[theme].border}`}
        >
          <span className={`text-xl ${themeStyles[theme].iconColor}`}>
            {skill.icon && React.createElement(skill.icon)}
          </span>
          <span className={`w-32 font-medium ${themeStyles[theme].textPrimary}`}>
            {skill.technology}
          </span>
          <span className={`w-10 text-right text-sm font-semibold ${themeStyles[theme].textSecondary}`}>
            {(skill.rating / 5) * 100}%
          </span>
        </div>
      ))}
    </div>
  );
};

/* eslint-disable react/prop-types */
import { useThemeStyles } from "../../hook/useThemeStyles";
import { cn } from "../../lib/utils";


export const BentoGrid = ({ className, children }) => {
  const { bgColor, textColor } = useThemeStyles();

  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
        bgColor,  // Using the bgColor from the theme
        textColor  // Using the textColor from the theme
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}) => {
  const { bgColor, textColor, borderColor, shadowColor } = useThemeStyles();

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border p-4 transition duration-200 hover:shadow-xl",
        borderColor, // Using borderColor from the theme
        shadowColor, // Using shadowColor from the theme
        bgColor,     // Using bgColor from the theme
        textColor,   // Using textColor from the theme
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div
          className={`mt-2 mb-2 font-sans font-bold ${textColor}`} // Dynamic text color based on theme
        >
          {title}
        </div>
        <div
          className={`font-sans text-xs font-normal ${textColor}`} // Dynamic text color based on theme
        >
          {description}
        </div>
      </div>
    </div>
  );
};

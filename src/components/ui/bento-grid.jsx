/* eslint-disable react/prop-types */
import { cn } from "../../lib/utils";
import { useSelector } from 'react-redux';

export const BentoGrid = ({
  className,
  children
}) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
        theme === "dark" ? "dark" : "light" // Apply dark or light theme to the grid
      )}>
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
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border p-4 transition duration-200 hover:shadow-xl",
        theme === "dark" 
          ? "dark:border-white/[0.2] dark:bg-black dark:text-neutral-200 dark:shadow-none" 
          : "border-neutral-200 bg-white text-neutral-600 dark:text-neutral-200",
        className
      )}>
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        
        <div
          className={`mt-2 mb-2 font-sans font-bold ${
            theme === "dark" ? "text-neutral-200" : "text-neutral-600"
          }`}>
          {title}
        </div>
        <div
          className={`font-sans text-xs font-normal ${
            theme === "dark" ? "text-neutral-300" : "text-neutral-600"
          }`}>
          {description}
        </div>
      </div>
    </div>
  );
};

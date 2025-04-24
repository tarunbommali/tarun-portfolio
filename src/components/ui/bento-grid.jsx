/* eslint-disable react/prop-types */
import { useThemeStyles } from "../../hook/useThemeStyles";
import { cn } from "../../lib/utils";

export const BentoGrid = ({ className, children }) => {
  const { textColor } = useThemeStyles();

  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
        // bgColor
        textColor
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
  bgVectorUrl,
}) => {
  const { bgColor, textColor, borderColor, shadowColor } = useThemeStyles();

  return (
    <div
      className={cn(
        "group/bento shadow-input flex flex-col overflow-hidden rounded-xl border transition duration-200 hover:shadow-xl",
        borderColor,
        shadowColor,
        bgColor,
        textColor,
        className
      )}
    >
      {/* 🔷 Top Section with responsive background image */}
      <div
        className="w-full h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 bg-no-repeat bg-contain bg-white bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgVectorUrl})` }}
      >
        {header}
      </div>

      {/* 🔷 Bottom Section with responsive text layout */}
      <div className="p-4 space-y-1 transition duration-200 group-hover/bento:translate-x-2">
        <div className={`text-base font-thin font-sans ${textColor}`}>
          {title}
        </div>
        <div className={`text-sm font-light font-sans ${textColor}`}>
          {description}
        </div>
      </div>
    </div>
  );
};


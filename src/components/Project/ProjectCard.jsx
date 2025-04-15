/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { GlowingEffect } from "../ui/glowing-effect";
import { ExternalLink, Github } from "lucide-react";

export const ProjectCard = ({ area, title, description, imageURL, repoLink, liveLink }) => {
    const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
    const theme = isDarkTheme ? "dark" : "light";
  
    const themeStyles = {
      light: {
        cardBg: "bg-white border-gray-200",
        textColor: "text-black",
        descColor: "text-gray-700",
        iconColor: "text-gray-700 hover:text-black",
      },
      dark: {
        cardBg: "bg-[#1a1a1a] border-gray-700",
        textColor: "text-white",
        descColor: "text-neutral-400",
        iconColor: "text-white hover:text-teal-300",
      },
    };
  
    return (
      <li className={`min-h-[14rem]  list-none ${area}`}>
        <div className={`relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 transition-colors duration-300 ${themeStyles[theme].cardBg}`}>
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col md:flex-row overflow-hidden rounded-xl p-4">
            <img
              src={imageURL}
              alt={title}
              className="rounded-lg object-cover h-40  mb-4"
            />
            <div className="px-2">
            <div className="flex-1 space-y-2">
              <h3 className={`text-xl font-semibold ${themeStyles[theme].textColor}`}>
                {title}
              </h3>
              <p className={`text-sm ${themeStyles[theme].descColor}`}>
                {description}
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <a href={repoLink} target="_blank" rel="noopener noreferrer">
                <Github className={`h-5 w-5 transition-colors ${themeStyles[theme].iconColor}`} />
              </a>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className={`h-5 w-5 transition-colors ${themeStyles[theme].iconColor}`} />
              </a>
            </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
  
/* eslint-disable react/prop-types */

import { useThemeStyles } from "../../hook/useThemeStyles";
import { GlowingEffect } from "../ui/glowing-effect";
import { ExternalLink, Github } from "lucide-react";

export const ProjectCard = ({ area, title, description, imageURL, repoLink, liveLink }) => {
  const themeStyles = useThemeStyles(); 

  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div
        className={`relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 transition-colors duration-300 ${themeStyles.projectcardBg}`}
      >
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
            className="rounded-lg object-cover h-40 mb-4"
          />
          <div className="px-2">
            <div className="flex-1 space-y-2">
              <h3 className={`text-xl font-semibold ${themeStyles.projecttextColor}`}>
                {title}
              </h3>
              <p className={`text-sm ${themeStyles.projectdescColor}`}>
                {description}
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <a href={repoLink} target="_blank" rel="noopener noreferrer">
                <Github className={`h-5 w-5 transition-colors ${themeStyles.projecticonColor}`} />
              </a>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className={`h-5 w-5 transition-colors ${themeStyles.projecticonColor}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

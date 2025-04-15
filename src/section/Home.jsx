import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import PROFILE_IMG from "../assets/PROFILE_IMG.webp";
import { SparklesCore } from "../components/ui/sparkles-core";
import TypewriterComponent from "../components/Animation/TypeWrite";
import { WHATSAPP_URL, RESUME_DOWNLOAD_LINK } from "../utils/constants";
import SocialMenu from "../components/global/SocialMenu";
import { tsObject } from "../components/Animation/tsObject";

const Home = () => {
  const [init, setInit] = useState(false);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  const themeStyles = {
    light: {
      textColor: "text-gray-900",
      headingColor: "text-blue-600",
      btnPrimary: "bg-blue-500 hover:bg-blue-600 text-white",
      btnSecondary: "bg-gray-700 hover:bg-gray-800 text-white",
      bgColor: "bg-gray-100",
      particleColor: "#000000",
    },
    dark: {
      textColor: "text-white",
      headingColor: "text-blue-400",
      btnPrimary: "bg-green-500 hover:bg-green-600 text-white",
      btnSecondary: "bg-gray-500 hover:bg-gray-600 text-white",
      bgColor: "bg-gray-900",
      particleColor: "#ffffff",
    },
  };

  // Initialize tsparticles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => tsObject, []);

  return (
    <div className={`relative min-h-screen w-full p-11 overflow-hidden ${themeStyles[theme].bgColor} transition-colors duration-300`}>
      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 w-full h-full -z-10"
          options={options}
        />
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen text-center sm:px-10">
        <div className="hero flex flex-col lg:flex-row items-center lg:justify-center bg-transparent min-h-screen">
          <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start">
            
            {/* Profile with Sparkles */}
            <div className="relative w-[300px] h-[300px] mb-6 md:mr-44 lg:mb-0">
              <SparklesCore
                background="transparent"
                minSize={0.6}
                maxSize={1.2}
                speed={2}
                particleColor={themeStyles[theme].particleColor}
                particleDensity={90}
                className="absolute inset-0 z-0 rounded-full"
              />
              <motion.img
                alt="profile"
                src={PROFILE_IMG}
                className="w-full h-full rounded-full shadow-2xl z-10 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center w-full lg:w-auto text-left">
              <h1 className={`sm:3xl  md:text-5xl ${themeStyles[theme].textColor}`}>ꫝꫀꪗ, ꫝⅈ! </h1>
              <h1 className={`sm:3xl  md:text-5xl font-bold py-2 ${themeStyles[theme].headingColor}`}>I AM, 𝒯𝒶𝓇𝓊𝓃 ℬℴ𝓂𝓂𝒶𝓁𝒾</h1>

              {/* Typewriter Effect */}
              <div className="w-auto mx-auto md:mx-0 mt-5">
                <TypewriterComponent />
              </div>

              {/* Buttons + Socials */}
              <div className="flex flex-col mt-8 space-y-4">
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-md py-2 px-5 font-semibold transition-all duration-200 hover:scale-110 ${themeStyles[theme].btnPrimary}`}
                  >
                    Engage me
                  </a>
                  <a
                    href={RESUME_DOWNLOAD_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-md py-2 px-5 font-semibold transition-all duration-200 ${themeStyles[theme].btnSecondary}`}
                  >
                    View Resume
                  </a>
                </div>
                <SocialMenu />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

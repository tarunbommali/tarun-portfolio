import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import PROFILE_IMG from "../assets/PROFILE_IMG.webp";
import TypewriterComponent from "../components/Animation/TypeWrite";
import { WHATSAPP_URL, RESUME_DOWNLOAD_LINK } from "../utils/constants";
import SocialMenu from "../components/global/SocialMenu";
import { tsObject } from "../components/Animation/tsObject";
import { useThemeStyles } from "../hook/useThemeStyles";

const Home = () => {
  const [init, setInit] = useState(false);
  const themeStyles = useThemeStyles();

  // Initialize tsparticles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => tsObject, []);

  return (
    <div
      className={`h-auto  w-full p-11 overflow-hidden ${themeStyles.bgColor} transition-colors duration-300`}
    >
      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 w-full h-full -z-10"
          options={options}
        />
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row md:justify-center items-center min-h-screen text-center sm:px-10">
        <motion.img
          alt="profile"
          src={PROFILE_IMG}
          className="w-33 h-33 md:w-54 md:h-54 lg:w-64 lg:h-64 rounded-full shadow-2xl z-10 relative object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        />

        {/* Text Content */}
        <div className="flex flex-col justify-center w-full m-4 py-8 mx-8 mt-8 lg:w-auto text-left">
          <h1 className={`sm:3xl md:text-5xl ${themeStyles.textColor}`}>
            ꫝꫀꪗ, ꫝⅈ!
          </h1>
          <h1
            className={`sm:3xl md:text-5xl font-bold py-2 ${themeStyles.headingColor}`}
          >
            I AM, TARUN BOMMALI.
          </h1>

          {/* Typewriter Effect */}
          <div className="w-auto md:mx-0 mt-5">
            <TypewriterComponent />
          </div>

          {/* Buttons + Socials */}
          <div className="flex flex-col mt-8 space-y-4">
            <div className="flex justify-start space-x-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className={`rounded-md py-2 px-5 font-semibold transition-all duration-200 hover:scale-110 ${themeStyles.btn.primary}`}
              >
                Engage me
              </a>
              <a
                href={RESUME_DOWNLOAD_LINK}
                target="_blank"
                rel="noreferrer"
                className={`rounded-md py-2 px-5 font-semibold transition-all duration-200 ${themeStyles.btn.secondary}`}
              >
                View Resume
              </a>
            </div>
            <SocialMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

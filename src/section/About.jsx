import MyAccordion from "../components/About/myAccordion";
import { ServicesList } from '../components/About/ServicesList'
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { testimonials } from "../utils/testimonials";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const About = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  const themeStyles = {
    light: {
      container: "bg-white  text-gray-900",
      heading: "text-blue-600",
    },
    dark: {
      container: "bg-[#0f0f0f] text-white",
      heading: "text-blue-400",
    },
  };

  return (
    <div
      className={`flex flex-col min-h-screen px-4 sm:px-6 md:px-8 transition-colors duration-300 ${themeStyles[theme].container}`}
    >
      {/* Page Title */}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`text-xl md:text-3xl text-center font-light py-6 capitalize transition-colors ${themeStyles[theme].heading}`}
      >
        About Me
      </motion.p>

      {/* Services Section */}
      <div className="mb-8">
        <ServicesList theme={theme} />
      </div>

      {/* Testimonials Section */}
      <div className="mb-8">
        <AnimatedTestimonials testimonials={testimonials} autoplay theme={theme} />
      </div>

      {/* Accordion Section */}
      <div className="mb-8">
        <MyAccordion theme={theme} />
      </div>
    </div>
  );
};

export default About;

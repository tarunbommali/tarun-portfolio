import MyAccordion from "../components/About/myAccordion";
import { ServicesList } from "../components/About/ServicesList";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { testimonials } from "../utils/testimonials";
import { motion } from "framer-motion";
import { useThemeStyles } from "../hook/useThemeStyles";

const About = () => {
  const themeStyles = useThemeStyles();

  return (
    <div
      className={`flex flex-col min-h-screen px-4 sm:px-6 md:px-8 transition-colors duration-300 ${themeStyles.aboutSectionBg} ${themeStyles.textColor}`}
    >
      {/* Page Title */}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`text-xl md:text-3xl sm:text-left md:text-center font-light py-6 capitalize ${themeStyles.headingColor}`}
      >
        About Me
      </motion.p>

      {/* Services Section */}
      <div className="mb-8">
        <ServicesList themeStyles={themeStyles} />
      </div>

      

      {/* Accordion Section */}
      <div className="mb-8">
        <MyAccordion themeStyles={themeStyles} />
      </div>

      {/* Testimonials Section */}
      <div className="mb-8">
        <AnimatedTestimonials
          testimonials={testimonials}
          autoplay
          themeStyles={themeStyles}
        />
      </div>
    </div>
  );
};

export default About;

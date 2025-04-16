/* eslint-disable react/prop-types */
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useThemeStyles } from "../../hook/useThemeStyles";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);
  const themeStyles = useThemeStyles(); 

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;
  
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <>
      <div className={`flex justify-center items-center font-light  text-center mb-5 text-md md:text-lg`}>
        <h1 className="border-b-2 pb-2 border-blue-500">Testimonials</h1>
      </div>

      <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">

          {/* Left Image Section */}
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{ opacity: 0, scale: 0.9, rotate: randomRotateY() }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0,
                    scale: isActive(index) ? 1 : 0.95,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9, rotate: randomRotateY() }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Content Section */}
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <h3 className={`text-md md:text-lg font-bold ${themeStyles.testimonial.nameText}`}>
                {testimonials[active].name}
              </h3>
              <p className={`text-sm ${themeStyles.testimonial.designationText}`}>
                {testimonials[active].designation}
              </p>
              <motion.p className={`mt-8 text-lg ${themeStyles.testimonial.quoteText}`}>
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>

            {/* Buttons */}
            <div className="flex gap-4 pt-12">
              <button
                onClick={handlePrev}
                className={`group/button flex h-7 w-7 items-center justify-center rounded-full ${themeStyles.testimonial.prevBtnBg}`}
              >
                <FaAngleLeft
                  className={`h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12 ${themeStyles.testimonial.prevBtnText}`}
                />
              </button>
              <button
                onClick={handleNext}
                className={`group/button flex h-7 w-7 items-center justify-center rounded-full ${themeStyles.testimonial.nextBtnBg}`}
              >
                <FaAngleRight
                  className={`h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12 ${themeStyles.testimonial.nextBtnText}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

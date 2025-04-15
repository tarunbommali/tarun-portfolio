/* eslint-disable react/prop-types */
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (

    <>
    
    <div className="flex justify-center items-center font-light text-center mb-5 text-md md:text-2xl">
        <h1 className="border-b-2 pb-2 border-blue-500">Testimonials</h1>
      </div>
      
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Left Image Section */}
        <div>
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
            <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>
              {testimonials[active].name}
            </h3>
            <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}>
              {testimonials[active].designation}
            </p>
            <motion.p className={`mt-8 text-lg ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>
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
              className={`group/button flex h-7 w-7 items-center justify-center rounded-full ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <FaAngleLeft
                className={`h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              />
            </button>
            <button
              onClick={handleNext}
              className={`group/button flex h-7 w-7 items-center justify-center rounded-full ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <FaAngleRight
                className={`h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

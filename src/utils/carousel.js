import React, { useState, useEffect, useCallback } from "react";

const Carousel = ({ miniProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize goToPrevious and goToNext
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? miniProject.length - 1 : prevIndex - 1
    );
  }, [miniProject.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === miniProject.length - 1 ? 0 : prevIndex + 1
    );
  }, [miniProject.length]);

  // Auto-update slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 10000); // Use goToNext here
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [goToNext]); // Include goToNext in dependencies

  return (
    <div className="flex flex-col md:flex-row items-center w-full mx-auto py-6 px-4 overflow-hidden">
      {/* Carousel Image */}
      <div className="relative w-full max-w-[600px] mx-auto">
        <img
          src={miniProject[currentIndex].imageUrl}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[300px] object-cover rounded-lg"
        />

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white border-none p-2 mx-2 cursor-pointer text-lg rounded-full"
          style={{ marginLeft: "-40px" }} // slight overlap on left side
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white border-none p-2 mx-2 cursor-pointer text-lg rounded-full"
          style={{ marginRight: "-40px" }} // slight overlap on right side
        >
          ❯
        </button>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {miniProject.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Project Details */}
      <div className="mt-4 md:mt-0 md:ml-6 p-4 max-w-md bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold">{miniProject[currentIndex].title}</h2>
        <p className="mt-2 text-gray-600">{miniProject[currentIndex].description}</p>
        <div className="flex mt-4">
          <a
            href={miniProject[currentIndex].repoLink}
            target="__blank"
            className="text-blue-500 mr-4"
          >
            View Repository
          </a>
          <a
            href={miniProject[currentIndex].liveLink}
            target="__blank"
            className="text-blue-500"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

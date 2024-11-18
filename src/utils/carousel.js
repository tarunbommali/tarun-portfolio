import React from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the default styles

const Carousel = ({ miniProject }) => {
  return (
    <div className="w-full max-w-[800px] mx-auto py-6">
      <ResponsiveCarousel
        showArrows={true}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
        dynamicHeight={false}
      >
        {miniProject.map((project, index) => (
          <div key={index}>
            <img
              src={project.imageUrl}
              alt={`Slide ${index + 1}`}
              className="object-cover h-[300px] rounded-lg"
            />
            <div className="legend">
              <h3 className="font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <div className="mt-2">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mr-4"
                >
                  View Repository
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;

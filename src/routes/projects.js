import React, { useEffect, useRef } from "react";
import "../components/Animation/scrollDrivenAnimation.css";
import ColumnOne from "../components/Projects/ColumnOne";
import ColumnTwo from "../components/Projects/ColumnTwo";
import ColumnThree from "../components/Projects/ColumnThree";

const Projects = () => {
  const columnsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-columns");
          } else {
            entry.target.classList.remove("animate-columns");
          }
        });
      },
      { threshold: 0.1 }
    );

    columnsRef.current.forEach((col) => {
      if (col) observer.observe(col);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center md:px-48 my-10">
      <div className="columns grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-hidden">
        <ColumnOne ref={(el) => (columnsRef.current[0] = el)} color="bg-blue-400" />
        <ColumnTwo ref={(el) => (columnsRef.current[1] = el)} color="bg-red-400" label="Main" />
        <ColumnThree ref={(el) => (columnsRef.current[2] = el)} color="bg-green-400" label="Extra" />
      </div>
    </div>
  );
};

export default Projects;

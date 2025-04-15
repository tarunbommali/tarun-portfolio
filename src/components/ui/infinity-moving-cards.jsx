/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
"use client";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { cn } from "../../lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

  // Get animation speed based on prop
  const getAnimationDuration = () => {
    switch (speed) {
      case "fast":
        return "20s";
      case "normal":
        return "40s";
      case "slow":
        return "80s";
      default:
        return "40s";
    }
  };

  // Setup animation and clone nodes once
  const addAnimation = () => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Clear previously cloned items (keep original items only)
    while (scrollerRef.current.children.length > items.length) {
      scrollerRef.current.removeChild(scrollerRef.current.lastChild);
    }

    // Clone each item once
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollerRef.current.appendChild(clone);
    });

    // Apply direction and speed
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    containerRef.current.style.setProperty("--animation-duration", getAnimationDuration());

    setStart(true);
  };

  // Re-run animation on theme change
  useEffect(() => {
    setStart(false); // reset animation
    setTimeout(() => addAnimation(), 0); // delay to trigger rerender
  }, [isDarkTheme]); // 🔁 re-run when theme changes

  return (
    <div
      key={theme} // ⏪ forces component re-render on theme switch
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              "relative w-[350px] md:w-[450px] max-w-full shrink-0 rounded-2xl border px-6 py-4 transition duration-200 border-b-0",
              theme === "dark"
                ? "bg-gradient-to-b from-zinc-800 to-zinc-900 border-zinc-700 text-white"
                : "bg-gradient-to-b from-gray-100 to-gray-50 border-zinc-200 text-neutral-800"
            )}
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold">{item.title}</h3>

              {item.problemStatement && (
                <p
                  className={cn(
                    "text-sm font-medium",
                    theme === "dark" ? "text-blue-300" : "text-blue-600"
                  )}
                >
                  {item.problemStatement}
                </p>
              )}

              <p
                className={cn(
                  "text-sm",
                  theme === "dark" ? "text-gray-300" : "text-neutral-600"
                )}
              >
                {item.description}
              </p>

              {item.topics?.length > 0 && (
                <ul className="flex flex-wrap gap-2 mt-2">
                  {item.topics.map((topic, i) => (
                    <li
                      key={i}
                      className={cn(
                        "text-xs px-2 py-0.5 rounded-md",
                        theme === "dark"
                          ? "bg-blue-900 text-blue-300"
                          : "bg-blue-100 text-blue-800"
                      )}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              )}

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-blue-500 hover:underline"
                >
                  View
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

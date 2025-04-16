import Footer from "./Footer";
import { PORTFOLIO_URL } from "./utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { Menu, X } from "lucide-react";
import { toggleSidebar } from "./store/sidebarSlice";
import { useEffect, useRef, useState } from "react";
import { toggleTheme } from "./store/themeSlice";
import { motion } from "framer-motion";
import { sectionList } from "./utils/sectionList"; // Import sectionList dynamically
import { ThemeControllerButton } from "./components/global/ThemeControllerButton";
import FloatingActions from "./FloatingActions";
import { useThemeStyles } from "./hook/useThemeStyles";

export const AppLayout = () => {
  const dispatch = useDispatch();
  const expanded = useSelector((state) => state.sidebar.expanded);
  const themeStyles = useThemeStyles();
  const sidebarRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => dispatch(toggleTheme());

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    // Optional cleanup to ensure body scroll is reset if component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [expanded]);
  

  return (
    <div
      className={`relative min-h-screen ${themeStyles.bgColor} ${themeStyles.textColor}`}
    >
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full h-[60px] md:h-[52px] flex justify-between ${themeStyles.headerBGColor} items-center px-4 md:px-8 z-50 border-b ${themeStyles.iconColors.FooterBG} ${themeStyles.borderColor}`}
      >
        <a href={PORTFOLIO_URL} className="text-2xl font-thin decoration-none">
          <code>&lt;Tarun B/&gt;</code>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {sectionList.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.sectionID}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center font-thin px-4 py-2 rounded-lg font-medium cursor-pointer transition-all duration-300 ${themeStyles.linkColor}`}
            >
              <item.icon className="w-5 h-5 mr-2" />
              {item.displayText}
            </motion.a>
          ))}
          <ThemeControllerButton handleToggle={handleToggle} />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeControllerButton handleToggle={handleToggle} />
          <button
            className="p-2 rounded-lg"
            onClick={() => dispatch(toggleSidebar())}
          >
            {expanded ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {expanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => dispatch(toggleSidebar())}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-[60px] left-0 w-[90vw] h-full transform transition-transform duration-300 md:hidden z-50 ${
          expanded ? "translate-x-0" : "-translate-x-full"
        }
          
         ${themeStyles.bgColor} ${themeStyles.textColor}`}
      >
        <nav className="flex flex-col p-4 gap-3">
          {sectionList.map((item, index) => (
           <motion.a
           key={index}
           href={`#${item.sectionID}`}
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.3 }}
           onClick={() => dispatch(toggleSidebar())}
           className={`cursor-pointer hover:underline ${
             activeSection === item.sectionID
               ? "text-blue-500 font-semibold"
               : themeStyles.textColor
           }`}
         >
           {item.displayText}
         </motion.a>
         
          ))}
        </nav>
      </aside>

      {/* Page Sections */}
      <main className={`pt-[60px] md:pt-[10px] `}>
        {sectionList.map((item) => (
          <section
            id={item.sectionID}
            key={item.id}
            className="scroll-mt-[50px]"
          >
            <item.component />
          </section>
        ))}
      </main>

      <footer>
        <Footer />
        {/* Floating Actions */}
        <FloatingActions />
      </footer>
    </div>
  );
};

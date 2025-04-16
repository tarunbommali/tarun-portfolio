import Footer from "./Footer";
import Home from "./section/Home";
import { PORTFOLIO_URL } from "./utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { Menu, X } from "lucide-react";
import { toggleSidebar } from "./store/sidebarSlice";
import { useEffect, useRef, useState } from "react";
import { toggleTheme } from "./store/themeSlice";
import { motion } from "framer-motion";
import { navMenuList } from "./utils/navMenuList";
import { ThemeControllerButton } from "./components/global/ThemeControllerButton";
import FloatingActions from "./FloatingActions";
import About from "./section/About";
import { Skills } from "./section/Skills";
import { Project } from "./section/Project";
import { useThemeStyles } from "./hook/useThemeStyles";

export const AppLayout = () => {
  const dispatch = useDispatch();
  const expanded = useSelector((state) => state.sidebar.expanded);
  const themeStyles = useThemeStyles(); 
  const sidebarRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const theme = isDarkTheme ? "dark" : "light";

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

  return (
    <div
      className={`relative min-h-screen ${themeStyles.bgColor} ${themeStyles.textColor}`}
    >
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full h-[60px] md:h-[52px] flex justify-between ${theme === "light" ? "bg-white" : "bg-black"} items-center px-4 md:px-8 z-50 border-b ${
          themeStyles.iconColors.FooterBG
        } ${themeStyles.borderColor}`}
      >
        <a href={PORTFOLIO_URL} className="text-2xl font-thin decoration-none">
          <code>&lt;Tarun B/&gt;</code>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navMenuList.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.hrefText}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center font-thin px-4 py-2 rounded-lg font-medium cursor-pointer transition-all duration-300 ${
                themeStyles.linkColor
              }`}
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
          <button className="p-2 rounded-lg" onClick={() => dispatch(toggleSidebar())}>
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
        className={`fixed top-[60px] left-0 w-full transform transition-transform duration-300 md:hidden z-50 ${
          expanded ? "translate-x-0" : "-translate-x-full"
        } ${themeStyles.bgColor} ${themeStyles.textColor}`}
      >
        <nav className="flex flex-col p-4 gap-3">
          {navMenuList.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.hrefText}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`cursor-pointer hover:underline ${
                activeSection === item.hrefText
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
      <main className="pt-[60px] md:pt-[10px]">
        <section id="home" className="relative">
          <Home />
        </section>
        <section id="skills" className="scroll-mt-[50px]">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-[50px]">
          <Project />
        </section>
        <section id="about" className="scroll-mt-[50px]">
          <About />
        </section>
        <section id="footer" className="scroll-mt-[50px]">
          <Footer />
        </section>
      </main>

      {/* Floating Actions */}
      <FloatingActions />
    </div>
  );
};

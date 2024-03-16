import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";
import Skills from "./components/skills";
import Setting from "./components/setting";
import "./App.css";
import { AudioPlayerProvider } from "./context/audioPlayerContext";


function App() {
  return (
    <AudioPlayerProvider>
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/setting" element={<Setting/>} />
        </Routes>
      </div>
    </Router>
    </AudioPlayerProvider>
  );
}

export default App;

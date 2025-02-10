import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/Global/header";
import Home from "./routes/home";
import Projects from './routes/projects'
import About from './routes/about'
import Skills from './routes/skills'
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
        </Routes>
      </div>
    </Router>
    </AudioPlayerProvider>
  );
}

export default App;

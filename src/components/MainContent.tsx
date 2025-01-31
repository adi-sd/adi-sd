import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; // Replace with your actual file paths
import About from "../pages/About";
import Work from "../pages/Work";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const MainContent: React.FC = () => {
    return (
        <div className="h-full w-full">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default MainContent;

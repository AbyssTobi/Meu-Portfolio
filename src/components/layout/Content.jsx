import React from "react";
import "./Content.css";
import { Routes, Route } from "react-router-dom";
import About from "../../views/pages/About";
import Home from "../../views/pages/Home";
import Projects from "../../views/pages/Projects";
import Skills from "../../views/pages/Skills";

const Content = props => (
    <aside className="Content">
        <Routes>
            <Route path="/" caseSensitive={false} element={<Home />} />               
            <Route path="/about" caseSensitive={false} element={<About />} />               
            <Route path="/projects" caseSensitive={false} element={<Projects />} />
            <Route path="/skills" caseSensitive={false} element={<Skills />} />
        
        </Routes>
    </aside>
)

export default Content 
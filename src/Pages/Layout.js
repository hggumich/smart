import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import "../styles.css";

export const Layout = () => {
  return (
    <div className="container">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

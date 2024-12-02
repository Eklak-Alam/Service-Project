import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './pages/Navbar/Navbar';
import Footer from "./pages/Footer";

// Page Components
import HomePage from "./pages/HomePage";
import About from "./components/About";
import NotFound from "./pages/NotFound"; // Handle undefined paths
import WhyUs from "./components/WhyUs";
import DirectorMessage from "./components/DirectorMessage";
import CoFounderMessage from "./components/CoFounderMessage";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/director-message" element={<DirectorMessage />} />
        <Route path="/co-founder-message" element={<CoFounderMessage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;

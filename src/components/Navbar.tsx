import { useState, useEffect } from "react";
import { Brain, Menu, X } from "lucide-react";
import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle opening and closing animations
  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true); // Start fade-out animation
      setTimeout(() => {
        setIsOpen(false); // Hide after animation
        setIsAnimating(false);
      }, 300); // Matches CSS animation duration (0.3s)
    } else {
      setIsOpen(true);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Brain className="logo-icon" />
          <span className="logo-text">CogniHacks 2025</span>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#schedule">Schedule</a>
            <a href="#prizes">Prizes</a>
            <a href="#faq">FAQ</a>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button onClick={toggleMenu} className="menu-button">
            {isOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        )}

        {/* Register Button (Only in Desktop) */}
        {!isMobile && <button className="register-button">Register Now</button>}
      </div>

      {/* Mobile Dropdown with Fade Animation */}
      {(isOpen || isAnimating) && (
        <div
          className={`mobile-menu ${isOpen ? "fade-in" : "fade-out"}`}
        >
          <a href="#about">About</a>
          <a href="#schedule">Schedule</a>
          <a href="#prizes">Prizes</a>
          <a href="#faq">FAQ</a>
          <button className="register-button">Register Now</button>
        </div>
      )}
    </nav>
  );
}

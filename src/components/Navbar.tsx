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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60, // Adjust for navbar height if needed
        behavior: "smooth",
      });
    }
  };

  // Handle opening and closing animations
  const toggleMenu = () => {
    if (isOpen) {
      // Start closing animation immediately
      setIsOpen(false);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false); // Remove menu after animation
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="/src/Public/CogniHacks-transparent.png"className="logo-icon" />
          <span className="logo-text">CogniHacks 2025</span>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="nav-links">
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("schedule")}>Schedule</button>
            <button onClick={() => scrollToSection("prizes")}>Prizes</button>
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
          <button onClick={() => { scrollToSection("about"); toggleMenu(); }}>About</button>
          <button onClick={() => { scrollToSection("schedule"); toggleMenu(); }}>Schedule</button>
          <button onClick={() => { scrollToSection("prizes"); toggleMenu(); }}>Prizes</button>
          <button onClick={() => { scrollToSection("prizes"); toggleMenu(); }}>Sponsors</button>
          <button className="register-button">Register Now</button>
        </div>
      )}
    </nav>
  );
}

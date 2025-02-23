import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [bgColor, setBgColor] = useState(
    "linear-gradient(to bottom, rgba(27,27,27,0.4), rgba(27,27,27,0.1))"
  );

  useEffect(() => {
    const checkBackground = () => {
      const content = document.getElementById("content");
      if (!content) return;

      const bgColor = window.getComputedStyle(content).backgroundColor;
      const rgb = bgColor.match(/\d+/g);

      if (rgb) {
        const [r, g, b] = rgb.map(Number);
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        setBgColor(
          luminance > 128
            ? "linear-gradient(to bottom, rgba(27,27,27,0.4), rgba(27,27,27,0.1))"
            : "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.1))"
        );
      }
    };

    checkBackground();
    window.addEventListener("resize", checkBackground);

    return () => window.removeEventListener("resize", checkBackground);
  }, []);

  return (
    <div
      style={{
        background: bgColor,
        backdropFilter: "blur(8px)", // Glass effect
        transition: "all 0.4s ease-in-out",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-2 h-20 flex items-center justify-between shadow-md"
    >
      {/* Logo & Navigation in a Single Div */}
      <div className="flex items-center justify-between w-full">
        <div  className="w-60 h-50">
        <img className="object-cover" src={logo} alt="Logo" />
        </div>
        {/* Navigation Links */}
        <nav className="flex text-white items-center text-lg gap-8">
          <a className="hover:text-pink-400 transition-opacity duration-300 opacity-80 hover:opacity-100" href="/">Home</a>
          <a className="hover:text-pink-400 transition-opacity duration-300 opacity-80 hover:opacity-100" href="/skills">Skills</a>
          <a className="hover:text-pink-400 transition-opacity duration-300 opacity-80 hover:opacity-100" href="/projects">Projects</a>
          <a className="hover:text-pink-400 transition-opacity duration-300 opacity-80 hover:opacity-100" href="/contact">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

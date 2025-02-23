import React from "react";
import myimg from "../assets/Shivang.png";
import AboutMe from "./AboutMe";
import GetInTouch from "./GetinTouch";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import backgroundImage from "../assets/bg.gif";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Java Developer", "Python Developer"],
    loop: 0,
  });

  return (
    <>
      {/* Background Image with Dark Overlay */}
      <div className="fixed inset-0 w-full h-full z-[-1]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Main Content */}
      <div id="content" className="relative w-full min-h-screen">
        <div className="flex flex-col items-center justify-center h-screen text-center text-white">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Shivang Saxena
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 italic mt-2">
            {text} <Cursor />
          </h2>

          {/* Profile Image */}
          <img
            src={myimg}
            alt="Shivang"
            className="mt-20 h-50 w-40 md:h-70 md:w-60 border-4 border-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 brightness-110"
          />
        </div>

        {/* Other Sections */}
        <div className="mt-16 min-h-screen">
          <AboutMe />
        </div>
        <div>
          <GetInTouch />
        </div>
      </div>
    </>
  );
};

export default Home;

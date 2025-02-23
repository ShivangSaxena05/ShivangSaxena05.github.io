import React from 'react';

const GetInTouch = () => {
  return (
    <div id="content" className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-900">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">Get in Touch</h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 text-center">So that we can talk more about...</p>
      <div className="text-center">
        <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
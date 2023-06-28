import React, { useState } from 'react';

const Display = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 relative">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isOpen ? 'h-screen' : 'h-16'}`}>
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="/logo.png"
                alt="Logo"
              />
            </div>
          </div>
          <div className="-mr-2 flex">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-white transition duration-300 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-0 h-screen w-1/2 bg-gray-900 transition-all duration-300 ease-in-out z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Add your drawer content here */}
          </div>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
            aria-label="Cerrar"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
      {!isOpen && (
        <div className="absolute right-0 top-0 h-screen w-1/2 bg-gray-900 transition-all duration-300 ease-in-out z-10 opacity-0 invisible">
          {/* Add your closed drawer content here */}
        </div>
      )}
    </nav>
  );
};

export default Display;

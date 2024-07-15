import React, { useState } from "react";
import logo from "./assets/logo.svg";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="flex justify-between md:px-0 px-4 md:justify-around items-center pb-2 shadow-lg">
        <img src={logo} className="max-w-20" />
        <div className="flex gap-4 max-md:hidden tracking-wider justify-around items-center">
          <a href="#home">Home</a>  
          <a href="#contact">Contact Us</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="flex max-md:hidden justify-around gap-6 items-center">
          <button className="text-brand text-center py-1 rounded-md">Log in</button>
          <button className="bg-brand  hover:scale-105 hover:opacity-90 text-white px-3 py-2 text-center rounded-md">
            Get Started
          </button>
        </div>
        
        <button className="md:hidden text-brand" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full border-none bg-brand p-4 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <button className="text-white mb-4" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col space-y-4">
          <a href="#home" className="text-white" onClick={toggleSidebar}>
            Home
          </a>
          <a href="#contact" className="text-white" onClick={toggleSidebar}>
            Contact Us
          </a>
          <a href="#features" className="text-white" onClick={toggleSidebar}>
            Features
          </a>
          <a href="#pricing" className="text-white" onClick={toggleSidebar}>
            Pricing
          </a>
          <p className="text-white py-1 rounded-md" onClick={toggleSidebar}>
            Log in
          </p>
          <button
            className="bg-white text-blue-600 px-4 py-2 rounded"
            onClick={toggleSidebar}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

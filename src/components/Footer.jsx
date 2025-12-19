import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 text-center bg-gray-800 text-gray-300">
      <p className="text-sm">
        © {new Date().getFullYear()} Task Manager. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

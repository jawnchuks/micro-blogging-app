import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-24">
      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Jawnchuks Design. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

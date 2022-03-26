import React from "react";
import Logo from "../components/logo";

const Header = () => {
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <Logo />
      </div>
    </header>
  );
};

export default Header;

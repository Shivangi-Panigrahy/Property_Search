

import React, { useState } from "react";
import Button from "../../../components/ui/button";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Kaufen", "Mieten", "Inserat schalten"];

  return (
    <header className="w-full px-4 sm:px-10 md:px-16 lg:px-[140px] py-6 flex justify-between items-center relative">
      <div className="font-semibold text-charcoal text-base tracking-[0.80px] leading-6 font-body-normal">
        IMMOBILIEN SUCHE
      </div>

      <div className="hidden lg:flex items-center gap-6">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="text-base font-normal leading-[150%] text-[#31393D] duration-300 ease-in hover:text-[#ABC0B6]"
          >
            {item}
          </Button>
        ))}
        <Button>Sign in</Button>
        <Button variant="ghost" className="px-1 py-0.5">
          ENG
        </Button>
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FiX size={28} className="text-charcoal" />
          ) : (
            <FiMenu size={28} className="text-charcoal" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-10 flex flex-col items-start px-4 py-6 gap-4 lg:hidden">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full text-left text-base font-normal leading-[150%] text-[#31393D] hover:text-[#ABC0B6]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Button>
          ))}
          <Button onClick={() => setIsMobileMenuOpen(false)}>Sign in</Button>
          <Button variant="ghost" className="px-1 py-0.5">
            ENG
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;

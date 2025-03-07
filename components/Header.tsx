'use client'

import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex items-center h-16 px-3 font-medium font-chakra relative">
        <Link href="/" className="uppercase flex items-center gap-1">
          <Image src="/logo.png" alt="Logo" width={16} height={16} />
          Structura
        </Link>
        <button type="button" onClick={handleMenuClick} className="absolute right-3 flex items-center gap-1.5 uppercase z-50">
          <span className="size-2 rounded-full dark:bg-amber-100 bg-amber-950"></span>{" "}
          <span>Menu</span>{" "}
        </button>
      </div>
      <Menu isOpen={isMenuOpen} onClose={handleMenuClick} />
    </>
  );
};

export default Header;

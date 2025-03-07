import Link from "next/link";
import Image from "next/image";
import React from "react";

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};
const Menu = ({ isOpen, onClose }: MenuProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-screen h-screen font-chakra z-40">
      <div
        onClick={onClose}
        className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 blur-lg"
      ></div>
      <div className="absolute top-0 right-0 h-full z-20 px-3 pb-5 bg-green flex flex-col justify-between">
        <nav className="flex flex-col pt-20 w-full sm:w-96 text-5xl z-20">
          <Link href="/" className="p-4 w-full">
            Home
          </Link>
          <Link href="/" className="p-4 w-full">
            About
          </Link>
          <Link href="/" className="p-4 w-full">
            Projects
          </Link>
          <Link href="/" className="p-4 w-full">
            Blogs
          </Link>
          <Link href="/" className="p-4 w-full">
            Contact
          </Link>
        </nav>

        <div className="text-center">
          <hr className="opacity-50" />
          <div className="flex items-center gap-1 mt-3.5 text-sm uppercase font-medium">
            <Image src="/logo.png" alt="Logo" width={16} height={16} />
            Stuctura
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

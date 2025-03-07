import Link from "next/link";
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
        className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 cursor-pointer backdrop-blur-sm"
      ></div>
      <div className="absolute top-0 right-0 h-full z-20 px-3 pb-5 bg-green flex flex-col justify-between">
        <nav className="flex flex-col pt-20 w-full sm:w-[400px] text-5xl z-20">
          <Link href="/" className="p-4 pr-1 w-full">
            Home
          </Link>
          <Link href="/" className="p-4 pr-1 w-full">
            About
          </Link>
          <Link href="/" className="p-4 pr-1 w-full">
            Projects
          </Link>
          <Link href="/" className="p-4 pr-1 w-full">
            Blogs
          </Link>
          <Link href="/" className="p-4 pr-1 w-full">
            Contact
          </Link>
        </nav>

        <div className="text-center">
          <hr className="opacity-50" />
          <nav className="flex justify-around text-sm gap-4 m-4 mb-1 uppercase font-medium">
            <Link href="/">
              Linkedin
            </Link>
            <Link href="/">
              Facebook
            </Link>
            <Link href="/">
              Twitter
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;

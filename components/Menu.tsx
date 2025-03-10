import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";
// import TextWrapper from "./ui/TextWrapper";

gsap.registerPlugin(useGSAP);

type MenuProps = {
  isOpen: boolean;
  menuTl: gsap.core.Timeline | null;
  onClose: () => void;
};

const Menu = ({ isOpen, onClose, menuTl }: MenuProps) => {
  const menu = useRef<HTMLDivElement>(null);
  const bgBlur = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      menuTl
        ?.to(".menuNav, .inner", {
          x: 0,
          ease: "power1.out",
          stagger: {
            amount: 0.3,
          },
        })
        .to(
          bgBlur.current,
          {
            autoAlpha: 1,
          },
          "0"
        )
        .to(
          ".link",
          {
            x: 0,
            duration: 0.5,
          },
          "<+0.3"
        )
        .to(
          ".botNav a",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "<+0.1"
        )
        .to(
          ".botNav hr",
          {
            scaleX: 1,
            duration: 0.5,
          },
          "<"
        )
        .duration(menuTl?.reversed() ? 0.7 : menuTl?.duration());
    },
    { scope: menu, dependencies: [isOpen] }
  );

  return (
    <div
      ref={menu}
      className="fixed top-0 left-0 w-screen h-screen font-chakra z-40"
    >
      <div
        onClick={onClose}
        ref={bgBlur}
        className="absolute top-0 left-0 w-full h-full bg-black/80 z-10 cursor-pointer backdrop-blur-sm opacity-0"
      />
      <div className="menuNav bg-white">
        <div className="inner bg-amber-200" />
        <div className="inner bg-black" />
        <div className="inner flex flex-col justify-between bg-green pb-5">
          <nav className="flex flex-col pt-20 text-5xl sm:text-6xl font-medium">
            <Link href="/" className="link after:content-['Home']">
              Home
            </Link>
            <Link href="/" className="link after:content-['About']">
              About
            </Link>
            <Link href="/" className="link after:content-['Projects']">
              Projects
            </Link>
            <Link href="/" className="link after:content-['Blogs']">
              Blogs
            </Link>
            <Link href="/" className="link after:content-['Contact']">
              Contact
            </Link>
          </nav>

          <div className="botNav px-3 text-center">
            <hr className="opacity-50 scale-x-0 origin-right" />
            <nav className="flex justify-around text-sm gap-4 m-4 mb-1 uppercase font-medium">
              <Link href="/" className="relative group">Linkedin<span className="hover-link"></span></Link>
              <Link href="/" className="relative group">Facebook<span className="hover-link"></span></Link>
              <Link href="/" className="relative group">Twitter<span className="hover-link"></span></Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

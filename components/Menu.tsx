import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";
import TextWrapper from "./ui/TextWrapper";

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
      menuTl?.to(".menuNav, .inner", {
        x: 0,
        ease: "power1.out",
        stagger: {
          amount: 0.3,
        },
      })
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
        className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 cursor-pointer backdrop-blur-sm opacity-0"
      />
      <div className="menuNav bg-white">
        <div className="inner bg-amber-200" />
        <div className="inner bg-black" />
        <div className="inner flex flex-col justify-between bg-green">
          <nav className="flex flex-col pt-20 text-5xl">
            <Link href="/" className="py-5 px-10 w-full">
              <TextWrapper>
                Home
              </TextWrapper>
            </Link>
            <Link href="/" className="py-5 px-10 w-full">
              <TextWrapper>
                About
              </TextWrapper>
            </Link>
            <Link href="/" className="py-5 px-10 w-full">
              <TextWrapper>
              Projects
              </TextWrapper>
            </Link>
            <Link href="/" className="py-5 px-10 w-full">
              <TextWrapper>
              Blogs
              </TextWrapper>
            </Link>
            <Link href="/" className="py-5 px-10 w-full">
              <TextWrapper>
              Contact
              </TextWrapper>
            </Link>
          </nav>

          <div className="text-center">
            <hr className="opacity-50" />
            <nav className="flex justify-around text-sm gap-4 m-4 mb-1 uppercase font-medium">
              <Link href="/">Linkedin</Link>
              <Link href="/">Facebook</Link>
              <Link href="/">Twitter</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

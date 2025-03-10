"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Menu from "./Menu";
import Image from "next/image";
import { useTimeline } from "@/context/TimelinContext";
import TextWrapper from "./ui/TextWrapper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const loader = useRef<HTMLDivElement>(null);
  const menuTl = useRef<gsap.core.Timeline | null>(null);

  const timeline = useTimeline();

  useGSAP(
    () => {
      menuTl.current = gsap.timeline({ paused: true });

      timeline?.to(
        ".element",
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "<+=0.2"
      );
    },
    { scope: loader, dependencies: [timeline] }
  );

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Is menu reversed: ", menuTl.current?.reversed());
    console.log("Is menu open: ", isMenuOpen);
    if (!isMenuOpen) {
      // menuTl.current?.
      menuTl.current?.play();
    } else {
      menuTl.current?.reverse().then(() => {
        menuTl.current?.clear();
      });
    }
  };

  return (
    <>
      <div
        ref={loader}
        className="flex items-center h-16 px-3 font-medium font-chakra relative"
      >
        <TextWrapper>
          <Link
            href="/"
            className="uppercase flex items-center gap-1 -translate-y-full element"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={0}
              height={0}
              className="size-4"
            />
            Structura
          </Link>
        </TextWrapper>
        <div className="absolute h-7 overflow-hidden top-4 right-3 z-50 group opacity-0 -translate-y-full element">
          <button
            type="button"
            onClick={handleMenuClick}
            style={{
              transform: isMenuOpen ? "translateY(-50%)" : "translateY(0)",
            }}
            className="flex flex-col items-center uppercase transition-transform duration-300 outline-0"
          >
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full dark:bg-amber-100 bg-amber-950"></span>{" "}
              <span>Menu</span>{" "}
            </div>
            <span className="hover-link w-full z-[100]"></span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-black">x</span>{" "}
              <span>Close</span>{" "}
            </div>
            <span className="hover-link w-full z-[100]"></span>
          </button>
        </div>
      </div>
      <Menu
        isOpen={isMenuOpen}
        menuTl={menuTl.current}
        onClose={handleMenuClick}
      />
    </>
  );
};

export default Header;

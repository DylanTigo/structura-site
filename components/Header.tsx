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
  const timeline = useTimeline();

  useGSAP(() => {
    timeline?.to(".element", {
      y: 0,
      duration: 0.7,
    }, "<+=0.2");
  }, { scope: loader, dependencies: [timeline] });

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div ref={loader} className="flex items-center h-16 px-3 font-medium font-chakra relative">
        <TextWrapper>
          <Link href="/" className="uppercase flex items-center gap-1 -translate-y-full element">
            <Image src="/logo.png" alt="Logo" width={0} height={0} className="size-4" />
            Structura
          </Link>
        </TextWrapper>
        <TextWrapper className="absolute right-3 z-50">
          <button
            type="button"
            onClick={handleMenuClick}
            className="flex items-center gap-1.5 uppercase -translate-y-full element"
          >
            <span className="size-2 rounded-full dark:bg-amber-100 bg-amber-950"></span>{" "}
            <span>Menu</span>{" "}
          </button>
        </TextWrapper>
      </div>
      <Menu isOpen={isMenuOpen} onClose={handleMenuClick} />
    </>
  );
};

export default Header;

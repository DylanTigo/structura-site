import Image from "next/image";
import React, { useRef } from "react";
import Button from "./ui/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTimeline } from "@/context/TimelinContext";
import { splitText } from "@/utilis";
import TextWrapper from "./ui/TextWrapper";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const timeline = useTimeline();
  const hero = useRef(null);
  const image = useRef(null);
  const stats = useRef(null);

  const description =
    "We are passionate about transforming your visions into tangible realities. With our expertise in modern and sustainable architecture, we create spaces that inspire and endure. Your dreams, our expertise.";

  useGSAP(
    () => {
      timeline
        ?.from(
          ".title span",
          {
            opacity: 0,
            y: 40,
            duration: 0.7,
            stagger: 0.01,
          },
          "+0.7"
        )
        .from(
          ".description span",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            stagger: 0.009,
          },
          "<"
        )
        .to(".btn",{
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5
        }, "<+0.3")
        .to(
          stats.current,
          {
            opacity: 1,
            scale: 1,
          },
          "<-0.1"
        )
        .to(
          image.current,
          {
            scale: 1,
            duration: 1,
            ease: "sine.out",
          },
          "0+=0.5"
        );

      timeline?.play();
    },
    { scope: hero, dependencies: [timeline] }
  );


  return (
    <main
      ref={hero}
      className="flex lg:h-[calc(100vh-72px)] sm:max-h-[100vw] max-sm:min-h-[calc(100vh-72px)] w-full font-sans text-white relative"
    >
      <div className="w-full h-full absolute top-0 left-0 -z-10 bg-black/40"></div>
      <div className="w-full h-full absolute top-0 left-0 -z-20 overflow-hidden">
        <Image
          ref={image}
          src="/image.png"
          alt="Hero background"
          fill
          priority
          className="object-cover scale-125"
        />
      </div>
      <div className="w-full m-3 relative">
        <div className="mt-5 xs:mt-10 sm:mt-16 sm:ml-12 mb-[25vh]">
          <div className="space-y-2 sm:space-y-7">
            <h1 className="title uppercase font-medium text-[calc(38px+2vmin)] sm:text-[calc(50px+1vmin)] leading-tight sm:text-nowrap font-chakra mr-2">
              <TextWrapper>{splitText("Let’s build your")}</TextWrapper>
              <TextWrapper>{splitText("dream together")}</TextWrapper>
            </h1>
            <p className="description max-sm:text-sm sm:max-w-md w-4/5 font-light origin-top-left">
              <TextWrapper>
                {description.split(" ").map((char, index) => (
                  <span key={index} style={{ display: "inline-block" }}>
                    {char + "\u00A0"}
                  </span>
                ))}
              </TextWrapper>
            </p>
          </div>

          <div className="flex items-center gap-3.5 mt-8 sm:mt-16">
            <Button type="secondary" className="btn opacity-0 translate-y-2 scale-110 group">
              <TextWrapper className="flex flex-col h-6">
              <div className="group-hover:-translate-y-full transition-transform">Learn more</div>
              <div className="group-hover:-translate-y-full transition-transform">Learn more</div>
              </TextWrapper>
            </Button>
            <Button type="primary" className="btn opacity-0 translate-y-2 scale-110 group">
              <TextWrapper className="flex flex-col h-6">
                <div className="group-hover:-translate-y-full transition-transform">Get Started</div>
                <div className="group-hover:-translate-y-full transition-transform">Get Started</div>
              </TextWrapper>
            </Button>
          </div>
        </div>
        <div ref={stats} className=" absolute right-0 bottom-0 flex justify-center gap-6 leading-none bg-green/60 h-fit w-full sm:w-fit py-8 sm:px-16 opacity-0 scale-95">
          <div className="flex flex-col justify-center items-center font-chakra">
            <span className="text-[calc(30px+2vmin)] sm:text-[calc(44px+1vmin)] font-medium">
              87
            </span>
            <span>Clients</span>
          </div>
          <div className="flex flex-col justify-center items-center font-chakra">
            <span className="text-[calc(30px+2vmin)] sm:text-[calc(44px+1vmin)] font-medium">
              43
            </span>
            <span>Expert</span>
          </div>
          <div className="flex flex-col justify-center items-center font-chakra">
            <span className="text-[calc(30px+2vmin)] sm:text-[calc(44px+1vmin)] font-medium">
              98%
            </span>
            <span>Satisfaction</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

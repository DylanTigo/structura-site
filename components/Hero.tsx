import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <main className="flex h-[calc(100vh-84px)] w-full font-sans relative">
      <div className="w-full h-full absolute top-0 left-0 -z-10 bg-black/40"></div>
      <div className="w-full h-full absolute top-0 left-0 -z-20">
        <Image
          src="/image.png"
          alt="Hero background"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full m-3 relative">
        <div className="mt-5 xs:mt-10 sm:mt-16 sm:ml-12">
          <div className="space-y-2 sm:space-y-7">
            <h1 className="uppercase font-medium text-[calc(38px+2vmin)] sm:text-[calc(50px+1vmin)] leading-tight sm:text-nowrap font-chakra mr-2"> 
              Let’s build your <div className="block">the Future</div>
            </h1>
            <p className="max-sm:text-sm sm:max-w-md w-4/5">
              We are passionate about transforming your visions into tangible
              realities. With our expertise in modern and sustainable
              architecture, we create spaces that inspire and endure. Your dreams,
              our expertise.{" "}
            </p>
          </div>

          <div className="flex items-center gap-3.5 mt-8 sm:mt-16">
            <Button type="secondary">Learn more</Button>
            <Button type="primary">Start building</Button>
          </div>
        </div>
        <div className=" absolute right-0 bottom-0 flex justify-center gap-6 leading-none bg-green/60 h-fit w-full sm:w-fit py-10 sm:px-20">
          <div className="flex flex-col justify-center items-center font-chakra">
            <span className="text-[calc(30px+2vmin)] sm:text-[calc(44px+1vmin)] font-medium">87</span>
            <span>Clients</span>
          </div>
          <div className="flex flex-col justify-center items-center font-chakra">
            <span className="text-[calc(30px+2vmin)] sm:text-[calc(44px+1vmin)] font-medium">43</span>
            <span>Expert</span>
          </div>
          <div className="flex flex-col justify-center items-center font-chakra">
            <span className="text-[calc(30px+2vmin)] sm:text-[calc(44px+1vmin)] font-medium">98%</span> 
            <span>Satisfaction</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

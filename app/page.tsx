'use client';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Loader from "@/components/Loader";
import { TimelineProvider } from "@/context/TimelinContext";

gsap.registerPlugin(useGSAP);

export default function Home() {

  return (
    <TimelineProvider>
      <div className="px-2.5 max-w-7xl mx-auto">
        <Loader />
        <Header />
        <Hero/>
      </div>
    </TimelineProvider>
  );
}

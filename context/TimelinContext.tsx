import { createContext, useContext, useRef } from "react";
import gsap from "gsap";

const TimelineContext = createContext<gsap.core.Timeline | null>(null);

export const TimelineProvider = ({ children }: { children: React.ReactNode }) => {
  const timeline = useRef(gsap.timeline({ paused: true, ease: "power4.inOut" })); // Timeline globale

  return (
    <TimelineContext.Provider value={timeline.current}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);

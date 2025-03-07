import { useTimeline } from "@/context/TimelinContext";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Loader = () => {
  const loader = useRef<HTMLDivElement>(null);
  const timeline = useTimeline();

  useGSAP(() => {
    timeline?.to(".loader-item", {
        opacity: 0,
        stagger: {
          amount: 0.3,
          from: "random",
        },
        ease: "power4.out",
      }).to(loader.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
        onComplete: () => {
          if (loader.current) {
            loader.current.style.display = "none";
          }
        }
      }, ">-0.5");
  }, [timeline]);

  return (
    <div
      ref={loader}
      className="fixed inset-0 z-[100] grid grid-cols-[repeat(4,1fr)] sm:grid-cols-[repeat(6,1fr)] md:grid-cols-[repeat(8,1fr)] content-center divide-x divide-y divide-white"
    >
      {Array.from({ length: 90 }).map((_, i) => (
        <div
          key={i}
          className="bg-black w-full aspect-square loader-item"
        ></div>
      ))}
    </div>
  );
};

export default Loader;

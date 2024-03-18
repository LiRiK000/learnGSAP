"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const First = () => {
  gsap.registerPlugin(ScrollTrigger);
  const elementRef = useRef(null);
  useGSAP(() => {
    gsap.to(elementRef.current, {
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top center",
        end: "bottom center",
        markers: true,
      },
      scale: 2,
      delay: 1,
      ease: "power4",
    });
  }, []);
  return (
    <>
      <div className="h-[400px] w-screen flex justify-center items-center">
        <div className="h-[200px] w-80 bg-green-400" ref={elementRef}></div>
      </div>
    </>
  );
};

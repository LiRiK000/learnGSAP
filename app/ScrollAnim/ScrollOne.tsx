"use client";

import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const ScrollOne = () => {
  const el = useRef(null);
  const q = gsap.utils.selector(el);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(q("#block"), {
      xPercent: 100,
      scrollTrigger: {
        trigger: "#container",
        pin: true,
      },
    });
  }, []);

  // useGSAP(() => {
  //   tl.from("#yellow", { xPercent: 110 })
  //     .from("#violet", { xPercent: -100 })
  //     .from("#blue", { yPercent: 100 })
  //     .from("#green", { yPercent: 100 });
  //   ScrollTrigger.create({
  //     animation: tl,
  //     trigger: "#container",
  //     start: "top top",
  //     end: "+=4000",
  //     scrub: true,
  //     pin: true,
  //     pinSpacing: false,
  //     anticipatePin: 1,
  //   });
  // }, []);
  return (
    <div id="container" ref={el}>
      <div className="h-screen bg-yellow-400" id="block">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-5xl">1</h1>
        </div>
      </div>
      <div className="h-screen bg-violet-400" id="block">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-5xl">2</h1>
        </div>
      </div>
      <div className="h-screen bg-blue-400" id="block">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-5xl">3</h1>
        </div>
      </div>
      <div className="h-screen bg-green-400" id="block">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-5xl">4</h1>
        </div>
      </div>
    </div>
  );
};

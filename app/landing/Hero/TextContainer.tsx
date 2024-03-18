"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const TextContainer = () => {
  useGSAP(() => {
    gsap.fromTo(
      TextContainerRef.current,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
      }
    );
  }, []);
  const TextContainerRef = useRef(null);
  return (
    <div
      data-name="text-container"
      ref={TextContainerRef}
      style={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex text-center text-white mt-12">
          <h1 className="text-balance text-5xl font-medium md:text-7xl">
            Designs that shine with dynamic intelligence.
          </h1>
        </div>
        <div className="flex justify-center text-center mt-2 text-white">
          <p className="text-xl text-gray-500">
            The AI features you need to transport your business from the little
            leagues to the big time.
          </p>
        </div>
      </div>
    </div>
  );
};

"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const VideoContainer = () => {
  const ImageContainerRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      ImageContainerRef.current,
      {
        opacity: 0,
        y: 400,
      },
      {
        opacity: 1,
        y: -200,
        duration: 2,
        delay: 2,
      }
    );
  }, []);
  return (
    <div
      data-name="image-container"
      ref={ImageContainerRef}
      style={{ opacity: 0 }}
    >
      <div className="w-[800px] h-[200px] mx-auto my-[30vh] -z-10">
        <video
          muted
          autoPlay
          loop
          src="/fallback-v2023-black.mp4"
          className="pointer-events-none"
        />
      </div>
    </div>
  );
};

"use client";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";

const One = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(elementRef.current, {
      x: screenWidth,
      duration: 5,
      ease: "power1.inOut",
    }).to(elementRef.current, {
      x: 0,
      duration: 5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="container">
      <div className="box" ref={elementRef}>
        {/* Hello */}
      </div>
    </div>
  );
};

export default One;

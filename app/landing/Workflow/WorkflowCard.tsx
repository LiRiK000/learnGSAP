import React, { useRef } from "react";

import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const WorkflowCard = () => {
  const WorkflowCardRef = useRef(null);
  const TextBlockRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      TextBlockRef.current,
      {
        y: 125,
      },
      {
        scrollTrigger: {
          trigger: TextBlockRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        duration: 1,
        y: -5,
        opacity: 1,
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      WorkflowCardRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1 }
    );
  }, []);

  return (
    <div
      data-name="workflow-card"
      ref={WorkflowCardRef}
      style={{ opacity: 0 }}
      className="my-12"
    >
      <div
        className="w-screen text-white text-center mx-auto z-10"
        ref={TextBlockRef}
      >
        <h1 className="text-8xl font-bold">
          Your Glisten. <br />
          Your workflow.
        </h1>
      </div>
      <div className="glow-green" />
      <div
        className="max-w-7xl w-auto h-max mx-auto mt-16 grid items-center gap-8 rounded-xl border
      border-blue-50/20 bg-gradient-to-b from-slate-50/15
      to-slate-50/5 px-8 py-8 backdrop-blur-sm sm:grid-cols-1 xl:grid-cols-2 lg:gap-0 lg:py-12"
      >
        <div className="xl:-translate-x-[15%] max-w-[700px]">
          <Image
            src="/65dfb3a79c42d04f7d969973_showcase-image.png"
            alt="code"
            height={1000}
            width={1000}
          />
        </div>
        <div className="text-white xl:-mt-28">
          <h1 className="text-white text-4xl mb-2 font-bold">
            Design the next big thing.
          </h1>
          <div className="font-semibold">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

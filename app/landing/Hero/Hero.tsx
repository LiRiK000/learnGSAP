import React from "react";
import { TextContainer } from "./TextContainer";
import { VideoContainer } from "./videoContainer";

export const Hero = () => {
  return (
    <div className="relative h-screen w-screen">
      <TextContainer />
      <VideoContainer />
    </div>
  );
};

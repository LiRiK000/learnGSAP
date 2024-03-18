import { ImageContainer } from "./imageContainer";
import React from "react";
import { TextContainer } from "./TextContainer";

export const Hero = () => {
  return (
    <div className="relative">
      <TextContainer />
      <ImageContainer />
    </div>
  );
};

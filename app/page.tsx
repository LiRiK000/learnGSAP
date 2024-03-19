"use client";

import { Hero } from "./landing/Hero/Hero";
import { ScrollOne } from "./ScrollAnim/ScrollOne";
import { Workflow } from "./landing/Workflow/Workflow";

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[rgb(24,23,24)]">
      <Hero />
      <Workflow />
    </main>
  );
};

export default page;

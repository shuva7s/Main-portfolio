"use client";
import HomeImageCard from "@/components/HomeImageCard";
import { ModeToggle } from "@/components/ModeToggle";
import ScrollSections from "@/components/ScrollSections";
import TextReveal from "@/components/TextReveal";
import WaveAnimation from "@/components/Wave";
// import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    // <ReactLenis root>
    <main>
      <section className="w-full max-w-7xl mx-auto min-h-[95vh] flex flex-col items-center justify-evenly lg:flex-row lg:justify-between px-4 md:px-6 lg:px-8">
        <div className="uppercase flex flex-col text-muted-foreground my-8 items-center lg:items-start">
          <span className="large_head_text">YET</span>
          <span className="large_head_text">&OTHER</span>
          <TextReveal
            word="BORING?"
            className="large_head_text text-green-500"
            startingDelay={0}
          />
          <div className="relative">
            <span className="large_head_text text-foreground">PORTFOLIO</span>
            <WaveAnimation className="absolute bottom-0 translate-y-[45%]" />
          </div>
        </div>
        <div className="flex justify-center items-center my-4">
          <HomeImageCard />
        </div>

        {/* <ModeToggle /> */}
      </section>

      <ScrollSections />
      <section className="w-full min-h-screen flex justify-center items-center">
        E
      </section>
    </main>
    // </ReactLenis>
  );
}

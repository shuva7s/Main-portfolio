"use client";
import { ModeToggle } from "@/components/ModeToggle";
import ScrollSections from "@/components/ScrollSections";
// import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    // <ReactLenis root>
      <main className="text-6xl font-bold">
        <section className="w-full min-h-[95vh] flex justify-center items-center">
          <ModeToggle />
        </section>
        <ScrollSections />
        <section className="w-full min-h-screen flex justify-center items-center">
          E
        </section>
      </main>
    // </ReactLenis>
  );
}

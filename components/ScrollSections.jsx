"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const ScrollSections = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const setupAnimation = () => {
      // Remove all existing triggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Check screen size
      const isLargeScreen = window.innerWidth >= 768; // md breakpoint (768px)

      if (isLargeScreen) {
        const totalWidth =
          sectionRef.current.scrollWidth - sectionRef.current.offsetWidth;

        gsap.fromTo(
          sectionRef.current,
          {
            translateX: 0,
          },
          {
            translateX: -totalWidth,
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: "2000 bottom",
              pin: true,
              scrub: 1.3,
            },
          }
        );
      } else {
        // Reset styles for smaller screens
        gsap.set(sectionRef.current, { clearProps: "all" });
      }
    };

    setupAnimation(); // Initial setup
    window.addEventListener("resize", setupAnimation); // Reinitialize on resize

    return () => {
      window.removeEventListener("resize", setupAnimation);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={triggerRef}>
      <div ref={sectionRef} className="flex flex-col md:flex-row py-0 md:py-[5vh]">
        <section className="w-screen md:w-[98vw] grow-0 shrink-0 min-h-[90vh] bg-red-500/20 flex justify-center items-center">
          B
        </section>
        <section className="w-screen md:w-[98vw] grow-0 shrink-0 min-h-[90vh] bg-blue-500/20 flex justify-center items-center">
          C
        </section>
        <section className="w-screen md:w-[98vw] grow-0 shrink-0 min-h-[90vh] bg-green-500/20 flex justify-center items-center">
          D
        </section>
      </div>
    </div>
  );
};

export default ScrollSections;

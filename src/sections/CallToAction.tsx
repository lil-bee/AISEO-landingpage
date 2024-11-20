"use client";
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current?.getBoundingClientRect();

    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const starsRef = useRef(null);
  const borderedDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: starsRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 70% at ${mouseX}px ${mouseY}px, white, transparent)`;

  return (
    <section id="calltoaction" className="py-20 md:py-24" ref={starsRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="border border-white/15 rounded-xl py-24 overflow-hidden relative group"
          style={{
            backgroundImage: `url(${starsBg.src})`,
            backgroundPositionY,
          }}
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_70%_at_50%_20%,white,transparent)] group-hover:opacity-0 transition duration-1000"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-1000"
            style={{
              backgroundImage: `url(${gridLines.src})`,
              maskImage,
            }}
          ></motion.div>

          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center max-w-96 mx-auto">
              AI-driven SEO for everyone.
            </h2>
            <p className="max-w-72 text-lg mx-auto text-center text-white/70 tracking-tight mt-5">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-5">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

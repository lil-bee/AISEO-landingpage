"use client";
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="flex items-center h-[492px] md:h-[800px] overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
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
        duration: 120,
      }}
    >
      {/* background shadow section */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* start planet */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 border border-white/20 bg-purple-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_38%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0px_0px_50px_rgb(140,69,255)]"></div>
      {/* end planet */}
      {/* start orbit 1 */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className=" absolute w-[344px] h-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute w-2 h-2 rounded-full top-1/2 left-0 bg-white -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute w-2 h-2 rounded-full top-0 left-1/2 bg-white -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute w-2 h-2 rounded-full top-1/2 left-full bg-white -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute w-5 h-5 rounded-full top-1/2 left-full border border-white -translate-y-1/2 -translate-x-1/2"></div>
      </motion.div>
      {/* end orbit 1 */}
      {/* start orbit 2 */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="absolute w-[444px] h-[444px] md:h-[780px] md:w-[780px] border border-dashed  opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      {/* end orbit 2 */}
      {/* start orbit 3 */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 120,
          ease: "linear",
        }}
        className="absolute w-[544px] h-[544px] md:h-[980px] md:w-[980px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute w-2 h-2 rounded-full top-1/2 left-0 bg-white -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute w-2 h-2 rounded-full top-1/2 left-full bg-white -translate-y-1/2 -translate-x-1/2"></div>
      </motion.div>
      {/* end orbit 3 */}
      <div className="container relative mt-16">
        <h1 className="font-semibold text-8xl  md:text-[168px] tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 text-center mt-5">
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};

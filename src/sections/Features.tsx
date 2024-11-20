"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  ValueAnimationTransition,
} from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FetaureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercantage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 70px at ${xPercantage}% ${yPercentage}%, white, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPercantage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      repeat: Infinity,
      duration: 4,
      ease: "linear",
      repeatType: "loop",
    };
    animate(xPercantage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <div
      id="features"
      onClick={props.onClick}
      ref={tabRef}
      onMouseEnter={handleTabHover}
      className="cursor-pointer border  border-white/20 rounded-xl p-2.5 flex items-center gap-2.5 lg:flex-1 relative"
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute -m-px inset-0 border border-[#a396ff] rounded-xl"
        ></motion.div>
      )}

      <div className="border h-12 w-12 border-white/20 rounded-lg p-2.5 inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={props.icon}
          className="h-5 w-5"
          autoplay
        />
      </div>
      <div className="font-medium">{props.title}</div>
      {props.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black">
          NEW
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);
    const options: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      options
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      options
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      options
    );
  };
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center">
          Elevate your SEO efforts.
        </h2>
        <p className="md:text-xl md:max-w-2xl text-lg mx-auto text-center text-white/70 tracking-tight mt-5">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col lg:justify-between lg:flex-row  gap-3">
          {tabs.map((tab, tabIndex) => (
            <FetaureTab
              {...tab}
              onClick={() => handleSelectTab(tabIndex)}
              selected={selectedTab === tabIndex}
              key={tab.title}
            />
          ))}
        </div>
        <div className="mt-3 border border-white/20 p-2.5 rounded-xl">
          <motion.div
            className="border aspect-video bg-cover rounded-lg border-white/20 "
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${productImage.src})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container ">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center">
          Beyond Expectations.
        </h2>
        <p className="md:text-xl md:max-w-96 max-w-sm text-lg mx-auto text-center text-white/70 tracking-tight mt-5">
          Our revolutionary AI SEO tools have transformed our clients&apos;
          strategies.
        </p>
        <div className="flex  mt-10  overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex flex-none pr-5 gap-5"
          >
            {[...testimonials, ...testimonials].map((card) => (
              <div
                key={card.name}
                className="border border-white/15 max-w-sm md:max-w-md flex-none  w-auto rounded-xl p-10 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)]"
              >
                <p className="text-white text-lg tracking-tight md:text-2xl">
                  {card.text}
                </p>
                <div className="flex pt-5 gap-3 items-center">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:rounded-lg after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={card.avatarImg}
                      alt={card.title}
                      className="w-11 h-11 rounded-lg saturate-0"
                    />
                  </div>

                  <div>
                    <h5 className="text-base">{card.name}</h5>
                    <p className="text-sm text-white/50">{card.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

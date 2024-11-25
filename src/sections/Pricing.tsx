"use client";

import ChecklistIcon from "@/assets/checklist.svg";
import gridLines from "@/assets/grid-lines.png";
import { Button } from "@/components/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Pricing = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <section className="py-20 md:py-24 sm:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(86,41,157,0.5)_0%,#020103_100%)] md:bg-none">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center">
          Pricing.
        </h2>
        <p className="md:text-xl md:max-w-96 text-lg mx-auto text-center text-white/70 tracking-tight mt-5">
          Choose the right plan to meet your SEO needs and start optimizing
          today.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 mt-10 sm:bg-transparent md:bg-[radial-gradient(70%_50%_at_50%_50%,rgba(86,41,157,0.5)_0%,#020103_100%)]">
          <div className="rounded-[10px] border border-white/15 min-h-[500px] p-5 flex-1 flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h3 className="font-medium text-2xl  ">Pricing</h3>
                <p className="text-base text-white/70">$29/mo</p>
              </div>
              <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-95 dark:via-neutral-400" />
              <div className="flex flex-col gap-[10px] mt-[10px]">
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Keyword optimization</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Automated meta tags</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">SEO monitoring</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Monthly reports</p>
                </div>
              </div>
            </div>

            <button
              className={`relative rounded-lg py-2 px-3 text-sm font-medium  bg-[#3D3D3D]/40 shadow-[0px_0px_5px_#3D3D3D] transition-all ease-in-out duration-300 backdrop-blur-md shadow-inner border border-white/15 group hover:shadow-[0px_0px_12px_#8C45FF]  hover:bg-[#4A208A] `}
            >
              Join Waitlist
            </button>
          </div>

          <motion.div
            initial={{
              boxShadow: "0px 10px 74px 10px rgba(78,0,191,0)",
              border: "1px solid rgb(255, 255, 255, .15)",
            }}
            animate={
              isInView
                ? {
                    boxShadow: "0px 10px 74px 10px rgba(78,0,191,0.41)",
                    border: "1px solid rgb(255, 255, 255, .01)",
                  }
                : {}
            }
            transition={{ duration: 1, delay: 0.4 }}
            className="relative rounded-[10px] min-h-[500px] p-5 flex-1 flex flex-col justify-between"
          >
            {/* bg */}
            {/* ===== */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="absolute rounded-[10px] bg-[rgb(54,23,100)] bg-blend-overlay inset-0 [mask-image:linear-gradient(to_bottom,transparent_30%,black)]"
              style={{
                backgroundImage: `url(${gridLines.src})`,
              }}
            />

            <div className="flex flex-col z-10">
              <div className="flex flex-col">
                <h3 className="font-medium text-2xl ">Pro</h3>
                <p className="text-base text-white/70">$79/mo</p>
              </div>
              <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-95 dark:via-neutral-400" />
              <div className="flex flex-col gap-[10px] mt-[10px]">
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Keyword optimization</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Automated meta tags</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">SEO monitoring</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Monthly reports</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Content suggestions</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Link optimization</p>
                </div>
              </div>
            </div>
            <div ref={sectionRef}>
              <Button className="w-full">Join waitlist</Button>
            </div>
          </motion.div>

          <div className="rounded-[10px] border border-white/15 min-h-[500px] p-5 flex-1 flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h3 className="font-medium text-2xl ">Business</h3>
                <p className="text-base text-white/70">$149/mo</p>
              </div>
              <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-95 dark:via-neutral-400" />
              <div>
                <div className="flex flex-col gap-[10px] mt-[10px]">
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">Keyword optimization</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">Automated meta tags</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">SEO monitoring</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">Monthly reports</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">Content suggestions</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">Link optimization</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">Multi-user access</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">API integration</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={`relative rounded-lg py-2 px-3 text-sm font-medium  bg-[#3D3D3D]/40 shadow-[0px_0px_5px_#3D3D3D] transition-all ease-in-out duration-300 backdrop-blur-md shadow-inner border border-white/15 group hover:shadow-[0px_0px_12px_#8C45FF]  hover:bg-[#4A208A] `}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

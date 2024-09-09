"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import fivestarsImage from "@/assets/5stars.png";
import awardImage from "@/assets/tube1.png";
import hipaaImage from "@/assets/hipaa-compliant.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip"
      style={{ background: "radial-gradient(ellipse 200% 100% at bottom left, #D2DCFF, #EAEEFE 100%)" }}
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Meet Oli, Our AI Model Custom-Built for Audiology
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Focus on your patients, we take care of the rest.
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Power your clinic with Resonately&apos;s AI-Powered Audiology Assistant. Save time charting, <br></br>pre-charting, or writing follow-up reports.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get started for free</button>
              <button className="btn btn-text flex gap-1">
                <span>Learn more</span>
                {/* <ArrowIcon classname="h-2 w-2" /> */}
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Focus on your patients, we take care of the rest"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-0, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
            />
            {/* <motion.img
              src={noodleImage.src}
              width={220}
              height={220}
              alt="Resonately's award"
              className="hidden md:block -top-108 -left-42 md:absolute"
              style={{
                translateY: translateY,
              }}
            /> */}
            <motion.img
              src={hipaaImage.src}
              width={220}
              alt="Focus on your patients, we take care of the rest"
              className="hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg]"
              style={{
                rotate: 0,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

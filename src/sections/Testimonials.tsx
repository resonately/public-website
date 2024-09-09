"use client";
import avatar1 from "@/assets/nancy.png";
import avatar2 from "@/assets/jen.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import React, { use } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I've gained back at least 1 hour every day by not having to type notes at the end of my shift.",
    imageSrc: avatar1.src,
    name: "Practice Owner in MA",
    username: "@TBD",
  },
  {
    text: "We're in love with this tool and cannot wait to see what they can create next!!!! ",
    imageSrc: avatar2.src,
    name: "Practice Owner in MA",
    username: "@TBD",
  },
  {
    text: "TBD",
    imageSrc: avatar3.src,
    name: "Practice Owner in XX",
    username: "@TBD",
  },
  {
    text: "TBD",
    imageSrc: avatar4.src,
    name: "Practice Owner in XX",
    username: "@TBD",
  },
  {
    text: "TBD",
    imageSrc: avatar5.src,
    name: "Practice Owner in XX",
    username: "@TBD",
  },
  {
    text: "TBD",
    imageSrc: avatar6.src,
    name: "Practice Owner in XX",
    username: "@TBD",
  },
  {
    text: "TBD",
    imageSrc: avatar7.src,
    name: "Practice Owner in XX",
    username: "@TBD",
  },
  {
    text: "TBD",
    imageSrc: avatar8.src,
    name: "Practice Owner in XX",
    username: "@TBD",
  },
  {
    text: "TBD",
    imageSrc: avatar9.src,
    name: "Practice Owner in XX",
    username: "@TBD",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, imageSrc, name, username }) => (
                <div className="card" key={username}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={imageSrc}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 tracking-tight">{username}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>

          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-des mt-5">
            From intuitive design to powerful features, out app has become an essential tool for users around
            the world.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

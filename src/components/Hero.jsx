import React from "react";
import { motion } from "framer-motion";
import Computers from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center mt-5 items-center">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="heroHeadText text-white">
            Hi, I'm <span className="text-[#915EFF]">Krrish</span>
          </h1>
          <p className="heroSubText text-white-100 mt-2">
            I develop DevOps solutions that enhance system reliability,&nbsp;
            <br className="sm:block hidden" />
            and streamline deployment processes.
          </p>
        </div>
      </div>
      <Computers />
    </section>
  );
};

export default Hero;

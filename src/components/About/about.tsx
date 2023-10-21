"use client";
import React from "react"; 
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.div
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className=" h-full w-full  align-middle mt-0 px-6 md:mt-0 md:flex"
    >
      <div className="flex flex-col justify-center items-center m-0 md:flex-wrap w-full  ">
      <div className="text-white md:h-full mt-20 lg:mt-28 sm:h-1/2 flex justify-center w-full  full items-center  flex-col  md:w-[25%]">
        <h1 className="font-black text-center text-7xl  lg:mt-0 sm:mt-16 mb-6">Sobre Mí</h1>
        <p className="max-w-prose text-lg text-center text-white mb-4">
          Soy Jeremias Mingolla desarrollador Front-end con un amor por la
          creación de experiencias web interactivas. Mi objetivo es construir
          sitios web que no solo sean funcionales, sino que también ofrezcan una
          experiencia excepcional para los usuarios.
        </p>
        <p className="max-w-prose text-center text-lg  text-white mb-4">
          Ofrezco soluciones a corto plazo, soy proactivo y disfruto asumir
          roles de liderazgo. Siempre estoy buscando nuevas posibilidades y
          experiencias para aumentar mis capacidades y mantenerme al tanto de
          las últimas tendencias en desarrollo web.
        </p>
      </div>
      <div className=" h-full flex mx-auto justify-center items-center w-[40%] ">
        <Image src="/remove.png" className="" alt="remove" width={600} height={600} />
      </div>
      <div className="text-white h-full flex justify-center items-center mr-11 flex-col md:w-[20%]">
  <h1 className="lg:font-black text-center lg:text-7xl text-2xl mt-4 font-medium">Skills</h1>
  <div className="flex flex-wrap gap-6 justify-center items-center">
    <Image src="/node.png" width={40} height={40} alt="nodejs" />
    <Image src="/css.png" width={40} height={40} alt="css" />
    <Image src="/html.png" width={40} height={40} alt="html" />
    <Image src="/react.png" width={40} height={40} alt="react" />
    <Image src="/express.png" width={40} height={40} alt="express" />
    <Image src="/next.png" width={40} height={40} alt="nextjs" />
    <Image src="/redux.png" width={40} height={40} alt="redux" />
    <Image src="/post.png" width={40} height={40} alt="post" />
    <Image src="/js.png" width={40} height={40} alt="js" />
    <Image src="/tailwind.png" width={40} height={40} alt="tailwind" />
    <Image src="/type.png" width={40} height={40} alt="TypeScript" />
  </div>
</div>

      </div>
    </motion.div>
  );
}

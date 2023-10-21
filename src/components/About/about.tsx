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
      className="h-full w-full mt-0 px-6 md:mt-0 md:flex"
    >
      <div className="flex flex-col justify-center items-center m-0 md:flex-wrap w-full">
        <div className="text-white md:h-full mt-20 lg:mt-28 sm:h-1/2 flex justify-center w-full items-center flex-col md:w-[25%]">
          <h1 className="font-black text-center text-7xl lg:mt-0 sm:mt-16 mb-6">Sobre Mí</h1>
          <p className="max-w-prose text-lg text-center text-white mb-4">
            Soy Jeremias Mingolla, un apasionado desarrollador Full Stack con un enfoque en la creación de experiencias web intuitivas y atractivas. Mi objetivo es convertir ideas en soluciones tecnológicas sólidas y eficientes que satisfagan las necesidades de mis clientes y usuarios finales.
          </p>
          <p className="max-w-prose text-center text-lg text-white mb-4">
            Ofrezco un enfoque integral para el desarrollo web, lo que significa que puedo abordar proyectos desde la concepción hasta la implementación. Mi experiencia en el Front-end me permite diseñar interfaces de usuario atractivas y fáciles de usar, mientras que mi experiencia en el Back-end me permite garantizar que las aplicaciones funcionen de manera fluida y segura.
          </p>
        </div>

        <div className="h-full flex mx-auto justify-center items-center w-[40%]">
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

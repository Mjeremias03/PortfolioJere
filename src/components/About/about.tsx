"use client"
import React from "react"; // Asegúrate de importar React
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import Image from "next/image"; // Importa el componente Image de Next.js

export default function About() {

  return (
    <motion.div variants={fadeIn("right", 0.5)} initial="hidden" animate="show" exit="hidden" className="  h-screen align-middle mt-0 px-6 md:mt-0 md:flex">
      <div className="text-white h-full flex justify-center items-center flex-col w-[30%]">
        <h1 className="font-black text-center text-7xl mb-6">Sobre Mí</h1>
        <p className="max-w-prose text-lg text-center text-white mb-4">Soy un apasionado desarrollador Front-end con un amor por la creación de experiencias web interactivas. Mi objetivo es construir sitios web que no solo sean funcionales, sino que también ofrezcan una experiencia excepcional para los usuarios.</p>
        <p className="max-w-prose text-center text-lg  text-white mb-4">Ofrezco soluciones a corto plazo, soy proactivo y disfruto asumir roles de liderazgo. Siempre estoy buscando nuevas posibilidades y experiencias para aumentar mis capacidades y mantenerme al tanto de las últimas tendencias en desarrollo web.</p>
      </div>
      <div className=" h-auto flex justify-center items-center w-[40%] right-0">
      <Image src="/remove.png" alt="remove" width={600} height={600} />
      </div>
      <div className="text-white h-full flex justify-center items-center flex-col w-[30%]">
        <h1 className="font-black text-center text-7xl mb-4 ">Skills</h1>
        <div className="flex  justify-center items-center mr-7 flex-wrap gap-6">
         <Image src="/node.png" width={50} height={50}  alt="nodejs" /> 
         <Image src="/css.png" width={50} height={50}  alt="css" /> 
         <Image src="/html.png" width={50} height={50} alt="html" />
         <Image src="/react.png" width={50} height={50}  alt="react" /> 
         <Image src="/express.png" width={50} height={50}  alt="express" />
         <Image src="/next.png" width={50} height={50}  alt="nextjs" /> 
         <div className="flex justify-center items-center flew-wrap gap-6">
         <Image src="/redux.png" width={50} height={50} alt="redux" /> 
         <Image src="/post.png" width={50} height={50}   alt="post" /> 
         <Image src="/js.png" width={50} height={50}  alt="js" /> 
         <Image src="/tailwind.png" width={50} height={50}  alt="tailwind" /> 
         <Image src="/type.png" width={50} height={50}  alt="TypeScript" /> 
         </div>
        </div>
      </div>
    </motion.div>
  );
}

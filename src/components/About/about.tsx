"use client"
import React from "react"; // Asegúrate de importar React
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";


export default function About() {

  return (
    <motion.div variants={fadeIn("up", 0.5)} initial="hidden" animate="show" exit="hidden" className="flex justify-center items-center min-h-screen h-full px-6 mx-auto align-middle mt-36 md:mt-0 md:flex">
      <div className="text-white h-screen flex justify-center items-center flex-col w-[30%]">
        <h1 className="font-black text-center text-7xl mb-6">Sobre Mí</h1>
        <p className="max-w-prose text-lg text-center text-white mb-4" >Soy un apasionado desarrollador Front-end con un amor por la creación de experiencias web interactivas. Mi objetivo es construir sitios web que no solo sean funcionales, sino que también ofrezcan una experiencia excepcional para los usuarios.</p>
        <p className="max-w-prose text-center text-lg  text-white mb-4">Ofrezco soluciones a corto plazo, soy proactivo y disfruto asumir roles de liderazgo. Siempre estoy buscando nuevas posibilidades y experiencias para aumentar mis capacidades y mantenerme al tanto de las últimas tendencias en desarrollo web.</p>
      </div>
      <div className="w-auto h-auto flex justify-center items-center right-0">
        <img src="remove.png" alt="remove" />
      </div>
      <div className="text-white h-screen flex justify-center items-center flex-col w-[20%]">
        <h1 className="font-black text-center text-7xl mb-4 ">Skills</h1>
        <div className="flex justify-center items-center flex-wrap gap-6">
         <img src="node.png"alt="nodejs" />
         <img src="css.png" alt="css" />
         <img src="html.png" alt="html" />
         <img src="react.png" alt="react" />
         <img src="express.png" alt="express" />
         <img src="next.png" alt="nextjs" />
         <img src="redux.png" alt="redux" />
         <img src="post.png" alt="post" />
         <img src="js.png" alt="js" />
         <img src="tailwind.png" alt="tailwind" />
         <img src="type.png" alt="TypeScript" />
        </div>
      </div>
    </motion.div>
  );
}
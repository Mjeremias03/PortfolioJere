"use client"
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import { proyectData } from "./Proyect.data";

export function Proyect() {
  return (
      <div className="grid  md:min-h-screen lg:mt-42 mt-28 md:mt-0 place-items-center ">
        <div>
        <motion.h1 
        variants={fadeIn("left", 0.5)}
        initial= "hidden" 
        animate="show"
        exit="hidden"
        className="my-5 text-2xl text-center md:text-4xl font-extrabold ">Mis Ultimos <span className="text-sky-600 font-extrabold">Trabajos Realizados</span>
      </motion.h1>
      <motion.div
  variants={fadeIn("left", 0.5)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto gap-4 justify-center"
>
{proyectData.map(({ id, title, description, deploy, img, skills }) => (
  <div
    className=" w-full  p-4 relative hover:shadow-lg transition-transform transform hover:scale-105"
    key={id}
  >
    <div className="relative group">
  <img src={img} alt={title} className="mt-4 w-full mx-auto" />
  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
    <div className="flex items-center">
      {deploy.map((icon, index) => (
        <div key={index} className="mx-2">
          {icon.icon}
        </div>
      ))}
    </div>
  </div>
</div>
    <div className="flex flex-col mx-auto items-center justify-center">
    <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
    <p className="text-white">{description}</p>
    <div className="mt-4 flex  justify-center items-center">
  <p className="text-white flex">
   {skills.map((skill, index) => (
      <span key={index} className="mr-2">
        {skill.icon}
      </span>
    ))}
  </p>
</div>
    </div>
  </div>
))}
</motion.div>

        </div>
      </div>
  );
}

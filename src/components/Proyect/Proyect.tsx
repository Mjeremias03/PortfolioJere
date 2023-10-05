"use client";
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import { proyectData } from "./Proyect.data";

export function Proyect() {
  return (
    <div className="h-screen bg-gradient-to-b from-blue-200 via-blue-300 to-blue-500">
      <div className="grid w-full bg-gradient-to-b from-blue-200 via-blue-300 to-blue-500 md:min-h-screen place-items-center">
        <div className="mt-6 md:mt-36">
          <div className="h-12 flex justify-center items-end">
            <motion.h1
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-xl font-bold text-center md:text-4-xl"
            >
              Mis últimos <span className="font-bold text-blue-500">trabajos realizados.</span>
            </motion.h1>
          </div>
          <motion.div
            className="flex flex-col justify-center items-center w-full h-full gap-5 px-2"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="w-full">
              {proyectData.map(({ id, title, img, description, deploy, skills }) => (
                <div className="flex flex-col m-4 justify-center items-center w-full" key={id}>
                  <div className="flex justify-center group cursor-pointer items-center relative">
                    <img src={img} alt={title} className="w-64 md:w-96" />
                    <div className="absolute inset-0 flex justify-center items-center gap-3 mx-auto bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                      {deploy.map(({ icon }, index) => (
                        <a key={index} target="_blank" rel="noopener noreferrer">
                          {icon}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="w-64 md:w-96">
                    <h1 className="text-center font-black text-lg md:text-xl">{title}</h1>
                    <p className="text-center">{description}</p>
                    <h1 className="font-black text-center text-blue-500">Tecnologías implementadas:</h1>
                    <div className="text-center flex justify-center items-center flex-wrap gap-3">
                      {skills.map(({ icon }, index) => (
                        <div className="" key={index}>
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


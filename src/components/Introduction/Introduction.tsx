"use client";
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import Link from "next/link";
export function Introduction() {
  return (
    <div className="w-full h-full  z-10">
      <div className="  w-full h-full">
        <div className="container  flex flex-col mt-20 lg:mt-40 justify-center  md:flex-row items-center h-full px-5 mx-auto md:grid md:grid-cols-2 md:text-left">
          <motion.div
            className="w-full  flex justify-center items-center md:w-auto md:h-auto mx-auto"
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex items-center justify-center h-full md:w-1/2 xl:h-full xl:w-full md:h-1/2  w-[50%]  ">
              <img
                src="/JeremiasP.png"
                className=" items-center  md:h-full md:w-full"
                alt="Avatar"
              ></img>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex justify-center items-center flex-col">
              <h1 className="mb-5 text-5xl font-bold text-center md:mb-10">
                Jeremias Mingolla <br />
                <span className="text-blue-400 block text-center text-3xl mt-2 md:text-4xl">
                  Desarrollador Web FrontEnd
                </span>
              </h1>
              <p className="max-w-sm text-center text-lg md:max-w-md md:mx-0 md:mb-16 md:text-xl">
                ¡Descubre más sobre mí y mi trabajo como desarrollador FrontEnd!
              </p>
              <div className="flex items-center gap-3 md:gap-10 md:flex-row">
                <a
                  href="/proyect"
                  className="px-6 py-3 my-2 items-center transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
                >
                  Ver proyectos
                </a>
                <a
                  href="/Cv Jeremias.pdf"
                  className="px-6 py-3 my-2 items-center transition-all border-2 cursor-pointer text-blue-200 border-blue-400 rounded-xl hover:shadow-xl hover:shadow-blue-300"
                  download
                >
                  Descarga mi cv
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

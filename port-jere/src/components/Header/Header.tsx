"use client"
import Link from "next/link"
import {motion} from 'framer-motion'
import { fadeIn } from '../../utils/motionTransitions'
import {socialNetworks} from './dataHeader'
export function Header(){
    return (
        <div className='absolute z-20 inline-block w-full top-5 md:top-10'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container justify-between mx-auto md:flex">
                    <div className="flex w-full items-center justify-center gap-7">
                    <Link href="/">
                    <img className="w-36 h-20 md:w-32 md:h-20 animate-pulse " src="/J-logos_black.png" alt="Logo" />
                    </Link>
                        <div className="container justify-center items-center flex ">
                        <h1 className="  font-extrabold text-3xl text-center">Bien</h1><span className=" text-3xl text-center font-extrabold text-blue-400">Venido</span>
                            </div>
                        {socialNetworks.map(({ logo, src }) => (
                            <Link key={src} href={src} target="_blank" className="transition-all duration-300 hover:text-blue-400">
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
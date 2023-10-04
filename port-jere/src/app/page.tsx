"use client"
import { Cover } from "@/components/Cover/Cover"
import { Transition } from "@/components/Transition/Transition"

export default function Home() {
  return (
    <main className='bg-[#393A47] h-[100vh]'>
      <Cover/>
    <Transition/>
    </main>
  )
}

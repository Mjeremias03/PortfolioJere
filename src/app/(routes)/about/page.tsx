import About from "@/components/About/about"
import { Transition } from "@/components/Transition/Transition"
export default function AboutPage () {
    return (
        <div className="h-full bg-gradient-to-b from-blue-200 via-blue-300 to-blue-500 ">
         <Transition/>
            <About/>
        </div>
    )
}
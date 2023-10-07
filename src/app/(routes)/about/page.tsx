import About from "@/components/About/about"
import { Transition } from "@/components/Transition/Transition"
export default function AboutPage () {
    return (
        <div className="h-screen ">
         <Transition/>
            <About/>
        </div>
    )
}
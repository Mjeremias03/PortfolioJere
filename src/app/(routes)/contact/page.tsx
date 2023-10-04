import { Transition } from "@/components/Transition/Transition";
import { Contact } from "@/components/contact/contact";

export default function page () {
    return(
        <div className="h-screen">
            <Transition/>
            <Contact/>
        </div>
    )
}
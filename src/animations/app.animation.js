import {gsap} from "gsap";


const animateRegister = (ref) => {

    gsap.fromTo(ref.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.5
    },
        {
            scale: 1,
            opacity: 1,
            duration: 0.5,
        }
    )
}

export default animateRegister